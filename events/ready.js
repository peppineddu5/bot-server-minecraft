module.exports = {
    name: "ready",
    execute() {
        console.log("Bot online!");
        client.guilds.cache.forEach(guild => {
            client.commandsSlash.forEach(command=>{
                guild.commands.create(command.data)
            })
            
             
        });
        
    }
}