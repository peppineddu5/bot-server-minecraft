const {MessageEmbed}=require("discord.js")
const ms =require("ms")
module.exports={
    name:"mute",
    data:{
        name:"mute",
        description:"muto un utente",
        options:[
            {
                name:"utente",
                description:"l'utente da voler kickare",
                type:"USER",
                required:true
            },
            {
                name:"tempo",
                description:"per quanto tempo l'untente deve essere bannato",
                type:"STRING",
                required:false
            }
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
            const time = interaction.options.getString("tempo")
            
            if(time)
                if(!ms(time))return interaction.reply("inserire un valore in tempo")


            const member =interaction.guild.members.cache.get(utente.id)
            
            
            
            if (interaction.member.moderatable)
                member.roles.add("937040618264359058")

            const embed= new MessageEmbed()
            .setTitle("Utente mutato")
            .setThumbnail(utente.displayAvatarURL())
            .addField("Utente", utente.toString())
            //.addField("Motivazione",reason)
            interaction.reply({embeds:[embed]})
            if (interaction.member.moderatable)
                if(time)
                    setTimeout(() => {
                        member.roles.remove("937040618264359058")
                    }, ms(time));
            
    }
}