var program = require('commander');
var backend = require("./backend/commands.js");
var chalk_lib = require('chalk');
var ipv6 = require('ip-address').Address6;
var chalk = new chalk_lib.constructor({enabled: true});
var hostname_val = /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/
var ipv6_val = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
var lat_long_val = /^(\-?\d+(\.\d+)?).\s*(\-?\d+(\.\d+)?)$/


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
  var ipv6_val = new ipv6(ip);
  if (ipv6_val.isValid() || hostname_val.test(ip)) {
    if (lat_long_val.test(lat)) {
      if (lat_long_val.test(long)) {
        backend.changeGeo(ip, key, lat, long, alt, "")
        console.log(chalk.green("Geolocation changed successfully!"));
      }else {
        console.error(chalk.bold.red('Please set correct Latitude (See http://stackoverflow.com/a/18690202/4929236)'));
        process.exit(1);
      }
    }else {
      console.error(chalk.bold.red('Please set correct Email'));
      process.exit(1);
    }
  }else {
    console.error(chalk.bold.red('Please set correct IPv6 or Hostname'));
    process.exit(1);
  }
}
if (args.length === 7) {
  var ip = args[0]
  var key = args[1]
  var token = args[2]
  var ccode = args[3]
  var lat = args[4]
  var long = args[5]
  var alt = args[6]
  var ipv6_val = new ipv6(ip);
  if (ipv6_val.isValid() || hostname_val.test(ip)) {
    if (lat_long_val.test(lat)) {
      if (lat_long_val.test(long)) {
        backend.changeGeo(ip, key, lat, long, alt, token, ccode)
        console.log(chalk.green("Geolocation changed successfully!"));
      }else {
        console.error(chalk.bold.red('Please set correct Longitude (See http://stackoverflow.com/a/18690202/4929236)'));
        process.exit(1);
      }
    }else {
      console.error(chalk.bold.red('Please set correct Latitude (See http://stackoverflow.com/a/18690202/4929236)'));
      process.exit(1);
    }
  }else {
    console.error(chalk.bold.red('Please set correct IPv6 or Hostname'));
    process.exit(1);
  }
}

console.log();
