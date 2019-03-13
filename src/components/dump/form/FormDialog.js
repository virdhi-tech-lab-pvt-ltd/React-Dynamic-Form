import React , { Component} from 'react';
import Dialog from 'material-ui/Dialog';
import { Button, Input, TextArea, Icon } from 'semantic-ui-react';
import { ErrorText } from 'components/dump/common';
import _ from 'lodash';
import './style/Form.css'




export default class FormDialog extends Component{
	handleChange(name , value){
		let {actions , form:{ form }} = this.props;
		let newForm = Object.assign({} , form);
		newForm[name]=value;
		actions.handleForm(newForm);
	}
	handleCreate(){
		let { actions , form} = this.props;
		if(!_.isEmpty(form.form.formName)){
			actions.openDialog(false);
			actions.formCreation(true);
		}
	}
	handleCancel(){
		let { actions , form : { id } } = this.props;
		!id && actions.handleForm('');
		actions.changeInputCount(null);
		actions.openDialog(false);
	}
	render(){
		let {form: {dialog, form, inputCount,}, onSubmit, actions} = this.props;
		return(
			<Dialog
				modal={false}
				open={dialog}
				bodyStyle={{padding: '10px'}}
				onRequestClose={() => onSubmit()}>
				<div className="col col-12 px2">
					<div className="col col-12 py2 h1">Create Form</div>
					<div className="col col-12 py1">Form Name</div>
					<div className="col col-12 py1 px1" style={{border: '1px solid #61b3f9'}}>
						<Input
						    className="left-align col-12 field-name"
			          style={{border: '0px'}}
						    label={{ icon: <Icon name='asterisk' /> }}
						    labelPosition='right corner'
						    value={form.formName}
						    onChange={(e, v) => this.handleChange('formName' , v.value)}
						    placeholder='Enter the form name'
						  />
					</div>
					<div className="col col-12 py1">Description</div>
					<div className="col col-12 py1 px1" style={{border: '1px solid #61b3f9'}}>
						<TextArea
							value={form.description}
			            style={{border: '0px'}}
						   onChange={(e, v) => this.handleChange('description' , v.value)}
							className="left-align col-12"
							placeholder='Enter Your Description' />
					</div>
					<div className="col col-12 pt2">
							<Button
			            className="right"
							style={{background: '#EF5350', color: '#fff', padding: '10px 34px'}}
							content='Next'
							onClick={() => this.handleCreate()}/>
							<Button
			            className="right"
							onClick={() => this.handleCancel()}
							style={{background: '#7DB7FB', color: '#fff', padding: '10px 34px'}} content='Cancel'/>
					</div>
				</div>
			</Dialog>
		)
	}
}
