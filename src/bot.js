require('dotenv').config();
const fs = require('fs').promises;
const path = require("path");
const  Discord  = require('discord.js')
const { error } = require('console');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const PREFIX = "zm.";


(async () => {
    const cmdDir = path.join(__dirname, "commands");
    const commandFiles = await fs.readdir(cmdDir);

    for(const file of commandFiles){
        const command = require(path.join(cmdDir, file));
        client.commands.set(command.name, command);
    }



    client.login(process.env.BOT_TOKEN);
})()




client.on('ready', () =>{ 
    console.log('ZeKuS Modification bot is now online!');
    client.user.setActivity('ZeKuS Modification | ZM', {type: 'PLAYING'}).catch(console.error)});







    

    client.on('message', async message =>{
        if (message.author.bot) return;
        if (!message.content.startsWith(PREFIX)) return;
        
        const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
        const cmd = args.shift();
        const cmdDir = path.join(__dirname, "commands");
        const commandFiles = await fs.readdir(cmdDir);

        for(const file of commandFiles){
            const command = require(path.join(cmdDir, file));
            client.commands.set(command.name, command);
        }
        if (!client.commands.has(cmd)) return;

        try{
            client.commands.get(cmd).execute(client, message, args, cmd);
        } catch (error){
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    })







  

 //verify 
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === '823572228011589682')

            await message.delete();

    if(message.content.toLowerCase() === 'zm.verify' && message.channel.id === '823572228011589682')
    {
        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get('823556473640583178');
        if(role) {
            try{
            await message.member.roles.add(role);

            console.log("Role added!");
            }
            catch(err){
                console.log(err);
            }
        }
    }
});





//ban

 





client.on('guildMemberAdd', member => {
    console.log(member.user.tag);
});