import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { Alert } from 'app/assets/Form_Icons';

export default  class WarningModal extends Component{
  handleClose() {
    let {actions} = this.props;
    actions.showAppError({
        header:'',
        open : false,
        errorMessage : ''
      });
  }
  render(){
    let { app:{modal}} = this.props;
    return (
       <Modal className="warning_modal" size='small' open={modal.open}>
         <Modal.Header style={{border:'none'}}>
           <div className="col col-12" style={{background: '#fff', color: '#fff'}}>
             <div className="col col-5 p2" style={{fontSize: '2rem', color: 'black'}}>
               Oops !
             </div>
             <div className="right col-5 pt1 pr1" style={{width: '50px'}}>
               <Alert style={{fill: '#f95759'}}/>
             </div>
           </div>
         </Modal.Header>
         <Modal.Content style={{    padding: 'inherit' , margin: '1rem'}}>
           <div className="col col-12" style={{fontSize: '1.2rem', color: '#f95759'}}>
             {modal.errorMessage}
           </div>
         </Modal.Content>
         <Modal.Actions style={{border:'none'}}>
            <Button inverted
              color='green'
              onClick={()=>this.handleClose()}>Close</Button>
         </Modal.Actions>
       </Modal>
   )
  }
}
