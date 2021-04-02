const Discord = require('discord.js');

module.exports = {
    name: 'close',
    maxArgs: 0,
    permissionError: ' You must be an admin to use this command.',
    permissions: 'ADMINISTRATOR',
    async execute(client, message, args, cmd, discord){

        if(message.channel.parent.id === '824340172442173530')
        {


            message.channel.delete();

        }
        



    },
}