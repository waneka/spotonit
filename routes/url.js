var getUrls = require('../public/javascripts/helpers').getUrls

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Event Finder' });
};

exports.otherEvents = function(req, res) {
  getUrls(req.params.url, function(response) {
    resJSON = {
      "urls": response,
      "originalUrl": req.params.url
    }
    res.send(resJSON)
  })

}

