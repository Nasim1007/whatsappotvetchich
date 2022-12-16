const qrcode = require('qrcode-terminal');
const axios = require('axios')

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {

    // if (true) {
    //     client.sendMessage(message.from, 'Чурка')
    // }

	if(message.body === 'a') {
        client.sendMessage(message.from, 'Hello')
		// message.reply('b'); 
	}

    if (message.body.toLowerCase().includes('салом')) {
        message.reply('воалейкум салом')
    }
});

 

client.initialize();
