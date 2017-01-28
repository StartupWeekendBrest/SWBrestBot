/**
 * This class create readable message for api.ai
 */
var defaultSource = 'Stéphane Castrec';

var createMentorsMessage = function(type, mentorsList){
  var msg = 'Les mentors ' + type + 'sont ';
  for(mentor :mentorsList){
    if(mentor.twitter){
      msg += mentors.twitter;
    } else {
      msg += mentors.name;
    }
    msg += ', ';
  }

  //TODO rm last ','
  return createResponse(msg, message, mentorsList);
}

var createError = function(statusCode, message){
  var response = {
    speech : message,
    displayText: message,
    data: {
      statusCode: statusCode,
      message : message
    },
    source:defaultSource
  };
  return response;
};

var createResponse = function(speech, message, data, source){
  data.slack = {
    text : message
  };
  var response = {
    speech : speech,
    displayText: message,
    data: data,
    source:source
  };
  if(!source){
    response.source = defaultSource;
  }

  return response;
};

module.exports = {
  createError : createError,
  createResponse : createResponse,
  createMentorsMessage: createMentorsMessage
};
