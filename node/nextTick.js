process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));

console.log('world');