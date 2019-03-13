import React from 'react';
import {ImageIndex} from './ImageIndex';
import {fieldTypes, fieldsCategory} from './fieldTypes';
import {Icon, Button} from 'semantic-ui-react';
import './css/create-form-fields.css';
import SeedFieldList from './SeedFieldList';

// const RenderList = (form) => <div></div>fieldTypes.map(ft => <div draggable="true" onDragStart={() => {}} className="move col col-7 pb1 px2">
//   <span className="col col-2">{ImageIndex(ft.fieldType)}</span>
//   <span className="col col-6">{ft.fieldType}</span>
// </div>)</div>

export default class SeedFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: ['basic'],
      hover: -1
    }
  }

  handleMenuSelection(name) {
    let {menu} = this.state;
    let cloneMenu = [...menu];
    let index = cloneMenu.indexOf(name);
    if (index == -1) {
      cloneMenu = [
        ...cloneMenu,
        ...[name]
      ];
    } else {
      cloneMenu.splice(index, 1);
    }
    this.setState({menu: cloneMenu});
  }

  renderFields(fields) {
    return <div className="col col-12 px2">
      {fields.map((ft, i) => <SeedFieldList onDragStart={(e) => this.props.onDragStart(e, ft)} ft={ft} onAdd={() => this.props.onAdd(ft)}/>)}
    </div>
  }

  filterFieldCategory() {
    let fieldArray = [], {menu} = this.state;
    for (let index in fieldsCategory) {
      let condition = menu.includes(fieldsCategory[index].name);
      let iconName = condition
        ? 'chevron down'
        : 'chevron up';

      let filteredFields = fieldTypes.filter(fT => fT.category == fieldsCategory[index].name);
      let elements = <div className="col col-12 pb1">
        <div className="col col-12 p2 click seed-field-card" onClick={() => this.handleMenuSelection(fieldsCategory[index].name)}>
          <div className="col">{fieldsCategory[index].header}</div>
          <div className="right-align">
            <Icon className={iconName} name='move'/>
          </div>
        </div>
        {condition && <div className="col col-12 py1">{this.renderFields(filteredFields)}</div>}
      </div>
      fieldArray.push(elements);
    }
    return (fieldArray);
  }
  render() {
    return <div className="col col-12 py2 pr2">
      <div className="col col-12 px2 over-flow-y form-height">
        {this.filterFieldCategory()}
      </div>
    </div>
  }
}

// <div className="right-align px1" onClick={() => this.props.onAdd(ft)}>
//   <Button circular color='facebook' icon='plus' />
//   <Icon className="plus"/>
// </div>
//
