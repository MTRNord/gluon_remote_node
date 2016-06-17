var program = require('commander');
var backend = require("./backend/commands.js");

program
  .parse(process.argv);

console.log();

var args = program.args;

if (args.length < 3) {
  console.error('Please set all required Arguments');
  process.exit(1);
}
if (args.length === 3) {
  var ip = args[1]
  var key = args[2]
  var switchPosition = args[3]
  if (switchPosition === "on") {
    backend.activateMOL(ip, key)
    console.log("Mesh on Lan activated successfully!");
  }else if (switchPosition === "off") {
    backend.deactivateMOL(ip, key)
    console.log("Mesh on Lan deactivated successfully!");
  }
}

console.log();
