/*Variable area*/
var Discord = require('discord.io');
var bot = new Discord.Client({
	token: "MzA2NDg3Njk5NjUxNjkwNDk2.C-H5Cg.iXLt6ck05gr7ic7mFbjiSMN7psg",
	autorun: true
});

/*Event area*/

bot.on("ready", function(event) {
	console.log("Connected!");
	console.log("Logged in as: ");
	console.log(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function(user, userID, channelID, message, event) {
	console.log(user + " - " + userID);
	console.log("in " + channelID);
	console.log(message);
	console.log("----------");

	if (message === "%help") {
		sendMessages(channelID, ["**FUN:** %ping,  %gigicaboss, %lol, %wtf, %thuglife, %boom, %hug @mention @mention"]);
		sendMessages(channelID, ["**INFO:** %developer"]);
		sendMessages(channelID, ["**BOT INVITE:** %invite"]);//Sending a message with our helper function
	} else if (message === "picaefeafeafeafeafture") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%ping") {
		sendMessages(channelID, ["Pong"]); //Sending a message with our helper function
	} else if (message === "pictureaefeafeafeafeaf") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message.startsWith("%hug")) {
    if (event.d.mentions.length > 1) {
        sendMessages(channelID, ["https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif"]);
    }
} //Sending a message with our helper function
	 else if (message === "pictuaeefreaefaefeafeeafeafeafeaf") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%gigicaboss") {
		sendMessages(channelID, ["Stiam! xD"]); //Sending a message with our helper function
	} else if (message === "pictueafeafaefeafre") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%lol") {
		sendMessages(channelID, ["https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif"]); //Sending a message with our helper function
	} else if (message === "picaefeafaefeafeature") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%wtf") {
		sendMessages(channelID, ["https://media.giphy.com/media/tJeGZumxDB01q/giphy.gif"]); //Sending a message with our helper function
	} else if (message === "pictaefaefeafaefeaure") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%boom") {
		sendMessages(channelID, ["https://media.giphy.com/media/LrN9NbJNp9SWQ/giphy.gif"]); //Sending a message with our helper function
	} else if (message === "picaefaefeafaefeature") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%invite") {
		sendMessages(channelID, ["https://discordapp.com/api/oauth2/authorize?client_id=306487699651690496&scope=bot&permissions=0"]); //Sending a message with our helper function
	} else if (message === "picaefaefeafaefeature") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%developer") {
		sendMessages(channelID, ["**My developer:** <@!277147576946524161>"]); //Sending a message with our helper function
	} else if (message === "pictaefaefaefeaure") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}

	if (message === "%thuglife") {
		sendMessages(channelID, ["https://media.giphy.com/media/3oz8xOshguLMt34hEs/giphy.gif"]); //Sending a message with our helper function
	} else if (message === "picaefaefaefeature") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}
});

bot.on("presence", function(user, userID, status, game, event) {
	/*console.log(user + " is now: " + status);*/
});

bot.on("any", function(event) {
	/*console.log(rawEvent)*/ //Logs every event
});

bot.on("disconnect", function() {
	console.log("Bot disconnected");
	/*bot.connect()*/ //Auto reconnect
});

/*Function declaration area*/
function sendMessages(ID, messageArr, interval) {
	var resArr = [], len = messageArr.length;
	var callback = typeof(arguments[2]) === 'function' ?  arguments[2] :  arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;

	function _sendMessages() {
		setTimeout(function() {
			if (messageArr[0]) {
				bot.sendMessage({
					to: ID,
					message: messageArr.shift()
				}, function(err, res) {
					resArr.push(err || res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendMessages();
			}
		}, interval);
	}
	_sendMessages();
}

function sendFiles(channelID, fileArr, interval) {
	var resArr = [], len = fileArr.length;
	var callback = typeof(arguments[2]) === 'function' ? arguments[2] : arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;

	function _sendFiles() {
		setTimeout(function() {
			if (fileArr[0]) {
				bot.uploadFile({
					to: channelID,
					file: fileArr.shift()
				}, function(err, res) {
					resArr.push(err || res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendFiles();
			}
		}, interval);
	}
	_sendFiles();
}
