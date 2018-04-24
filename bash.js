// process.stdout.write( 'prompt > ');
// ///listener function .on takes in an event type (the string) and a handler function.
// //after it recieves the event it executes the function;
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');

// });

//process is a global variable that node has

process.stdout.write( 'prompt > ');
process.stdin.on('data', (data) => {
  //data isnot a string yet, we neet to turn it into a string;
  const cmd = data.toString().trim();
  const directory = process.cwd();
  if(cmd === 'pwd'){
    process.stdout.write(directory);
  }
  process.stdout.write('\nprompt > ');
})
