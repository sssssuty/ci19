const twitter_handle = "sut314";

var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

console.log("The bot is starting...");

function sendTweet(message) {
    var tweet = {status: message};
    T.post("statuses/update", tweet, tweeted);

    function tweeted(error, data, reponse){
        if(error){
            console.log(error);
        }
        // console.log(data);
        console.log("tweeted", message);
    }
}

//sending one tweet when th app boots up
// sendTweet("🐯");

//once every 24hours
// setInterval(function(){}, 1000 * 60 * 60 * 24)
function randInt(max){
    return Math.floor( Math.random() * max );
}

function gardenTweet(){
    var chars = ["🐙","🦀","🐡","🐳","🐟","🦑","🦐","🦈","🐊","🐠","🐋","🐯","🐯","🐯","🐯"," "," "," "," "," "," "," "," "," "," ",""];
    var garden = "";

    for (var i = 0; i < 25; i += 1){
        garden = garden + chars[randInt(chars.length)];
    }
    sendTweet(garden);
}

setInterval(gardenTweet, 1000 * 60 * 10);
gardenTweet();


