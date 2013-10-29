require('colors');

var feedback = {
  _msg: function (msg) {
    return msg || '';
  },
  
  write: function (msg) {
    msg = msg || '';
    
    process.stdout.write(feedback._msg(msg));
    return this;
  },
  
  writeln: function (msg) {
    feedback.write('\n' + feedback._msg(msg));
    return this;
  },
  
  info: function (msg) {
    return console.log(feedback._msg(msg));
  },
  
  success: function (msg) {
    return console.log('Success:'.green + ' ' + feedback._msg(msg));
  },
  
  warn: function (msg) {
    msg = msg || '';
    return console.log('Warning:'.yellow + ' ' + feedback._msg(msg));
  },
  
  error: function (msg) {
    msg = msg || '';
    return console.log('Error:'.red + ' ' + feedback._msg(msg));
  }
};

module.exports = feedback;