const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
const queue = new Map ();


module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    async execute(client, message, args, cmd){

        console.log(args)
        console.log(cmd)
        

        console.log(`Command is being called`);
//Checking for the voicechannel and permissions (you can add more permissions if you like).
        const voice_channel = message.member.voice.channel;
        if(!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        console.log(`I have found that channel`);
      
        //This is our server queue. We are getting this server queue from the global queue.
        const server_queue = queue.get(message.guild.id);
        console.log(`I have got this server queue from global queue`);
        //If the user has used the play command
        
        
        if (cmd === 'play'){
            if(!args.length) return message.channel.send('You need to send the second argument!');
            let song = {};
          
            console.log(`I have got this server queue from global queue #2`);

            if(ytdl.validateURL(args[0])){
                const song_info = await ytdl.getInfo(args[0]);
                song = {title: song_info.videoDetails.title, url: song_info.videoDetails.video_url}

            } else {
                const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;

                    console.log(video_finder)
                }
                    
                
                console.log(`I have got this server queue from global queue #3`);
                const video = await video_finder(args.join(' '));
                console.log(video)
                if(video){
                    song = {title: video.title, url: video.url}
                } else {
                    message.channel.send('Error finding video');
                }
                console.log(`I have got this server queue from global queue #3`);
            }
            if(!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    song: []
                }
                //Add our key and value pair into the global queue. We then use this to get our server queue.
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.song.push(song);
    
    
                //Establish a connection and play the song with the vide_player function.
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.song[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                } 
                console.log(`I have connected`);
            } else
            server_queue.song.push(song);
            return message.channel.send (` **${song.title}** added to queue!`);
    
        }
        else if(cmd === 'skip') skip_song(message, server_queue);
        else if(cmd === 'stop') stop_song(message, server_queue);

        


    }
}  
     
     


    const video_player = async (guild, song) =>{
    const song_queue = queue.get(guild.id);

    if(!song){
        song_queue.voice_channel.leave();
        queue.delete(guild.id);

        
    }
    const stream = ytdl(song.url, {filter: 'audioonly'});
    song_queue.connection.play(stream, {seek: 0, volume: 0.5})
    .on ('finish', () => {
        song_queue.song.shift()
        video_player(guild, song_queue.song[0])
    });
    await song_queue.text_channel.send(`🎶**JOINED**  Now playing \`${song.title}\` in \`${song_queue.voice_channel.name}\``)

    } 

