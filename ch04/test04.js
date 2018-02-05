const Calc = require('../NodeExample1/calc3');

const calc = new Calc();
calc.emit('stop');

console.log(`Delivered the stop event to ${Calc.title}`);