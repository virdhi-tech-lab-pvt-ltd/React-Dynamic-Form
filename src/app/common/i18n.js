import I18n from 'i18n-js';
import _ from 'lodash';

let templateOptions = { interpolate: /%{(.+?)}/, replacement: '%{o.$1}', variable: 'o' };

const memoizedMessage = _.memoize((message) => {
  message = message.replace(templateOptions.interpolate, templateOptions.replacement);
  return _.template(message, templateOptions);
});

I18n.translations.en = require('./locale/_en');

I18n.interpolate = function(message, options) {
  options = this.prepareOptions(options);
  return memoizedMessage(message)(options);
};

export default I18n;
