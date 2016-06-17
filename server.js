var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var helmet = require('helmet')
var program = require('commander');

program
  .option('<ip> <ssh-key> [token]', 'SSH key and IP to login (currently no filepaths supported)*')
  .option('changeName <newname>', 'Change the Hostname of the router (no Formular support yet!)')
  .option('changeContact <name> <email>', 'Change the Contact of the router (no Formular support yet!)')
  .option('MOL <on/off>', 'Activate or deactivate Mesh on Lan')
  .option('MOW <on/off>', 'Activate or deactivate Mesh on Wan')
  .option('changeGeo <lat> <long> <altitude>', 'Change the Router Position (no Formular support yet!)')
  .parse(process.argv);

app.use(helmet())

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.use('/static', express.static('static'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
