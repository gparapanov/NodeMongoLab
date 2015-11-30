/**
 * Created by 1307969 on 30/11/2015.
 */
var Twitter=require('twitter');
var http = require('http')
var port = process.env.PORT || 1337;

var client = new Twitter({
   consumer_key:'ybMjBcK5yhf6q8T5nCi2Hm7NB',
    consumer_secret:'FPuQKc4u3rx2sdS0R2JNm4Y502pEI0y27NPA9zTC6iI3F4bayh',
    access_token_key:'2923636078-aVffpsAn4vHpqDJOu34hcxLrhGs4d6SQ0iRB3Al',
    access_token_secret:'BP6zGcleRBGkeAaZDdJhPpSGRPhTPxvgWHze2Xn60C3Fz'
});
http.createServer(function(request,response){
    response.writeHead(200, { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});

    client.get('search/tweets',{q:'lolcat'},function(error,tweets){
        var json=[];
        for(var i=0;i<tweets.statuses.length;i++){
            json.push({name:tweets.statuses[i].user.name,text:tweets.statuses[i].text});
        }
        response.end(JSON.stringify(json));
    });
}).listen(port);
