const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) =>{ //req object has info about the request like request type and url. 
                                              //res object is object we use to send the response to the user.

    console.log(req.url, req.method);

    //set header content type
     res.setHeader('Content-Type', 'text/html'); 
    // res.write('<p>hello,ninjas</p>');
    // res.write('<p>hello again,ninjas</p>');
    // res.end();

    let path= "./views/";
    switch (req.url) {
        case '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html';
            res.statusCode =200;
            break;
        case '/about-me' : 
            res.statusCode =301;
            res.setHeader('Location', './about');
            res.end();
            break;
        default : 
            path += '404.html';
            res.statusCode =404;
            break;
    }

    fs.readFile(path, (err, data) =>{
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data); //data is content of the html file
            res.end(data);
        }
    })
});
    //send an HTML file
//     fs.readFile('./views/index.html', (err, data) =>{
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             //res.write(data); //data is content of the html file
//             res.end(data);
//         }
//     })

// });

server.listen(3000, 'localhost', () => { //port number and local host and a function which fires when we start listening
    console.log('we are listening');
});