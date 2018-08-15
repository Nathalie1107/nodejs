console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 1000);


setTimeout(() => {
    console.log('Second timeout');
}, 0);

setTimeout(() => {
    console.log('3 timeout');
}, 0);

setTimeout(() => {
    console.log('4 timeout');
}, 0);

setTimeout(() => {
    console.log('5 timeout');
}, 0);

setTimeout(() => {
    console.log('6 timeout');
}, 0);

console.log('Finishing up');