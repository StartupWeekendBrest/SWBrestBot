//mongo collection
var COLLECTION = "JURY";
//db instance
var db;

var getJury = function (year, callback){
  if(!year){
    year = 2017;//FIXME
  }
  //search specific mentors
  //return all mentors
  db.collection(COLLECTION, function(coll){
    coll.find({'year':year}).toArray(function(err, jurys){
        callback(jurys);
      });
    return;
  });
  return;
}

module.exports = function(database){
  var module = {};
  db = database;
  module.getJury = getJury;
  return module;
};
