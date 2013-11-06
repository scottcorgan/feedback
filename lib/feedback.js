var EventEmitter = require('events').EventEmitter;
var colors = require('colors');

function Feedback () {
  this.color = true;
  this.test = false;
}

Feedback.prototype = Object.create(EventEmitter.prototype);

Feedback.prototype._msg = function (msg) {
  return msg || '';
};

Feedback.prototype._log = function (msg) {
  var self = this;
  
  if (!this.test) console.log(this.colorFix(msg));
  
  process.nextTick(function () {
    self.emit('write', msg);
  });
};

Feedback.prototype.colorFix = function (msg) {
  if(this.color) { return msg; }
  return colors.stripColors(msg);
};

Feedback.prototype.write = function (msg) {
  msg = msg || '';
  
  process.stdout.write(
    this.colorFix(this._msg(msg))
  );
  
  return this;
};

Feedback.prototype.writeln = function (msg) {
  this.write(
    this.colorFix('\n' + this._msg(msg))
  );
  
  return this;
};

Feedback.prototype.info =  function (msg) {
  this._log(this._msg(msg));
  return this;
};

Feedback.prototype.success = function (msg) {
  this._log('Success:'.green + ' ' + this._msg(msg));
  return this;
};

Feedback.prototype.warn = function (msg) {
  this._log('Warning:'.yellow + ' ' + this._msg(msg));
  return this;
};

Feedback.prototype.error = function (msg) {
  this._log('Error:'.red + ' ' + this._msg(msg));
  return this;
};

var feedback = new Feedback();
feedback.Feedback = Feedback;

module.exports = feedback;