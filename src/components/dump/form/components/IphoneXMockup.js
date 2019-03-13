import React, { Component } from 'react';
import './css/IphoneX.css';
import { Icon, Button } from 'semantic-ui-react';
import { fieldMethod } from './InputIndex';
import moment from 'moment';
import _ from 'lodash';

const styles = {
  header: {
    color: 'gray',
    background: '#FAFAFA',
    fontSize: '1em',
    fontWeight: 'bold',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
  },
  content: {
    background: '#FAFAFA',
    color: 'gray',
    height: '34.6rem',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px'
  },
  status: {
    padding: '2px 5px 0px 52px',
    fontSize: '0.8rem',
    textAlign: 'right'
  },
  timeSpace: {
    letterSpacing: '0.1em'
  },
  sample: {
    height: '30rem'
  }
}

export default class IphoneX extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curTime: '9:45'
    }
  }

  renderSample() {
    let { properties } = this.props, arr = [];
    for (let fD of properties.formFields) {
      arr.push(<div className="col col-11 pl2">{fD.fieldType.length != 0 && fieldMethod(fD.fieldType, fD)}</div>);
    }
    return arr;
  }

  render() {
    let { properties } = this.props;
    return (<div className="col col-12" style={{
      paddingLeft: '17%'
    }}>
      <div className="iphone-x">
        <i className="speaker">Speaker</i>
        <b>Camera</b>
        <div className="col col-12 center-align" style={styles.header}>
          <div className="col col-12">
            <div className="col col-3 pl2 pr2 pt1" style={styles.timeSpace}>{moment().format('h:mm')}</div>
            <div className="right-align col-7" style={styles.status}>
              <Icon name='signal' />
              <Icon name='wifi' />
              <Icon name='battery full' />
            </div>
          </div>
          <div className="col col-12 pt1">
            <div className="col col-2 pl1">
              <Icon name='align left' />
            </div>
            <div className="col col-10 text-left">{properties.formName}</div>
          </div>
        </div>
        <div className="col col-12" style={styles.content}>
          <div className="col col-12 over-flow-y py1 " style={styles.sample}>
            {!_.isEmpty(properties.formFields) && this.renderSample()}
          </div>
          <div className="col col-12 center-align">
            <Button style={{
              minHeight: '0px',
              padding: '11px 37px 11px 37px'
            }} primary="primary">Submit</Button>
          </div>
        </div>
      </div>
    </div>)
  }
}
