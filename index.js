const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on ("ready", function() }
    bot.user.setGame("Command: "helpmeimdying");
    console.log("connectedç");
});

bot.on("message", message => {
    if (message.content === prefix + "helpmeimdying"){
       message.channel.sendMessage("vas prendre un defibrilateur");
    }
    if (message.content === "salut mon gros");
        message.reply("bonsoir");
        console.log("commande bonjour ok");
    }
});
    
bot.login(process.env.Token);
