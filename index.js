const Discord = require("discord.js")
const bot = new Discord.Client()

console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("Syntoic Community", {type: "STREAMING"})
});

bot.on("message", (message) => {
if(message.content === "~hub") {
message.channel.send("hub.stryde.tk : 19132")
}
});

bot.login(process.env.TOKEN)
