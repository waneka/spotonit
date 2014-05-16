var getUrls = require('../public/javascripts/helpers').getUrls

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });

};

