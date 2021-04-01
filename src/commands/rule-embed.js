const  Discord  = require('discord.js')

module.exports = {
    name: 'rule',
    description: 'rule',
    async execute(client, message){
        const embed = new Discord.MessageEmbed()
 

        .setColor('#304281')
        .setTitle('ZeKuS Modification Rules | ZM')
        .setDescription('**──────── General server rules───────────**\n' +
        '• No membership granted to minors (under 13 years).\n'+
         '• Moderators reserve the right to change nicknames.\n' +
         '• Moderators reserve the right to use their own discretion regardless of any rule.\n'+
         '• No Sending Other Server Invites to other members of the server.\n'+
         ' **────────Text chat rules───────────**\n'+
         '• No questioning the mods. They do them for a Reason.\n'+
         '• No asking to be granted roles/moderator roles.\n'+
         '• @mention the moderators for support.\n'+
         '• No @mentioning spam..\n• No racism.\n'+
         '• No hate speech.\n• No advertisement.\n'+
         '• No offtopic/use the right text channel for the topic you wish to discuss.\n'+
         '**──────── Development Rules ───────────**\n• No Ripping or Stealing Any of the Products Listed, Free or Paid.\n'+
         '• Changing one of My Products without Permission from ZM Manager is Unlawful Ripping and will get you Banned.\n'+
         '• Being in Other Leaking/Ripping Discords Is a Bannable Offense for Leaking.\n'+
         '• No adding/changing anything to our Products without Perms to do so.\n'+
         '**────────── Payment Rules ───────────**\n• Paypal and Paysafecard are the only 2 available methods at the moment!\n'+
         '• You may Share a Product with a server you are in. Once you leave they must be Taken out.\n'+
         '• Giving someone a Product for free is Prohibited\n\n\n**To agree to these RULES type zm.verify to gain access to the rest of the server.**')
        
        .setFooter('ZeKuS Modification | ZM');
        message.channel.send(embed)
    }
}