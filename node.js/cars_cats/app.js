var http = require('http'); // get the http module:
var fs = require('fs'); // fs module allows us to read and write content for responses!!
var app_port = 7077;
var now;

// creating a server using http module:
var server = http.createServer(function(request, response){
    var writeText = function (view, type) {
      fs.readFile(view, 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/' + type});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    };
    var writeImage = function (view, type) {
      fs.readFile(view, function (errors, contents){
          response.writeHead(200, {'Content-Type': 'image/' + type});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    };
    // CONSOLE LOGGING
    now = new Date();
    now.toLocaleString();
    console.log(' >>> ' + now + ' -  client request URL: ', request.url);

    // ROUTING TABLE (OF SORTS)
    if (request.url === '/' || request.url === '/index' || request.url === '/index.html') {
        writeText('./views/index.html','html');

    }  else if(request.url === '/cars') {
        writeText('./views/cars.html','html');

    }  else if(request.url === '/new_cat') {
        writeText('./views/new_cat.html','html');

     }  else if(request.url === '/cats') {
        writeText('./views/cats.html','html');

     } else if(request.url === '/stylesheets/style.css') {
        writeText('./stylesheets/style.css', 'css');

     }  else if(request.url === '/images/calvin001.jpg') {
          writeImage('./images/calvin001.jpg', 'jpeg');

     } else if(request.url === '/images/crash.jpg') {
         writeImage('./images/crash.jpg', 'jpeg');

     } else if(request.url === '/images/calvin002.jpg') {
         writeImage('./images/calvin002.jpg', 'jpeg');

     } else if(request.url === '/images/calvin003.jpg') {
         writeImage('./images/calvin003.jpg', 'jpeg');

     } else if(request.url === '/images/box1.png') {
         writeImage('./images/box1.png', 'png');

     } else if(request.url === '/images/box2.png') {
         writeImage('./images/box2.png', 'png');

     } else if(request.url === '/images/box3.jpg') {
         writeImage('./images/box3.jpg', 'jpeg');

     } else { // request didn't match anything:
         writeText('./views/error_404.html', 'html');
      // }
    }
});
// DEFINE LISTENING PORT
server.listen(app_port);
console.log(" >> Node-Server: listening on localhost:" +  app_port);
