//const Discord=require("discord.js")
const fs =require("fs")
module.exports = {
    name: "registra",
    description: "serve per registrare i permessi degli slash command",
    //the alias are the other words that will trigger this command
    aliases: ["register"],
    async execute(msg, args) {
        fs.readdir(__dirname+"/slash/moderation", (err, files) => {
            console.log(files)
            files.forEach(async (file) => {
                const command=require(__dirname+`/slash/moderation/${file}`)
                //server id
                
                const comando=await client.guilds.cache.get("937040618264359052")?.commands.create(command.data)
                await comando.permissions.set({permissions:command.permissions});
            });
        });

        //msg.channel.send(`pong`);        
    }

}
