const http = require('http');
const server = http.createServer((request, response) => {

    try {
        if (request.url === '/') {
            console.log("going correctly")
            response.end(`<p>hello</p><br><a href  = "/about"> about</a>`)
        }
        if (request.url === '/about') {
            console.log("going correctly")
            response.end(`<p>here is our short history</p><br><a href  = "/">back</a>`)
        }
        else {
            throw new Error('try again');
        }
        console.log('try again')
    }

    catch (err) {
        console.log(err)
        response.end(`<h1>oops!</h1><p>we cant seem to find the page you are looking for</p><a href  = "/about"> about</a>`);
    }




    // process.on('uncaughtException', function (err) {

    //  Handle the error safely

    // })
    // response.write('welcome to our home page')
    // response.end();

})

server.listen(5000)