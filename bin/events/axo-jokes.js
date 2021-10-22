"use strict";
// Template Originally
// Coded by tristan#0005 for Evie Bot
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: "messageCreate",
    async execute(message, interaction) {
        //console.log('ok')
        //console.log(message.content)
        let msg = message.content.toString().toLowerCase();
        //
        // Simple commands
        //
        const exampleEmbed = new discord_js_1.MessageEmbed().setColor("#0099ff").setTimestamp();
        if (msg === "john") {
            exampleEmbed.setTitle("Fun Fact:");
            exampleEmbed.setDescription("thats my creator");
            try {
                message.reply({ embeds: [exampleEmbed] });
            }
            catch (error) {
                console.log(error);
            }
        }
        function sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        }
    },
};
// Template Originally
// Coded by tristan#0005 for Evie Bot
