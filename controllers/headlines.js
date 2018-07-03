// Bring in scrape and date scripts
var scrape = require("../scripts/scraped");
var makeDate = require("../scripts/date");

// Bring in mongoose models
var Headline = require("../models/HeadlinesModel");

module.exports = {
  fetch: function(cb) {
    scrape(function(data){
      var articles = data;
      for (var i=0; i < articles.length; i++){
        articles[i].date = makeDate();
        articles[i].saved = false;
      }
      Headline.collection.insertMany(articles, {ordered: false}, function(err, doccs){
        cb(err,docs);
      });
    });
  },
  delete: function(query, cb){
    Headline.remove(query,cb);
  },
  get: function(query, cb){
    Headline.findOneAndUpdate(query)
    .sort({
      _id: -1
    })
    .exec(function(err, doc){
      cb(doc);
    });
  }
}