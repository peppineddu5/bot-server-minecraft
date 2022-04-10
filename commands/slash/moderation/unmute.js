const {MessageEmbed}=require("discord.js")
module.exports={
    name:"unmute",
    data:{
        name:"unmute",
        description:"muto un utente",
        options:[
            {
                name:"utente",
                description:"l'utente da voler kickare",
                type:"USER",
                required:true
            },
        ],
    },
    permissions:[
        {
            id:"942108296532332665",
            type:"ROLE",
            permission:true
        },
        {
            id:"937439674690044034",
            type:"ROLE",
            permission:true
        },
        {
            id:"953917294881406996",
            type:"ROLE",
            permission:true
        },
        {
            id:"937040618264359054",
            type:"ROLE",
            permission:false
        }
    ],
    execute(interaction){
            const utente = interaction.options.getUser("utente")
            
            const member =interaction.guild.members.cache.get(utente.id)
            
            
        
            member.roles.remove("937040618264359058")

            const embed= new MessageEmbed()
            .setTitle("Utente mutato")
            .setThumbnail(utente.displayAvatarURL())
            .addField("Utente", utente.toString())
            //.addField("Motivazione",reason)
            interaction.reply({embeds:[embed]})
    }
}