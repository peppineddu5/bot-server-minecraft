const ms=require("ms")
function spamCheck(msg, set, time) {
    if (msg.member.roles.cache.find(role => role.name === 'Muted')) return

    let bool = false 

    let user = { id: msg.author.id, time: Date.now(), times: 2 }

    for (let u of set) {

        if (isNaN(u.times)) u.times = 2

        if (u.id === msg.author.id) {
            bool = true 

            if (u.times >= 5) {
                msg.reply(`Sei troppo veloce`)

                let muterole = msg.guild.roles.cache.find(role => role.name === 'Muted')
                if (!msg.member.roles.cache.has(muterole.id)) {
                    
                        
                    if (msg.member.moderatable){
                    msg.member.roles.add(muterole)

                    set.delete(u)
                    // rimuove il ruolo dopo 5 secondi
                   setTimeout(() => {
                        msg.member.roles.remove(muterole)
                        
                        //msg.channel.send('smutato')
                    }, ms("20m"));
                    }else{
                        console.log("non riesco")
                    }
                }
            } else if ((Date.now() - u.time) <= time) {
                u.times++
                u.time = Date.now()
            }
        }
    }
    if (bool === false) {
        set.add(user)
    }
}


module.exports = { spamCheck } 