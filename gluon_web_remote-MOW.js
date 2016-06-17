var program = require('commander');
var backend = require("./backend/commands.js");

program
  .parse(process.argv);

var args = program.args;

console.log();

if (args.length < 3) {
  console.error('Please set all required Arguments');
  process.exit(1);
}
if (args.length === 3) {
  var ip = args[1]
  var key = args[2]
  var switchPosition = args[3]
  if (switchPosition === "on") {
    backend.activateMOW(ip, key)
    console.log("Mesh on Wan activated successfully!");
  }else if (switchPosition === "off") {
    backend.deactivateMOW(ip, key)
    console.log("Mesh on Wan deactivated successfully!");
  }
}

console.log();
