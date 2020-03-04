'use strict';

var http = require('http');
let fs = require('fs'); // fs === 'fileSystem'
let path1 = 'script.js'
let path2 = 'style.css'
let part = 3000;
 
/*
// 1-2-3
let server = http.createServer(function(req, res) {
// we can use writeHead()
//    res.writeHead(200,{'Content-type' : 'text/html;charest=utf8'});
// or we can use setHeader()
    res.setHeader('Content-type', 'text/html;charest=utf8')
    res.write('Hello World!'); //send a response back to the client
    res.end(); //end the response
});
*/

//4
let server = http.createServer(function(req, res) {
    if ( req.url === '/script.js' ) {
        res.setHeader('Content-type', 'application/javascript')
        res.write(fs.readFileSync(path1));
//5
       } else if( req.url === '/style.css' ){
        res.setHeader('Content-type', 'text/css')
        res.write(fs.readFileSync(path2));
       } else {
        res.setHeader('Content-type', 'text/html;charest=utf8')
        res.write(`
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="style.css" />
                <title>My First Web Server</title>
            </head>
            <body>
                <h1>Hello, anyone there?</h1>
                <div id="content"></div>
                <script src="script.js"></script>
            </body>
        </html>
        `)};
 
    res.end(); //end the response
});

server.listen(part, ()=> console.log(`Connect OK ${part}`) ); //the server listens on port 3000
