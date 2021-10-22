// Template Originally
// Coded by tristan#0005 for Evie Bot

export {};

import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { axo } from "../axologs";

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pings"),
  async execute(interaction, client) {
    try {await interaction.reply("<a:loading:877782934696919040> Fetching Info");} catch (error) {console.log(error);}

    let exampleEmbed = new MessageEmbed().setColor("#5865F2");
    const pingMsg = `Ping! My response time was ${interaction.client.ws.ping.toString()}ms`;

    exampleEmbed.setTitle(pingMsg);
    
    interaction.editReply("Fetched <:applesparkle:841615919428141066>");
    await interaction.editReply({ embeds: [exampleEmbed] });
  },
};

// Template Originally
// Coded by tristan#0005 for Evie Bot
