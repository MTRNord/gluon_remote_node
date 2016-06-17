var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var helmet = require('helmet')
var program = require('commander');
var backend = require("./backend/commands.js");

program
  .command('changeName <ip> <ssh> [token] <newname>', 'Change the Hostname of the router (no Formular support yet!)')
  .command('changeContact <ip> <ssh> [token] <name> <email>', 'Change the Contact of the router (no Formular support yet!)')
  .command('MOL <ip> <ssh> <on/off>', 'Activate or deactivate Mesh on Lan')
  .command('MOW <ip> <ssh> <on/off>', 'Activate or deactivate Mesh on Wan')
  .command('changeGeo <ip> <ssh> [token] <lat> <long> <altitude>', 'Change the Router Position (no Formular support yet!)')
  .parse(process.argv);


// app.use(helmet())
//
// // index page
// app.get('/', function(req, res) {
//     res.render('pages/index');
// });
//
// app.use('/static', express.static('static'));
//
// app.listen(process.env.PORT || 3000, function () {
//   console.log('Example app listening on port 3000!');
// });
