var jsonServer = require('json-server');

var server = jsonServer.create(); // Returns an Express server
var router = jsonServer.router('ballot-api.json'); // Returns an Express router

router.render = function (req, res) {
    res.jsonp({

    meta : {status:"ok", message:"successfull",code:200},

        body: res.locals.data
    })

   

}



server.use('/', function(req, res, next) {
    setTimeout(next, 5000)
})


server.use(jsonServer.defaults()); // logger, static and cors middlewares

server.use(router); // Mount router on '/'


// consol.log("here")
server.listen(8000);

