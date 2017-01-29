//mongo collection
var COLLECTION = "WINNERS";
//db instance
var db;

var getWinners = function (year, callback){
  if(!year){
    year = 2017; //fixme
  }
    //search specific mentors
    //return all mentors
    db.collection(COLLECTION, function(coll){
      coll.find({'year':year}).toArray(function(err, mentors){
          callback(mentors);
      });
      return;
    });
  
  return;
}

module.exports = function(database){
  var module = {};
  db = database;
  module.getWinners = getWinners;
  return module;
};
