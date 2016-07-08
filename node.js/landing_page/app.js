var http = require('http'); // get the http module:
var fs = require('fs'); // fs module allows us to read and write content for responses!!
var app_port = 6789;
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
        writeText('./views/welcome/index.html','html'); // welcome#index

    }  else if(request.url === '/ninjas') { // ninjas#index
        writeText('./views/ninjas/index.html','html');

    }  else if(request.url === '/dojos/new') { //dojos#new
        writeText('./views/dojos/new.html','html');

    } else if(request.url === '/stylesheets/style.css') {
        writeText('./stylesheets/style.css', 'css');

    } else if(request.url === '/images/ninja_404.jpg') {
         writeImage('./images/ninja_404.jpg', 'jpeg');

    } else if(request.url === '/images/ninja_sign.jpg') {
        writeImage('./images/ninja_sign.jpg', 'jpeg');

    } else { // request didn't match anything:
         writeText('./views/public/404.html', 'html');
      // }
    }
});
// DEFINE LISTENING PORT
server.listen(app_port);
console.log(" >> Node-Server: listening on localhost:" +  app_port);
