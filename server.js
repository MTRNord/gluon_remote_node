var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var helmet = require('helmet')

app.use(helmet())

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.use('/static', express.static('static'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
