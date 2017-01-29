//mongo collection
var COLLECTION = "SPONSORS";
//db instance
var db;

var getSponsors = function (callback){
  //return all mentors
  db.collection(COLLECTION, function(coll){
    coll.find().toArray(function(err, sponsors){
        callback(sponsors);
    });
    return;
  });
  return;
}

module.exports = function(database){
  var module = {};
  db = database;
  module.getSponsors = getSponsors;
  return module;
};
