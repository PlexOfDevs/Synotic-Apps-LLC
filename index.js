const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("message", (message) => {
if(message.content === "-help") {
console.log("Log")
message.channel.send(`${message.author.username}` + ", I Have Sent You The Commands 📪")
message.author.send("Commands:\n -ip (TwinFactions )\n -youtube (ModdingTwinz")
}
});

bot.login(process.env.TOKEN)
