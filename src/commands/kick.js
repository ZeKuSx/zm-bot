const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick',
    async execute(client, message, args){
        await message.delete();
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command.");
        const mentionedMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";
        //sss
        const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`${mentionedMember.user.username} were kicked from ${message.guild.name}`)
        .setDescription(`**Reason**: ${reason}
        **Staff Member**: *${message.member.user.username}*`)
        .setColor("#304281")
        .setFooter(client.user.tag, client.user.displayAvatarURL());
        //dmkick embed
        const dmkickEmbed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from ${message.guild.name}`)
        .setDescription(`**Reason**: ${reason}
        **Staff Member**: *${message.member.user.username}*`)
        .setColor("#304281")
        .setFooter(client.user.tag, client.user.displayAvatarURL());

         //-kick @user dm ads
      
         if(!args[0]) return message.channel.send("You need to state a user to kick. \`zm.kick @user reason\`");
         if(!mentionedMember) return message.channel.send("The member mentioned isn't in the server.");
         try {
            
            await mentionedMember.send(dmkickEmbed);
         }catch(err){
             console.log('I was unable to msg the member')
         }
         
         try {
            await message.channel.send(kickEmbed);
         } catch (err){
             console.log('EMBED WAS UNABEL TO SEND')
         }

         try {
          await  mentionedMember.kick(reason)
         } catch (err){
             console.log(err);
             message.channel.send('I was unable to kick the member mentioned.')
         }
    }
}
