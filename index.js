const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on ("ready",function() {
    bot.user.setGame("Commande: helpmeimdying");
    console.log("Connected");
});

bot.on('message',message => {
    if (message.content === prefix + "helpmeindying") {
        message.channel.sendMessage("vas prendre un défibrilateur");
    }

    if (message.content === "salut mon gros");
    message.reply("bonsoir");
    console.log("commande bonjour ok");
}

  });
bot.login(process.env.Token);
