var program = require('commander');
var backend = require("./backend/commands.js");
var chalk_lib = require('chalk');
var chalk = new chalk_lib.constructor({enabled: true});

program
  .parse(process.argv);

var args = program.args;

console.log();

if (args.length < 5) {
  console.error(chalk.bold.red('Please set all required Arguments'));
  process.exit(1);
}
if (args.length === 5) {
  var ip = args[1]
  var key = args[2]
  var lat = args[3]
  var long = args[4]
  var alt = args[5]
  backend.changeGeo(ip, key, lat, long, alt, "")
  console.log(chalk.green("Geolocation changed successfully!"));
}
if (args.length === 6) {
  var ip = args[1]
  var key = args[2]
  var token = args[3]
  var lat = args[4]
  var long = args[5]
  var alt = args[6]
  backend.changeGeo(ip, key, lat, long, alt, token)
  console.log(chalk.green("Geolocation changed successfully!"));
}

console.log();
