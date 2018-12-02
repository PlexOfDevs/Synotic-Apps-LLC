const Discord = require("discord.js")
const bot = new Discord.Client()

console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("Syntoic Community", {type: "WATCHING"})
});

bot.login(process.env.TOKEN)
