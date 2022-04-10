const {MessageEmbed}=require("discord.js")
module.exports={
    name:"kick",
    data:{
        name:"kick",
        description:"kicko un utente da voi selezionato",
        options:[
            {
                name:"utente",
                description:"l'utente da voler kickare",
                type:"USER",
                required:true
            },
            {
                name:"motivo",
                description:"il motivo per cui l'utente dev'essere kickato",
                type:"STRING",
                required:false
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
            const reason = interaction.options.getString("motivo")|| "Nessun motivo"

            const member =interaction.guild.members.cache.get(utente.id)
            if(!member?.kickable)return interaction.reply({content:"Non riesco a kickare questo utente",ephemeral:true})
            member.kick(reason)

            const embed= new MessageEmbed()
            .setTitle("Utente kickato")
            .setThumbnail(utente.displayAvatarURL())
            .addField("Utente", utente.toString())
            .addField("Motivazione",reason)
            interaction.reply({embeds:[embed]})
    }
}