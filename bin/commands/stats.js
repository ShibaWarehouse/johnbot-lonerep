"use strict";
// Template Originally
// Coded by tristan#0005 for Evie Bot
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const systeminformation_1 = __importDefault(require("systeminformation"));
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName("stats")
        .setDescription("Stats about the system I run on"),
    async execute(interaction, client) {
        // Axolotl Fetching Mechanic
        await interaction.reply("<a:loading:877782934696919040> Fetching Info");
        // Make an embed
        let exampleEmbed = new discord_js_1.MessageEmbed().setColor("#5865F2").setTimestamp();
        // Vars
        // Actions
        // N/a
        // Embed It!
        const cpu = await systeminformation_1.default.cpu();
        exampleEmbed
            .addField("My Runtime Stats", "━━━━━━━━━━━━━━━━━━━━━━━━", false)
            .addField("My VPS's CPU:", cpu.brand, true)
            .addField("Discord Lib:", "discord.js", true)
            .addField(`My Average Response Time:`, interaction.client.ws.ping.toString() + "ms", true);
        // Fetched!
        interaction.editReply("Fetched <:applesparkle:841615919428141066>");
        // Send Embed
        await interaction.editReply({ embeds: [exampleEmbed] });
    },
};
// Template Originally
// Coded by tristan#0005 for Evie Bot
