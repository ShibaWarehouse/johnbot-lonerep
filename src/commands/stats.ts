// Template Originally
// Coded by tristan#0005 for Evie Bot

export {};

import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import si from "systeminformation";
import { axo } from "../axologs";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Stats about the system I run on"),
  async execute(interaction, client) {
    // Axolotl Fetching Mechanic
    await interaction.reply("<a:loading:877782934696919040> Fetching Info");

    // Make an embed

    let exampleEmbed = new MessageEmbed().setColor("#5865F2").setTimestamp();

    // Vars

    // Actions

    // N/a

    // Embed It!

    const cpu = await si.cpu();
    exampleEmbed
      .addField("My Runtime Stats", "━━━━━━━━━━━━━━━━━━━━━━━━", false)
      .addField("My VPS's CPU:", cpu.brand, true)
      .addField("Discord Lib:", "discord.js", true)
      .addField(
        `My Average Response Time:`,
        interaction.client.ws.ping.toString() + "ms",
        true
      );

    // Fetched!

    interaction.editReply("Fetched <:applesparkle:841615919428141066>");

    // Send Embed

    await interaction.editReply({ embeds: [exampleEmbed] });
  },
};

// Template Originally
// Coded by tristan#0005 for Evie Bot
