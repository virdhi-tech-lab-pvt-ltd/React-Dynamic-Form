exports.getCurrentPath = function(routing) {
  return routing.location.pathname;
}

exports.padZero = function(value) {
	return Number(value) < 10 ? `0${value}` : `${value}`;
}
