import ajv from 'ajv';
import loginSchema from './login.json';
import changePasswordSchema from './changePassword.json';
import createAcademySchema from './createAcademy.json';
import createCompanySchema from './createCompany.json';
import atsOnboardSchema from './atsOnboard.json';

const Schema = ajv({ allErrors: true, errorDataPath: 'property' });

Schema.addSchema(loginSchema);
Schema.addSchema(changePasswordSchema);
Schema.addSchema(createAcademySchema);
Schema.addSchema(createCompanySchema);
Schema.addSchema(atsOnboardSchema);

// for (let key in loginSchema) {
// 	console.log(key);
// 	console.log(loginSchema[key]);
// 	console.log(Schema);
//   Schema.addSchema(loginSchema[key]);
// }

export default Schema;
