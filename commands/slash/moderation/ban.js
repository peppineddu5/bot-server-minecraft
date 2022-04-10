const {MessageEmbed}=require("discord.js")
module.exports={
    name:"ban",
    data:{
        name:"ban",
        description:"kicko un utente da voi selezionato",
        options:[
            {
                name:"utente",
                description:"l'utente da voler kickare",
                type:"USER",
                required:true
            },
            {
                name:"tempo",
                description:"per quanto tempo dovrà essere bannato giorni tra 0-7",
                type:"INTEGER",
                minValue:0,
                maxValue:7,
                required:false,
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
            id:"937040618264359057",
            type:"ROLE",
            permission:true
        },
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
            const time = interaction.options.getInteger("tempo")||0

            const member =interaction.guild.members.cache.get(utente.id)
            if(!member?.bannable)return interaction.reply({content:"Non riesco a kickare questo utente",ephemeral:true})
            member.ban({days:time,reason})

            const embed= new MessageEmbed()
                .setTitle("Utente bannato")
                .setThumbnail(utente.displayAvatarURL())
                .addField("Utente", utente.toString())
                .addField("Motivazione",reason)
            interaction.reply({embeds:[embed]})
    }
}