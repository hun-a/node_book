const util = require('util');
const EventEmitter = require('events').EventEmitter;

const Calc = function() {
    // const self = this;
    // self.on('stop', () => {
    this.on('stop', () => {
        console.log('Call the stop event on Calc');
    });
};

util.inherits(Calc, EventEmitter);
Calc.prototype.add = (a, b) => {
    return a + b;
};

module.exports = Calc;
module.exports.title = 'calculator';