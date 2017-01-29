var MongoClient = require('mongodb').MongoClient;
var db;
var connected = false;

/**
 * Mongo
 */
var host = process.env.MONGODB_ADDON_HOST;
var uri = 'mongodb://uwyjui61ykt4osv:NvQUJXWXgfLSX3y3BQjt@bnurdczmqxuhmk8-mongodb.services.clever-cloud.com:27017/bnurdczmqxuhmk8';//process.env.MONGODB_ADDON_URI;
var pwd = process.env.MONGODB_ADDON_PASSWORD;
var user = process.env.MONGODB_ADDON_USER;
var port = process.env.MONGODB_ADDON_PORT;

module.exports = {
  connect: function(callback){
    MongoClient.connect(uri, function(err, _db){
      if (err) { throw new Error('Could not connect: '+err); }
      connected = true;
      db = _db;
      callback(_db);
      return _db;
    });
  },
  collection: function(name, callback){
    if (!connected) {
      this.connect(function(){
        callback(db.collection(name));
        return db.collection(name);
      });
    } else {
      callback(db.collection(name));
      return db.collection(name);      
    }
  }
};
