import React from 'react';
import { Label } from 'semantic-ui-react';

const ErrorText = ({errorText})=>{
  return(
    <Label
         basic color='red' pointing
         style={{margin:" 0 1.5rem"}}>
        {errorText}
    </Label>
  )
}
export default ErrorText;
