"use strict";
// Template Originally
// Coded by tristan#0005 for Evie Bot
module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        const { axo } = require("../axologs");
        axo.i(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
    },
};
// Template Originally
// Coded by tristan#0005 for Evie Bot
