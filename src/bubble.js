const wordWrap = require('word-wrap');

const speechDelimiters = {
  beginning: ['/', '\\'],
  middle: ['|', '|'],
  end: ['\\', '/'],
  oneLine: ['<', '>'],
};

module.exports.say = (message, lineWidth = 80) => {
  return wordWrap(message, { width: lineWidth });
};
