//mongo collection
var COLLECTION = "WINNERS";
//db instance
var db;

var getWinners = function (year, callback){
  if(type){
    //search specific mentors
    //return all mentors
    db.collection(COLLECTION, function(coll){
      coll.find({'type':type}).toArray(function(err, mentors){
          callback(mentors);
      });
      return;
    });
  } else {
    //return all mentors
    db.collection(COLLECTION, function(coll){
      coll.find().toArray(function(err, mentors){
          callback(mentors);
      });
    });
  }
  return;
}

module.exports = function(database){
  var module = {};
  db = database;
  module.getWinners = getWinners;
  return module;
};
