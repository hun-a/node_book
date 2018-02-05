process.on('exit', () => {
    console.log('exit is occurred!');
});

setTimeout(() => {
    console.log('Terminate this program after 2 seconds...');
    process.exit();
}, 2000);