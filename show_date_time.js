/*Load the HTTP library*/
var http = require('http');
var dt = require('./date_time_mod.js');

/* Create an HTTP server to handle responses*/

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'} );
	response.write('The date and time are currently: ' + dt.myDateTime());
	response.end();
}).listen(8080);
