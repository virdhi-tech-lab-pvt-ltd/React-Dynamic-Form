import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindDispatch } from 'app/utils/redux';
import * as cookie from 'app/utils/cookie';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { disablePageScroll, enablePageScroll, PAGE_LOADER_STYLE } from 'app/utils/uiHelper';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-advanced';
import { ErrorModal } from 'components/dump/common';
import { history } from 'store';

class Layout extends React.Component {

  isAppBusy() {
    let { app } = this.props;
    app.isBusy ? disablePageScroll() : enablePageScroll();
    return app.isBusy;
  }
  startTost(message) {
    const style = () => ({
      colorSuccess: "#7685F6",
      TOP_RIGHT: {
        top: '4em',
        right: '0em'
      }
    });
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      onClose: this.tostClose()
    });
  }
  tostClose() {
    let { actions } = this.props;
    actions.handleTost({ open: false, message: '' })
  }
  componentWillMount() {
    let pathName = history.location.pathname;
    let { actions } = this.props;
    //  actions.handleUserRole(cookie.get(cookie.USER_ROLE_ID));
    //  if(!pathName.includes('Register.html') && !cookie.get(cookie.AUTHENTICATION_TOKEN)) {
    //    return history.push('/');
    //  }
  }

  componentWillReceiveProps(nextProps) {
    let { app: { error, isBusy, tost } } = nextProps;
    tost.open && this.startTost(tost.message);
  }

  render() {
    let { children } = this.props;
    return (
      <MuiThemeProvider>
        <Loader
          show={this.isAppBusy()}
          backgroundStyle={PAGE_LOADER_STYLE}
          message={<CircularProgress color={'rgb(7, 31, 73)'} size={60} thickness={3} />}>
          <div className='col-12 clearfix roboto'>
            <ToastContainer autoClose={1500} />
            <ErrorModal
              {...this.props} />
            <div className='col-12 py1 clearfix'>
              {children}
            </div>
          </div>
        </Loader>
      </MuiThemeProvider>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: PropTypes.object
}

const selector = createSelector(
  state => state.app,
  state => state.theme,
  (app, theme) => ({ app, theme })
);

export default connect(selector, bindDispatch)(Layout);
