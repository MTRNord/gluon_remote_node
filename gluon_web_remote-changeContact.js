var program = require('commander');
var backend = require("./backend/commands.js");

program
  .parse(process.argv);

var args = program.args;

console.log();

if (args.length < 4) {
  console.error('Please set all required Arguments');
  process.exit(1);
}
if (args.length === 4) {
  var ip = args[1]
  var key = args[2]
  var name = args[3]
  var email = args[4]
  backend.changeContact(ip, key, name, email, "")
}
if (args.length === 5) {
  var ip = args[1]
  var key = args[2]
  var token = args[3]
  var name = args[4]
  var email = args[5]
  backend.changeContact(ip, key, name, email, token)
}
console.log();
