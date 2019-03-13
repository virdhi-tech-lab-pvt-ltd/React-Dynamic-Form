import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindDispatch } from 'app/utils/redux';
import { routePaths } from 'app/utils/routePath';
import { FormView } from 'components/dump';

class FormContainer extends Component {

  componentWillMount() {
    let { actions } = this.props
    actions.handleNavMenu(routePaths.Forms)
    // actions.changeFormName('Basic Form');
    // actions.formsList();
  }

  render() {

    return (
      <div>
        <FormView {...this.props} />
      </div>
    );
  }
}

const selector = createSelector(
  state => state.app,
  state => state.theme,
  state => state.form,
  state => state.contact,
  (app, theme, form, contact) => ({ app, theme, form, contact })
);

FormContainer.propTypes = {
  app: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(selector, bindDispatch)(FormContainer);
