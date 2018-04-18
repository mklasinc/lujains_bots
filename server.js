// set up requirements
var Pandorabot = require('pb-node');
var express = require('express');
var bp = require('body-parser');

// set up server port
var port = 3000;

// chatbot options
var chatbot_options = {
  url: 'https://aiaas.pandorabots.com',
  app_id: '1409617642514',
  user_key: 'ffa02bd4bc5158d06cd65c8fac484fce',
  botname: 'testbot1'
};

// create an express server object
var app = express();
// create new pandorabot instance
// var bot = new Pandorabot(chatbot_options);

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

/*---------------  BOTS -------------------*/
//
// bot.create(function(err, res) {
//   if (!err) console.log(res);
// });
//
// bot.delete(function(err, res) {
//   if (!err) console.log(res);
// });
//
// bot.list(function(err, res) {
//   if (!err) console.log(res);
// });

/*---------------  SERVER -------------------*/

// Server route
app.get('/chatbot', function(request, response, error){
  console.log("new request!");
  console.log(request.query);
  var obj = {str:"hello"}
	response.json(JSON.stringify(obj));
});

//Start the server
app.listen(port);
//Write a message to the terminal console
console.log("Express App running at port",port);
