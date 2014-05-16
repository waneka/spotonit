  var url = require('url'),
  request = require('request')

var urlKey = {
  "calendar.boston.com": {
    "hrefMatcher": /href=\'(\/\S*\/events\/show\/\d{9}\S*)\'/g
  },
  "www.sfmoma.org": {
    "hrefMatcher": /(\/exhib_events\/events\/\d*)/g
  },
  "www.workshopsf.org": {
    "hrefMatcher": /(\/\?page_id=\d{3}\&id=\d{4})\"/g
  },
  "events.stanford.edu": {
    "hrefMatcher": /href=\"(\/events\/\d{3}\/\d{5})\"/g,
    "index": "http://events.stanford.edu"
  },
  "events.sfgate.com": {
    "hrefMatcher": /href=\'(\/\S*\/events\/show\/\d{9}\S*)\'/g
  },
  "events.7x7.com": {
    "hrefMatcher": /href=\"http:\/\/events.7x7.com(\/\S*\/events\/\S*\/\S*)\"/g,
    "index": "http://events.7x7.com"
  }
}

function findUrlsFromPage(rootUrl, callback) {
  var hostname = url.parse(rootUrl).hostname
  var domain = 'http://' + hostname
  if (urlKey[hostname].index !== undefined) {
    rootUrl = urlKey[hostname].index
  }

  request(rootUrl, function(err, res, body) {
    var matches = []
    var hrefMatcher = urlKey[hostname].hrefMatcher
      // console.log(rootUrl)
    while (match = hrefMatcher.exec(body)) {
      matches.push(domain + match[1])
    }
    callback(matches)
  })
}

function getUrls(rootUrl, callback) {
  findUrlsFromPage(rootUrl, function(matches) {
    matches = arrayUnique(matches)
    callback(matches.slice(0,10))
  })
}

function arrayUnique(a) {
  return a.reduce(function(prev, cur) {
    if (prev.indexOf(cur) < 0) prev.push(cur)
    return prev
  }, [])
}

exports.getUrls = getUrls
