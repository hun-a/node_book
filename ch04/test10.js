const output = 'Hi 1!';
const buffer1 = new Buffer(10);
const len = buffer1.write(output, 'utf8');
console.log(`The string of first buffer: ${buffer1.toString()}`);

var buffer2 = new Buffer('Hi 2!', 'utf8');
console.log(`The string of second buffer: ${buffer2.toString()}`);

console.log(`checking type of buffer: ${Buffer.isBuffer(buffer1)}`);

const byteLen = Buffer.byteLength(output);
const str1 = buffer1.toString('utf8', 0, byteLen);
const str2 = buffer2.toString('utf8');

console.log({byteLen, str1, str2});

buffer1.copy(buffer2, 0, 0, len);
console.log(`copied buffer1 to buffer2: ${buffer2.toString('utf8')}`);

const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(`concat the buffer1 and buffer2: ${buffer3.toString('utf8')}`);