// file: static.js
// auth: Guy Whorley
// desc: handler for get requests for static files in the PUBLIC directory.
//   If a resources is not found, then display the './public/views/404.html' page.
var fs = require('fs');

module.exports = { // object literal style
  PUB_404:     './public/views/404.html',
  // Short list of support content-type for mime-types. See full list at
  // http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
  CTYPE: {
    "html": "text/html",
    "css":  "text/css",
    "png":  "images/png",
    "gif":  "images/gif",
    "jpg":  "images/jpeg",
    "mpeg": "audio/mpeg",
    "mp4": "audio/mp4"
  },
  get: function (request, response) {
    function fileExists(filePath) {
      try {
        return fs.statSync(filePath).isFile();
      } catch (err) {
        return false;
      }
    } //fileexists
    //query params would break this since I am not accounting for the ?
    // parse incoming url and grab the file extension.
    var res_arr = request.url.split(".");
    res_type = res_arr[1];

    if (fileExists("./"+ request.url)) {
      var content_string = this.CTYPE[res_type].toLowerCase();
      // console.log("Content-Type: ", this.CTYPE[res_type.toLowerCase()]);

      // text-based contentt
      if (res_type.toLowerCase() == 'html' || res_type.toLowerCase()=='css') {
        response.writeHead(200, {'Content-Type': content_string});
        fs.readFile("./"+request.url, 'utf8', function (errors, contents){
          response.write(contents);
          response.end();
        });
      } else { // everything but text/*
          fs.readFile("./"+request.url, function (errors, contents) {
            response.writeHead(200, {'Content-Type': content_string});
            response.write(contents);
            response.end();
          });
      }
    } else {
        fs.readFile( this.PUB_404, 'utf8', function (errors, contents) {
        response.write(contents);
        response.end();
        });
    } // if
  } //get
}; //module
