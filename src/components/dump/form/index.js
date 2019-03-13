import React, {Component} from 'react';
import {MenuHeader, CreateHeader} from '../indexHeader';
import { WarningModal } from 'components/dump/common';
import {  Icon } from 'semantic-ui-react';
import FormCard from './components/FormCard';
import FormDialog from './FormDialog';
import ComponentIndex from './components';
import {seedFields} from './components/fieldTypes/seed';


export default class FormIndex extends Component {
  onAdd() {
    let {actions, form} = this.props;
    actions.openDialog(!form.dialog);
    actions.updateFormDetails(seedFields);
  }

  onSubmit() {
    let {actions, form} = this.props;
    actions.openDialog(!form.dialog);
  }

 handleEdit(data){
   let { actions } = this.props;
   actions.handleFormId(data.id);
   actions.formCreation(true);
   actions.showAppBusy(true);
   actions.updateFormDetails(data.formFields);
   actions.handleForm({formName:data.formName , description:data.description});
   actions.showAppBusy(false);
 }

 handleDelete(id){
  let { actions } = this.props;
  actions.handleFormId(id);
  actions.warning({id:id , header:'Conformation',open : true , errorMessage : 'Are you sure want to delete this form?'});
 }

 formCancel(){
   let { actions } = this.props;
   actions.formCreation(false);
   actions.handleForm('');
 }

 handleClose() {
   let {actions} = this.props;
   actions.resetWarning();
   actions.handleResetUserInput();
 }

renderCreate() {
    let {form: { id ,form , dialog},contact , actions} = this.props;
    return <div className="col col-12">
      <CreateHeader
          id={id}
          onCancel={() => this.formCancel()}
          onSave={() =>actions.saveForm()}
          name={form.formName}
          icon={<Icon
              name="edit"
              onClick={() => actions.openDialog(!dialog)}/>} />
      <ComponentIndex {...this.props}/>
    </div>
  }

  renderNew() {
    return <MenuHeader
            onAdd={() => this.onAdd()}
            name="Form" {...this.props}
          />
  }

  render() {
  	let {actions , form: {id , dialog, formCreation , formLists} , app:{warningModal}} = this.props;
  	return(
  		<div className="col col-12 px3">
	       { formCreation ? this.renderCreate() : this.renderNew() }
         {!formCreation &&
           <FormCard
             {...this.props}
             edit={(data) => this.handleEdit(data)}
             del={(id) => this.handleDelete(id)}/>
         }
       	 {dialog &&
           <FormDialog
       		 onSubmit={() => this.onSubmit()}
       		 {...this.props}/>
         }
         {warningModal.id == id &&
           <WarningModal
                     {...this.props}
                     cancel={() => this.handleClose()}
                     ok={()=>actions.formDeletion(id)}/>
          }
  		</div>);
  }
}
