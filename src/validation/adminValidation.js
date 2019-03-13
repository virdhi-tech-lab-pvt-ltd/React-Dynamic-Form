import Joi from 'joi';
import Promise from 'bluebird';

let sourceSchema  = Joi.object().keys({
    name: Joi.string().required(),
})

export function sourceValidation(source) {

	return Joi.validate(source, sourceSchema, (err, value) =>{
		return err;

	});
}
