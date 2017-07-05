var express = require('express');
var path = require('path')
var app = express();
var port = (process.env.PORT || 3000);
const Gitbook_setup = require('gitbook-setup');

console.log(port + "is the port number");

app.use('/', express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, function() {
    console.log('Your files will be served through this web server in port ' + port);
});


app.get('/', (request, response) => {
      response.render ('index');
});

app.get('/create_book', (request, response) => {
  var bookConfig = {
          "name": request.body.name,
          "type": "book",
          "templateName": "",
          "deploys": new Array(),
          "description":  request.body.description,
          "authors": new Array(process.env.USER),
          "private": "no",
        }
  Gitbook_setup.create(bookConfig, function (err) {
    if (err) console.log(err);
  });
})
