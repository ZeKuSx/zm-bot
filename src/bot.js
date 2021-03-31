require('dotenv').config();
const { Client } = require('discord.js')
const client = new Client();
const PREFIX = "zm.";
client.login(process.env.BOT_TOKEN);



client.on('ready', () =>{ 
    console.log('ZeKuS Modification bot is now online!')
    client.user.setActivity('ZeKuS Modification | ZM', {type: 'PLAYING'}).catch(console.error);

    const command = require('./command')

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === '823572228011589682'){
        await message.delete();
    }
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



command(client, 'embed', (message)=>{
    const embed = new Discord.MessageEmbed()
 

.setColor('#304281')
.setDescription()

.setFooter('ZeKuS Modification | ZM');
message.channel.send(embed)
})  



client.on('guildMemberAdd', member => {
    console.log(member.user.tag);
});