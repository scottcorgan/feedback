var colors = require('colors');

var feedback = {
  _msg: function (msg) {
    return msg || '';
  },
  
  color: true,
  
  colorFix: function(msg) {
    if(feedback.color) { return msg; }
    return colors.stripColors(msg);
  },
  
  write: function (msg) {
    msg = msg || '';
    
    process.stdout.write(
      feedback.colorFix(feedback._msg(msg))
    );
    return this;
  },
  
  writeln: function (msg) {
    feedback.write(
      feedback.colorFix('\n' + feedback._msg(msg))
    );
    return this;
  },
  
  info: function (msg) {
    return console.log(
      feedback.colorFix(feedback._msg(msg))
    );
  },
  
  success: function (msg) {
    return console.log(
      feedback.colorFix('Success:'.green + ' ' + feedback._msg(msg))
    );
  },
  
  warn: function (msg) {
    msg = msg || '';
    return console.log(
      feedback.colorFix('Warning:'.yellow + ' ' + feedback._msg(msg))
    );
  },
  
  error: function (msg) {
    msg = msg || '';
    return console.log(
      feedback.colorFix('Error:'.red + ' ' + feedback._msg(msg))
    );
  }
};

module.exports = feedback;
