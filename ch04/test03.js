process.on('tick', (tick) => {
    console.log('The event tick is occurred: received param: %d', tick);
});

setTimeout(() => {
    console.log('Terminate this program after 2 seconds...');
    process.emit('tick', 2);
}, 2000);