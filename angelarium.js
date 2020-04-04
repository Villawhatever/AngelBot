require('dotenv').config()
angelJSON = require('./angelarium.json')

const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

const fs = require('fs');

let raw = fs.readFileSync('angelarium.json');
const angels = JSON.parse(raw);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!invoke') {
    angel = angels[Math.floor(Math.random() * angels.length)];
    var attachment = new MessageAttachment(angel.image);
    try{
      msg.channel.send(`${msg.member} invoked ${angel.name} from the Angelarium - They are ${angel.description}`, attachment);  
      console.log(`Success on ${angel.name}`);
    } catch (err) {
      console.log(err);
    } 
  }
});

client.login(process.env.BOT_TOKEN);