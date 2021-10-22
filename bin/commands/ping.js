"use strict";
// Template Originally
// Coded by tristan#0005 for Evie Bot
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
module.exports = {
    data: new builders_1.SlashCommandBuilder().setName("ping").setDescription("Pings"),
    async execute(interaction, client) {
        try {
            await interaction.reply("<a:loading:877782934696919040> Fetching Info");
        }
        catch (error) {
            console.log(error);
        }
        let exampleEmbed = new discord_js_1.MessageEmbed().setColor("#5865F2");
        const pingMsg = `Ping! My response time was ${interaction.client.ws.ping.toString()}ms`;
        exampleEmbed.setTitle(pingMsg);
        interaction.editReply("Fetched <:applesparkle:841615919428141066>");
        await interaction.editReply({ embeds: [exampleEmbed] });
    },
};
// Template Originally
// Coded by tristan#0005 for Evie Bot
