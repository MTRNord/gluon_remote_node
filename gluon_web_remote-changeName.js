var program = require('commander');
var backend = require("./backend/commands.js");
var chalk_lib = require('chalk');
var chalk = new chalk_lib.constructor({enabled: true});
var hostname_val = /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/
var ipv6_val = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
var key_val = /^ssh-[a-zA-Z]{3} AAAA[0-9A-Za-z+/]+[=]{0,3} ([^@]+@[^@]+)$/gm


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
 if (ipv6_val.test(ip) || hostname_val.test(ip)) {
   if (key_val.test(key)) {
     backend.changeName(ip, key, newname, "")
     console.log(chalk.green("Hostname changed successfully!"));
   }else {
     console.error(chalk.bold.red('Please set correct SSH Key'));
     process.exit(1);
   }
 }else {
   console.error(chalk.bold.red('Please set correct IPv6 or Hostname'));
   process.exit(1);
 }
}
if (args.length === 4) {
  var ip = args[1]
  var key = args[2]
  var token = args[3]
  var newname = args[4]
  if (ipv6_val.test(ip) || hostname_val.test(ip)) {
    if (key_val.test(key)) {
      backend.changeName(ip, key, newname, token)
      console.log(chalk.green("Hostname changed successfully!"));
    }else {
      console.error(chalk.bold.red('Please set correct SSH Key'));
      process.exit(1);
    }
  }else {
    console.error(chalk.bold.red('Please set correct IPv6 or Hostname'));
    process.exit(1);
  }
}

console.log();
