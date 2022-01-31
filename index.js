const express = require('express')
const app = express()

app.get('/', (req, res) => {
        res.sendStatus(200)
})

app.listen(5000, () => {
        console.log('Rovotic is online')
})

const { Client, Collection } = require("discord.js");
// Import Discord.Js.
const client = new Client({ intents: 32767 });
// Make New Discord Client.
module.exports = client;
// Export Client To Give Other Files Access.
const chalk = require("chalk");
const colors = require("colors")
// Import Chalk



// ———————————————[Global Variables]———————————————
client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.config = require("./botconfig/main.json");
require("./handler")(client);
// Initializing the project.



// ———————————————[Logging Into Client]———————————————
const token = process.env["clienttoken"] || client.config.clienttoken;
if(token === ""){
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Invalid Token")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(chalk.magenta("There Are 3 Ways To Fix This"));
   console.log(
      chalk.blue("Put Your ") + chalk.red("Bot Token ") + chalk.blue("in:")
   );
   console.log(
      chalk.yellow.bold("1.) ") +
         chalk.cyan("index.js") +
         chalk.gray(
            " On the client.login line remove client.login(token) and write client.login('Your token')"
         )
   );
   console.log(
      chalk.yellow.bold("2.) ") +
         chalk.cyan("ENV/Secrets") +
         chalk.gray(
            " If using replit, make new secret named 'clienttoken' and put your token in it else, if your using VsCode, Then Follow Some ENV tutorials (I don't suggest using it in VSC)"
         )
   );
   console.log(
      chalk.yellow.bold("3.) ") +
         chalk.cyan("main.json ") +
         chalk.gray(
            'Go To botconfig/main.json, Find The Line with client.token and put "client.token":"Your Bot Token"'
         )
   );
}
else {
   client.login(token);
}
  
// ———————————————[Error Handling]———————————————
process.on('unhandledRejection', (reason, p) => {
   console.log('\n\n\n\n\n=== unhandled Rejection ==='.toUpperCase().yellow.dim);
   console.log('Reason: ', reason.stack ? String(reason.stack).gray : String(reason).gray);
   console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase().yellow.dim);
   client.channels.cache.get("937612620599545916").send(`\`\`\`New Unhandled Rejection:\n\nReason: ${reason}\`\`\``);
 });
 process.on("uncaughtException", (err, origin) => {
   console.log('\n\n\n\n\n\n=== uncaught Exception ==='.toUpperCase().yellow.dim);
   console.log('Exception: ', err.stack ? err.stack : err)
   console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase().yellow.dim);
   client.channels.cache.get("937612620599545916").send(`\`\`\`New Uncaught Exception:\n\nReason: ${err}\`\`\``);
 })
 process.on('uncaughtExceptionMonitor', (err, origin) => {
   console.log('=== uncaught Exception Monitor ==='.toUpperCase().yellow.dim);
   client.channels.cache.get("937612620599545916").send(`\`\`\`New Uncaught Exception Monitor:\n\nReason: ${err}\`\`\``);
 });
 process.on('beforeExit', (code) => {
   console.log('\n\n\n\n\n=== before Exit ==='.toUpperCase().yellow.dim);
   console.log('Code: ', code);
   console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase().yellow.dim);
   client.channels.cache.get("937612620599545916").send(`\`\`\`New Before Exit:\n\nReason: ${code}\`\`\``);
 });
 process.on('exit', (code) => {
   console.log('\n\n\n\n\n=== exit ==='.toUpperCase().yellow.dim);
   console.log('Code: ', code);
   console.log('=== exit ===\n\n\n\n\n'.toUpperCase().yellow.dim);
   client.channels.cache.get("937612620599545916").send(`\`\`\`New Exit:\n\nReason: ${code}\`\`\``);
 });
 process.on('multipleResolves', (type, promise, reason) => {
   console.log('\n\n\n\n\n=== multiple Resolves ==='.toUpperCase().yellow.dim);
   console.log(type, promise, reason);
   console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase().yellow.dim);
   client.channels.cache.get("937612620599545916").send(`\`\`\`New Multiple Resolves:\n\nType: ${type}\nPromise: ${promise}\nReason: ${reason}\`\`\``);
 });
