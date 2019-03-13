import {padZero} from './index';

export function staffsListReConstruct(list) {
  return list.map((data) => ({
    id: data.id,
    roleId: data.roleId,
    name: data.firstName + ' ' + data.lastName
  })).filter(l => l.roleId !== 3);
} //try do above like this

export function locationsListReConstruct(list) {
  return list.map((data) => {
    let newData = {};
    newData.key = data.name.substring(0, 2).toLowerCase();
    newData.value = data.id;
    newData.text = data.name;
    return newData;
  });
}
export function dropdownList(list) {
  let newDropdownList = list && list.map((data, index) => {
    let newData = {};
    // newData.key = data.name.substring(0, 2).toLowerCase();
    newData.key = index;
    newData.value = data.id;
    newData.text = data.name;
    return newData;
  })
  return newDropdownList;
}

export function contactsListReConstruct(list) {

  let newContactsList = list && list.map((data) => {
    let newData = {};
    newData.id = data.id;
    newData.name = data.firstName;
    return newData;
  })
  return newContactsList;
}

export function convertMinsToHrsMins(mins) {
  return `${padZero(Math.floor(mins / 60))}:${padZero(mins % 60)}`;
}

export function convertHrsMinsToMins(data) {
  let i = data.indexOf(":");
  return parseInt(data.substr(0, i) , 10) * 60 + parseInt(data.substr(i + 1) , 10);
}

export function generateParams(object) {
  return Object.entries(object).map(obj=>obj.join("=")).join("&");
}

export function validateEmail(email) {
  // let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return regx.test(String(email).toLowerCase());
}

// _.pickBy(a,(e)=> _.isNumber(e) || !_.isEmpty(e)) use like this
