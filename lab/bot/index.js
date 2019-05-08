var twitter_handle = "";

var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

console.log("The bot is starting...");