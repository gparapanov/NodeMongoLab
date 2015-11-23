//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
var url='mongodb://georgi:georgi@ds054298.mongolab.com:54298/nodelab';
var MongoClient=mongodb.MongoClient;
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            //Error so close connection
            db.close();
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to' + url +"\n");
            var collection=db.collection('users');
            var results=collection.find({name:'modulus user'});
            results.each(function (err, result) {
                if (err) {
                    response.write(err);
                } else {
                    response.write('Fetched: ' + result.name + " : " + result.age + " : " + result.roles.toString() +'\n');
                }
                //if the result is null, there are no more results, it�s ok to close everything
                if (result == null) {
                    response.end('Completed');
                    db.close();
                }
            });

            // do some work here with the database.

            //Done Close connection

        }

    });

}).listen(port);
