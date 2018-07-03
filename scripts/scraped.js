// Reqeuire request and cheerio for scraping
var request = require("request");
var cheerio = require("cheerio");

var scrape = function (scrp) {
  request("", function(err, res, body){

    var $ = cheerio.load(body);
    var articles = [];

    $(".post-item-frontpage").each(function(i, element){
      var head = $(this).children(".js_entry-link").text().trim();
      var sum = $(this).children(".entry-summary").text().trim();

      if(head && sum) {
        var header = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var summry = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        var addData = {
          headline: header,
          summary: summry
        };
        articles.push(addData);
      }
    });
    scrp(articles);
  });
};


module.exports = scrape;