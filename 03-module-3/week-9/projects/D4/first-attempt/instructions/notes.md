
Quick overview of the Fetch API
-------------------------------

As you go through the AJAX example, you'll use an API that you've used in the past: the Fetch API.

At a high level, Fetch is used to make HTTP requests. It uses Promises to handle the asynchronous nature of HTTP requests and responses.




Fetch from URL
fetch.fetchUrl(url [, options], callback)

Where

url is the url to fetch
options is an optional options object
callback is the callback to run - callback(error, meta, body)
Example

var fetchUrl = require("fetch").fetchUrl;

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("http://kreata.ee/iso-8859-15.php", function(error, meta, body){
    console.log(body.toString());
});Fetch from URL
fetch.fetchUrl(url [, options], callback)

Where

url is the url to fetch
options is an optional options object
callback is the callback to run - callback(error, meta, body)
Example

var fetchUrl = require("fetch").fetchUrl;

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("http://kreata.ee/iso-8859-15.php", function(error, meta, body){
    console.log(body.toString());
});
