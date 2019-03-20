const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};


const Fuse = require('fuse.js');

var cities = require("../data/world-cities.json")
var options = {
    keys: ['city']
};

var fuse = new Fuse(cities, options)

exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode,
        headers,
        body: JSON.stringify(fuse.search(event["queryStringParameters"]["q"]).slice(0, 5))
    });
}

