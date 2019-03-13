import React, {Component} from 'react';
import {ImageIndex} from './ImageIndex';
import {Icon} from 'semantic-ui-react';
import {fieldsCategory} from './fieldTypes';

export default class SeedFieldList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  render() {
    let {ft, onAdd} = this.props, {hover} = this.state;
    return (<div draggable="true" onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})} onDragStart={(e) => this.props.onDragStart(e)} className="move col pb1 col-12">
      <div className="col col-12 seed-field-card p1">
        <span className="col col-3">{ImageIndex(ft.fieldType)}</span>
        <span className="col col-6 p1">{
            ft.category == fieldsCategory[1].name
              ? ft.fieldName
              : ft.fieldType
          }</span>
        {
          hover && <div className="right-align center-align add-circle pt1" onClick={() => onAdd()}>
              <Icon style={{
                  margin: '0px'
                }} className="plus"/>
            </div>
        }
      </div>
    </div>);
  }
}
