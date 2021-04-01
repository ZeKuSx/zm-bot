const Discord = require('discord.js');

module.exports = {
    name: 'verify',
    description: 'verify',
    async execute(client, message){
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
    }
}