import React , { Component } from 'react';
import { Grid , Image , Icon} from 'semantic-ui-react';
import Dummy from 'app/assets/dummy.png';
import _ from 'lodash';


export default class LabelCard extends Component{
  render(){
    let {name , onClick , img , mail} = this.props;
    return(
      <Grid columns='equal' style={{border:'2px solid #f4f4f4' , borderRadius : '5px' , margin:'2px'}}>
       <Grid.Column width={3} style={{ padding: '4px'}}>
         <Image
           style={{height: '4rem' ,  width: '4rem'}}
           avatar
           src={ !_.isEmpty(img) ? img : Dummy}   />
       </Grid.Column>
       <Grid.Column width={11} style={{padding:'10px'}} >
         <p style={{margin:'inherit'}}>{name}</p>
         <p style={{fontSize:'1rem' , color:'#a4a2a2'}}>{mail}</p>
       </Grid.Column>
       <Grid.Column style={{paddingTop: '1.5rem'}}>
          <Icon name='delete'
            onClick={onClick}/>
       </Grid.Column>
      </Grid>
    )
  }
}
