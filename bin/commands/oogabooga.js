"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
module.exports = {
    data: new builders_1.SlashCommandBuilder().setName("ooga").setDescription("booga").addStringOption((option) => option
        .setName("word")
        .setDescription("What should i ooga to")
        .setRequired(true)).addStringOption((option) => option
        .setName("select")
        .setDescription("What type of ooga")
        .setRequired(true)
        .addChoice("Hardcore!", "hardcore")
        .addChoice("Medium..", "medium")
        .addChoice("small", "small")
        .addChoice("t i n y", "tiny")),
    async execute(interaction, client) {
        try {
            await interaction.reply({ content: "<a:loading:877782934696919040> Fetching Info", ephemeral: false });
        }
        catch (error) {
            console.log(error);
        }
        // Make an embed
        const userInput = interaction.options.getString("word");
        let exampleEmbed = new discord_js_1.MessageEmbed().setColor("#0099ff").setTimestamp();
        if (interaction.options.getString("select") == "hardcore") {
            exampleEmbed.addField("OOGA!", userInput.toString());
        }
        if (interaction.options.getString("select") == "medium") {
            exampleEmbed.addField("Ooga!", userInput.toString());
        }
        if (interaction.options.getString("select") == "small") {
            exampleEmbed.addField("ooga!", userInput.toString());
        }
        if (interaction.options.getString("select") == "tiny") {
            exampleEmbed.addField("ooga?", userInput.toString());
        }
        interaction.editReply("Fetched <:applesparkle:841615919428141066>");
        await interaction.editReply({ embeds: [exampleEmbed], ephemeral: true });
    },
};
