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
  var switchPosition = args[3]
  if (switchPosition === "on") {
    if (ipv6_val.test(ip) || hostname_val.test(ip)) {
      if (key_val.test(key)) {
        backend.activateMOW(ip, key)
        console.log(chalk.green("Mesh on Wan activated successfully!"));
      }else {
        console.error(chalk.bold.red('Please set correct SSH Key'));
        process.exit(1);
      }
    }else {
      console.error(chalk.bold.red('Please set correct IPv6 or Hostname'));
      process.exit(1);
    }
  }else if (switchPosition === "off") {
    if (ipv6_val.test(ip) || hostname_val.test(ip)) {
      if (key_val.test(key)) {
        backend.deactivateMOW(ip, key)
        console.log(chalk.green("Mesh on Wan deactivated successfully!"));
      }else {
        console.error(chalk.bold.red('Please set correct SSH Key'));
        process.exit(1);
      }
    }else {
      console.error(chalk.bold.red('Please set correct IPv6 or Hostname'));
      process.exit(1);
    }
  }
}

console.log();
