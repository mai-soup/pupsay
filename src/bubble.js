const wordWrap = require('word-wrap');

const speechDelimiters = {
  beginning: ['/', '\\'],
  middle: ['|', '|'],
  end: ['\\', '/'],
  oneLine: ['<', '>'],
};

function createBubble(message, delimiters) {
  const result = [];
  const lines = message.split('\n');

  const longestLine = Math.max(...lines.map(line => line.length));

  // top border
  result.push(` ${'-'.repeat(longestLine + 2)}`);

  // middle
  if (lines.length === 1) {
    result.push(
      `${delimiters.oneLine[0]} ${lines[0]} ${delimiters.oneLine[1]}`
    );
  } else {
    lines.forEach((line, index) => {
      const paddedLine = line.padEnd(longestLine, ' ');
      if (index === 0) {
        // first line of text, use beginning delimiters
        result.push(
          `${delimiters.beginning[0]} ${paddedLine} ${delimiters.beginning[1]}`
        );
      } else if (index === lines.length - 1) {
        // last line of text, pad and use end delimiters
        result.push(`${delimiters.end[0]} ${paddedLine} ${delimiters.end[1]}`);
      } else {
        // all other lines, use middle delimiters
        result.push(
          `${delimiters.middle[0]} ${paddedLine} ${delimiters.middle[1]}`
        );
      }
    });
  }

  // bottom border
  result.push(` ${'-'.repeat(longestLine + 2)}`);

  return result.join('\n');
}

module.exports.say = (message, lineWidth = 80) => {
  // subtract 4 to account for border
  const wrapped = wordWrap(message, { width: lineWidth - 4, indent: '' });
  return createBubble(wrapped, speechDelimiters);
};
