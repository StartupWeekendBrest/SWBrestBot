/**
 * This class create readable message for api.ai
 */
var defaultSource = 'Stéphane Castrec';

var createOrgasMessage = function(orgaList){
  var msg = 'Les orgas sont ';
  var orga;
  for(var i=0; i<orgaList.length; i++){
    orga = orgaList[i];
    if(orga.twitter){
      msg += orga.twitter;
    } else {
      msg += orga.name;
    }
    if(i != orgaList.length-1){
      msg += ', ';
    }
  }
  return createResponse(msg, msg, orgaList);
}

var createSponsorsMessage = function(sponsorsList){
  var msg = 'Les sponsors sont ';
  var sponsor;
  for(var i=0; i<sponsorsList.length; i++){
    sponsor = sponsorsList[i];
    msg += sponsor.name;
    if(i != sponsorsList.length-1){
      msg += ', ';
    }
  }
  return createResponse(msg, msg, sponsorsList);
}

var createMentorsMessage = function(type, mentorsList){
  var msg = 'Les mentors ' + type + ' sont ';
  if(type){
    //we receive a tab
    var mentor;
    for(var i=0; i<mentorsList.length; i++){
      mentor = mentorsList[i];
      if(mentor.twitter){
        msg += mentor.twitter;
      } else {
        msg += mentor.name;
      }
      if(i != mentorsList.length-1){
        msg += ', ';
      }
    }
  } else {
    msg = "La liste des mentors est disponible ici. http://www.up.co/communities/france/brest/startup-weekend/10230 (Ou demande moi une compétence particulière)";
  }

  return createResponse(msg, msg, mentorsList);
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
  createMentorsMessage: createMentorsMessage,
  createSponsorsMessage : createSponsorsMessage,
  createOrgasMessage : createOrgasMessage,
};
