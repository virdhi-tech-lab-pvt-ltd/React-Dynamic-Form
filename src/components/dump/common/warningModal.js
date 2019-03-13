import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

export default  class WarningModal extends Component{
  render(){
    let { app:{warningModal} ,cancel, ok} = this.props;
    return (
       <Modal className="warning_modal" size='small'  open={warningModal.open} onClose={cancel}>
         <Modal.Header style={{fontSize:'35px' , color:'#717177'}}>
            {warningModal.header}
         </Modal.Header>
         <Modal.Content style={{fontSize:'20px' , color:'red'}}>
            <p>{warningModal.errorMessage}</p>
         </Modal.Content>
         <Modal.Actions>
           <Button negative
            onClick={cancel}>
             Cancel
           </Button>
           <Button onClick={ok} positive icon='checkmark' labelPosition='right' content='Confirm' />
         </Modal.Actions>
       </Modal>
   )
  }
}
