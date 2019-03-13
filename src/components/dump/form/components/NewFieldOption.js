import React, {Component} from 'react';
import {Input, Icon} from 'semantic-ui-react';

const styles = {
  none: {
    pointerEvents: 'none',
    cursor: 'not-allowed'
  },
  display: {
    color: 'rgb(125, 183, 251)'
  }
}

export default class NewFieldOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleAdd() {
    let {handleOptionAdd} = this.props, {name} = this.state;
    handleOptionAdd(name);
    this.setState({name: ''})
  }

  render() {
    let {name} = this.state;
    let iconDisplay = name.length == 0 ? styles.none : styles.display;
    return (<div className="col col-12"><Input value={name} onChange={(e, v) => this.setState({name: v.value})} icon={<Icon
      onClick = {
        () => this.handleAdd()
      }
      style={iconDisplay} name = 'checkmark' circular link />} className="col col-12" autoFocus="autoFocus" placeholder='Option...'/>
    </div>);
  }
}
