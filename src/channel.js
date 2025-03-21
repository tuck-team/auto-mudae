// Save configuration

const config = require('../config.json');
const { saveConfig } = require('./config');

let channels = config.channelId;

function ischannel(message) {
	if (channels.includes(message.channel.id)) {
		return false;
	}
	return true;
}

function channeladd(message) {
	if (message.author.id === `627430995074875392` || message.author.id === `1286410310906937356`) {
		message.channel.send(`Channel added to the list`);
		config.channelId.push(message.channel.id);
	}
    saveConfig();
	return false;
}

function channelremove(message) {
	if (message.author.id === `627430995074875392` || message.author.id === `1286410310906937356`) {
		message.channel.send(`Channel removed from the list`);
		config.channelId.pop(message.channel.id);
	}
    saveConfig();
	return false;
}


module.exports = { channeladd, channelremove, ischannel };
