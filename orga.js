//mongo collection
var COLLECTION = "ORGAS";
//db instance
var db;

var getOrgas = function (callback){
  //return all mentors
  sdb.collection(COLLECTION, function(coll){
    coll.find().toArray(function(err, orgas){
        callback(orgas);
    });
    return;
  });
}

module.exports = function(database){
  var module = {};
  db = database;
  module.getOrgas = getOrgas;
  return module;
};
