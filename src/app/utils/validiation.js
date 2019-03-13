handleProfileImage(name , value){
  let {actions} = this.props;
  actions.uploadUserProfile(name , value)
}

handleAddresChange(name , value){
  let { actions } = this.props;
  let url ={
    countryId:()=> actions.updateState(value),
    stateId: ()=>actions.updateDistrict(value),
  }
  this.handleChange(name , value);
  return url[name] ? url[name]() : true;
}

textFieldValidation(value){
  if(value.trim()) this.setState({firstName:true});
  else this.setState({firstName:false});
}
genderValidation(value){
  if(value.trim()) this.setState({gender:true});
  else this.setState({gender:false});
}
typeValidation(value){
  if(value) this.setState({type:true});
  else this.setState({type:false});
}
mobileNumberValidation(value){
  if(value.trim().length === 10) this.setState({mobileNumber:true});
  else this.setState({mobileNumber:false});
}
 validateEmail(email){
   var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   if (reg.test(email)){
   this.setState({mail:true});
  }
   else{
   this.setState({mail:false});
   }
}
