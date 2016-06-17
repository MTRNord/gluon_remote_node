var program = require('commander');
var backend = require("./backend/commands.js");
var chalk_lib = require('chalk');
var chalk = new chalk_lib.constructor({enabled: true});

program
  .parse(process.argv);

var args = program.args;

console.log();

if (args.length < 3) {
  console.error(chalk.bold.red('Please set all required Arguments'));
  process.exit(1);
}
if (args.length === 3) {
 var ip = args[1]
 var key = args[2]
 var newname = args[3]
 backend.changeName(ip, key, newname, "")
 console.log(chalk.green("Hostname changed successfully!"));
}
if (args.length === 4) {
  var ip = args[1]
  var key = args[2]
  var token = args[3]
  var newname = args[4]
  backend.changeName(ip, key, newname, token)
  console.log(chalk.green("Hostname changed successfully!"));
}

console.log();
