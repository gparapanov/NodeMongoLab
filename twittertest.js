/**
 * Created by 1307969 on 30/11/2015.
 */
var Twitter=require('twitter');
var client = new Twitter({
   consumer_key:'ybMjBcK5yhf6q8T5nCi2Hm7NB',
    consumer_secret:'FPuQKc4u3rx2sdS0R2JNm4Y502pEI0y27NPA9zTC6iI3F4bayh',
    access_token_key:'2923636078-aVffpsAn4vHpqDJOu34hcxLrhGs4d6SQ0iRB3Al',
    access_token_secret:'BP6zGcleRBGkeAaZDdJhPpSGRPhTPxvgWHze2Xn60C3Fz'
});
client.get('search/tweets',{q:'lolcat'},function(error,tweets){
   console.log(tweets);
});