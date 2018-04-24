// process.stdout.write( 'prompt > ');
// ///listener function .on takes in an event type (the string) and a handler function.
// //after it recieves the event it executes the function;
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');

// });

//process is a global variable that node has

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write( 'prompt > ');
process.stdin.on('data', (data) => {
  //data isnot a string yet, we neet to turn it into a string;
  const cmd = data.toString().trim().split(' ');

  if(cmd[0] === 'pwd'){
    pwd();
  } else if (cmd[0] === 'ls') {
    ls();
  } else if (cmd[0] === 'cat') {
    cat(cmd[1]);
  }

});
