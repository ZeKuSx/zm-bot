require('dotenv').config();
const { Client } = require('discord.js')
const client = new Client();
const PREFIX = "zm.";
client.login(process.env.BOT_TOKEN);



client.on('ready', () =>{ 
    console.log('ZeKuS Modification bot is now online!')})
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
.setTitle('ZeKuS Modification Rules | ZM')
.setDescription('**──────── General server rules───────────**\n • No membership granted to minors (under 13 years).\n • Moderators reserve the right to change nicknames.\n• Moderators reserve the right to use their own discretion regardless of any rule.\n• No Sending Other Server Invites to other members of the server.\n **────────Text chat rules───────────**\n• No questioning the mods. They do them for a Reason.\n• No asking to be granted roles/moderator roles.\n• @mention the moderators for support.\n• No @mentioning spam..\n• No racism.\n• No hate speech.\n• No advertisement.\n• No offtopic/use the right text channel for the topic you wish to discuss.\n**──────── Voice chat rules ───────────**\n• No voice chat channel hopping.\n• No annoying, loud or high pitch noises.\n• Reduce the amount of background noise, if possible.\n• Moderators reserve the right to disconnect, mute, deafen, or move members to and from voice channels.\n**──────── Development Rules ───────────**\n• No Ripping or Stealing Any of the Products Listed, Free or Paid.\n• Changing one of My Products without Permission from ZM Manager is Unlawful Ripping and will get you Banned.\n• Being in Other Leaking/Ripping Discords Is a Bannable Offense for Leaking.\n• No adding/changing anything to our Products without Perms to do so.\n**────────── Payment Rules ───────────**\n• Paypal and Paysafecard are the only 2 available methods at the moment!\n• You may Share a Product with a server you are in. Once you leave they must be Taken out.\n• Giving someone a Product for free is Prohibited\n• Claiming that a Product you Purchased is what you Created is not allowed you will be Banned.\n\n**To agree to these RULES type zm.verify to gain access to the rest of the server.**')

.setFooter('ZeKuS Modification | ZM');
message.channel.send(embed)
})  



client.on('guildMemberAdd', member => {
    console.log(member.user.tag);
});