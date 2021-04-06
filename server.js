const express = require('express');
const app = express();
const io = require('socket.io')(3000);

//Everytime someone connect to the server the message is being sent with the event 'chat-message' with 'Hello Grain'
io.on('connection', socket => {
    console.log('new User')
    socket.emit('chat-message', 'Hello Grain')
    socket.on('send-chat-message', message => {
        console.log(message)
    })
})