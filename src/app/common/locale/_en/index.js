const header = require('./header');
const all = require('./en');
const common = require('./common');
const register = require('./registerForm');
const validate = require('./validation');
const groups = require('./groups');
const userForm = require('./userForm');
const userGroup = require('./userGroup');
const survey = require('./survey');

let en = {
  ...{ header },
  ...{ all },
  ...{ common },
  ...{ register },
  ...{validate},
  ...{userForm},
  ...{userGroup},
  ...{survey}

};

module.exports = { en }
