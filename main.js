var apiHelper = require('./apiaiHelper.js');
var mentors = require('./mentors.js');
var bodyParser = require('body-parser')
var express = require('express');
var app = express();

var http = require('http').Server(app);
var myApiKey = "MyAuthenticationTokenIsHereAndIWillFoundABetterLater";

/** understand JSON in body. */
app.use(bodyParser.json());

// Endpoint for api.ai
app.post('/apiwebhook', function(req, res){
  //check authentication
  if(req.headers.token != myApiKey){
    console.log("token inccorect : " + req.headers.token);
    res.statusCode = 401;
    res.send('error');
  } else {
    console.log("apiwebhook "+ JSON.stringify(req.body));
    var request = req.body;
    if(request.result){
      switch (request.result.action) {
        case 'mentor_search':
            console.log("action.mentors_type");
            mentors.getMentors(request.result.mentors_type, function (mentorsList){
              res.send(apiHelper.createMentorsMessage(request.result.mentors_type, mentors));
            })
            break;
        case 'action.time':
            console.log("action.time");
            getTime(function(result){
              console.log("action.time - result: "+ JSON.stringify(result));
              res.send(result);
            });
            break;
        default:
          console.log("action default");
          searchApi.search(request.result.resolvedQuery, function(result){
            console.log("default search - result: "+ JSON.stringify(result));
            res.send(result);
          });
          break;
      }
    } else {
      var txt = 'Nous n\'avons pas compris votre question. Que vouliez vous dire?';
      var err = apiHelper.createError(500, txt);
      res.send(err);
    }
  }
});


app.get('/time', function(req, res){
  //check authentication
  res.send(JSON.stringify(new Date()));
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});


var getTime = function(cb){
  var date = new Date();
  var data = {};
  var speech =  'Il est ' + (date.getUTCHours() + 1) + ':' + date.getUTCMinutes() + ' et ' + date.getUTCSeconds() + " secondes.";
  var response = apiHelper.createResponse(speech, speech, data, 'Crédit Mutuel Arkéa');
  cb(response);
}
