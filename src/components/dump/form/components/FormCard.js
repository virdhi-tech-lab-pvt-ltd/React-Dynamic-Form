import React , { Component } from 'react';
import {Popup, Checkbox, Button, Input, Dropdown, Icon } from 'semantic-ui-react';
import {SortableHandle} from 'react-sortable-hoc';
import I18n from 'app/common/i18n';
import { formFieldCondition, formImportantLevel } from 'app/common/appConstants';
import { Edit ,  Delete ,TextField , DropDown , Radio , DatePicker , Number   , FileUpload} from 'app/assets/Form_Icons';
import formMockey from './formMockey.json';
import moment from 'moment';
import _ from 'lodash';
import './css/FormCard.css';

const styles = {
  card: {
    background: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 1px 2px',
    color: '#757575'
  },
  range: {
  	border: '1px solid rgba(34, 36, 38, .15)',
    paddingTop: '5px',
  	borderRadius: '2%'
  }
};

const Icons = {
  "TextField": <TextField/>,
  "RadioButton": <Radio/>,
  "DatePicker": <DatePicker/>,
  "NumberField": <Number/>,
  "DropDown": <DropDown/>,
  "ImageUpload": <FileUpload/>
};

const imColor = {
  true: (color) => ({background: color, color: '#fff' }),
  false: () => ({background: '#fff', color: 'gray'})
}

export default class FormCard extends Component{
  constructor(props) {
   super(props);
   this.state = {
     hover : -1
  };
 }
 hover(i){
   this.setState({hover: i});
 }
 handleEdit(data ){
   let { actions , edit} = this.props;
   edit(data);
 }
 handelDelete(id){
  let { actions , del } = this.props;
  del(id);
}
renderFieldIcons(data){
  let newData = _.uniqBy(data , 'fieldType')
  return (<div>
        {newData.map((field) => <span className="fieldsIcons" style={{padding:'.5rem'}}>{Icons[field.fieldType]}</span>)}
      </div>)
}
emptyData_Placeholder(){
  return(<div className="H3 my1 center">
              {I18n.t('en.common.No_data_found')}
        </div>
      );
}
  render(){
    let { actions , form:{formLists} , edit} = this.props , {hover} = this.state;
    return(<div className="col col-12 py1" >
            {!_.isEmpty(formLists) ?
              formLists.map((data , i) =>
              <div className="div_wrapper">
                <div className="div_1" style={{backgroundColor:"#fff" , width: '30%' ,  float: 'left' ,margin: '1rem'}}>
                  <div className="col col-12 px2 card_Header">
                    <div className="col col-11 py2 truncate">{data.formName}</div>
                  </div>
                  <div className="card_date px2">Created at { moment(data.createdAt ).format("DD MMM `YY")}</div>
                    <div className="col col-12 m2" style={{width:'90%' , fontSize: '16px',color: 'grey'}}>
                          <div className="col col-6 card_one">
                            <div>{data.formFields.length}</div>
                            <div>Total No.of Fields</div>
                          </div>
                          <div className="col col-6 card_two">
                            <div>
                              {this.renderFieldIcons(data.formFields)}
                            </div>
                          </div>
                      </div>
                        <div className="div_2">
                          <div className="href">
                            <Popup
                             inverted
                             position="bottom left"
                             trigger={<span
                                className="form_edit"
                                onClick={() => this.handleEdit(data)}><Edit /></span>}
                             content='Edit'
                            />
                            <Popup
                             inverted
                             position="bottom left"
                             trigger={<span
                               className="form_delete"
                               onClick={() => this.handelDelete(data.id)}><Delete /></span>}
                             content='Delete'
                            />
                          </div>
                      </div>
                </div>
              </div> )
               :
               <div>
                 {this.emptyData_Placeholder()}
               </div>}
        </div>
    );
  }
}
