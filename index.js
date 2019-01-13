const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on("message", message => {
  if (message.content === "a"){
    message.reply("b")
    
bot.login(process.env.Token);
