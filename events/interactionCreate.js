const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        if (!interaction.isCommand()) return
        const command=client.commandsSlash.get(interaction.commandName)
        if(!command)return

        command.execute(interaction)

    }
}