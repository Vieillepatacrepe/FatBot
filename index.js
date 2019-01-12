const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("-")

bot.on('message', message => {
  if (message.content === prefix + "help") {
    const embed = new RichEmbed()
      .setTitle('**__Liste des commandes__::bee:** \n ')
      .addField(`*informations`,`:small_orange_diamond:Donne des informations sur le bot.`)
      .addField(`*ping`,`:small_orange_diamond: Donne le temps de réaction du bot en ms.`)
      .addField(`*serveurs`,`:small_orange_diamond: Donne la liste de tous les serveurs et du nombre de membres ou se trouve Beeing#4440.`)
      .addField(`*avatar`,`:small_orange_diamond:Donne ton avatar Discord. `)
      .addField(`**__Liste des commandes de modérations__::bee:**`,)
      .addField(`*ban (Bientot disponible)`,`:tools:Permet de bannir des utilisateurs.`)
      .addField(`*kick (Bientot disponible)`,`:tools: Permet d´expulser des utilisateurs.`)
      .addField(`*mute (Bientot disponible)`,`:tools: Permet de rendre muet des utilisateurs.`)
      .addField(`**__Autres fonctionalitées:__**:bee:`)
      .addField(`Salut`,`:small_orange_diamond:Dites Salut et le Bot vous dira Bonjour.`)
      .addField(`Bienvenue/a quitté le serveur`,`:small_orange_diamond: Dès qu une personne rejoindra votre serveur le Bot lui souhaitera la Bienvenue et à son départ le Bot dira @...#0000 a quitté le serveur. \n :exclamation:Attention il faut posséder un salon nouveau-départ pour pouvoir avoir accès à cette fonctionnalité.:exclamation:`)
      .addField(`Auto rôle Membres `,`:small_orange_diamond:Ajoute automatiquement le rôle Membres a tout les nouveaux de votre serveur. \n :exclamation: Attention il faut posséder le rôle Membres.:exclamation:`)
      .setColor(0xffa500)
      .setFooter("Beeing")
    message.author.send(embed);
  }
    
   if (message.content === prefix + "help") {
     const embed = new RichEmbed()
      .setTitle('Les commandes vous ont été envoyés en MP :mailbox_with_mail:')
      .setColor(0xffa500)
      .setFooter("Beeing")
     message.channel.send(embed);
  }
  
  if (message.content === prefix + "sondage") {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const sondage = args.join(" ")
    const embed = new RichEmbed()
        .setTitle("**Sondage**")
        .addField(sondage, "**Répondre avec :white_check_mark: ou :x:**")
        .setColor("#01A1FE")
    message.channel.send(embed)
    }
  
  
if (message.content === prefix + "info-bot") {
  const embed = new RichEmbed()
                .setTitle(':information_source: **Informations:**')
                .addField(`:satellite: Serveurs:`, `${bot.guilds.size}`)
                .addField(`:grinning: Users`, `${bot.users.size}`)
                .addField(`:vs: Version:`, `0.0.1 alpha`)
                .addField(`:computer: Developpeur`, `loris83756#0001`)
                .addField(`:pencil: Codage utilisé:`, `Node JS 11.4.2`)
                .addField(`:regional_indicator_h: Hébergeur:`, `Heroku`, true)
                .addField(`:ok_hand: Server Support:`, `[Cliquer ici](https://discord.gg/fERCmfe)`) 
                .setColor(0xffa500);
            message.channel.send(embed);
  }
  
  if (message.content === prefix + "ping") {
    const embed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(0xffa500)
                .setFooter("Beeing")
     message.channel.send(embed);
  }
  
   var args = message.content.slice(prefix.length).trim().split(/ +/g)
   var commande = args.shift().toLowerCase();
   if (commande === "miroir") {
    var reponse = ["Oui","Non","Peut-etre","Je ne sais pas"]
    var resultat = Math.floor((Math.random() * reponse.length) + 0);
    const embed = new RichEmbed()
    .setTitle('**Miroir Magique**')
    .addField(args, reponse[resultat])
    .setColor(0xffa500)
    .setFooter("Beeing")
    message.channel.send(embed)
   }
  
    if (message.content === prefix + "miroir") {
        const embed = new RichEmbed()
        .setTitle("**Tu dois poser une question !**")
        .setColor(0xffa500)
        .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
        .setTimestamp()
        message.channel.send(embed)
    }
  
if (message.content === prefix + "ban") {
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
    message.channel.send("**:x:Vou n'avez pas la permission de faire ceci.**");

    if (message.mentions.users.size === 0) {
       return message.channel.send("**Vous devez mentioner un utilisateur**");
    }
  
  var ban = message.guild.member(message.mentions.users.first());
    if (!ban) {
        return message.channel.send("**Je ne touve pas cet utilisateur ou cet utilisateur est inbanisable.**");
    }

        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
           return message.send(":x:**Je n'ai pas la permission pour ban.**");
        }
  
        ban.ban().then(member => {
            message.channel.send(`**${member.user.usernam}) a été ban par ${message.author.username}.**`)
        }

        )
    }
       
  if (message.content === prefix + "info-serveur") {
    const embed = new RichEmbed()
    .setTitle("**:information_source: Information du Serveur**") 
    .addField(":satellite: Nom du serveur", message.guild.name)
    .addField("**:pencil: Crée le:**", message.guild.createdAt)
    .addField("**:grinning: Membres sur le discord:**", message.guild.memberCount)
    .addField("**:door: Tu as rejoin le:**", message.member.joinedAt)
    .setColor(0xffa500)
    .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
    .setTimestamp()
message.channel.send(embed)
}
  
});
bot.login(process.env.TOKEN);
