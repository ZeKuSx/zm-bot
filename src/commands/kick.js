const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick',
    async execute(client, message, args){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command.");
        const mentionedMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";
        const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from ${message.guild.name}`)
        .setDescription(`**Reason**: ${reason}
        **Staff Member**: -ZeKuS`)
        .setColor("#304281")
        .setFooter(client.user.tag, client.user.displayAvatarURL());
    
         //-kick @user dm ads
      
         if(!args[0]) return message.channel.send("You need to state a user to kick. \`zm.kick @user reason\`");
         if(!mentionedMember) return message.channel.send("The member mentioned isn't in the server.");
         try {
            await mentionedMember.send(kickEmbed);
         }catch(err){
             console.log('I was unable to msg the member')
         }
    
         try {
          await  mentionedMember.kick(reason)
         } catch (err){
             console.log(err);
             message.channel.send('I was unable to kick the member mentioned.')
         }
    }
}
