export {};

import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { axo } from "../axologs";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bal")
    .setDescription("Check your balance"), // Removed the input to check another user (im adding that to evie rn, ill give it to you when done if you want but you should really learn to do it your self) -tristan 22/10/21
  async execute(interaction, client) {
    // Axolotl Fetching Mechanic

    try {
      await interaction.reply({
        content: "<a:loading:877782934696919040> Fetching Info", // Got rid of empherical -tristan 22/10/21
      });
    } catch (error) {
      console.log(error);
    }

    // Make a new embed

    let exampleEmbed = new MessageEmbed().setColor("#0099ff").setTimestamp();

    // Style Embed



    // build embed in try to stop crashes
    try {
    
      const CurrencySystem = require("currency-system");
      const cs = new CurrencySystem();
      let user = interaction.user;
      let result = await cs.balance({user: user,});
      
      exampleEmbed.setDescription(`⏣ ${result.wallet}\n⏣ ${result.bank}`);
    
    } catch (error) {console.log(error);}
    // await fetched
    interaction.editReply("Fetched <:applesparkle:841615919428141066>");
    // send embed
    await interaction.editReply({ embeds: [exampleEmbed] }); // got rid of emperhical -tristan 22/10/21
  },
};
