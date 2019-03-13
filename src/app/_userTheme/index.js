// const _default = require('./_default');
import { _default} from "./_default";
const _blue = require('./_blue');

let theme = {
  ...{ _default },
  ...{ _blue }
};

module.exports = { theme }
