var Twit = require('Twit');
console.log('bot is running');

var config = require('./config');

var T = new Twit(config);
tweetIt();
setInterval(tweetIt,2000*100);

function tweetIt() {
    var r = Math.floor(Math.random()*100);

    var tweet = {
        status: 'random number ' + r + ' #tweetbotworks'
    }

    T.post('statuses/update',tweet,tweeted);
    
    function tweeted(err,data,response) {
        if(err){
            console.log(err);
        }else{
            console.log('it worked !!');
        }
    }
    
}