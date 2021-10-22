"use strict";
// Template Originally
// Coded by tristan#0005 for Evie Bot
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        const { axo } = require("../axologs");
        // Do not disturb me!
        client.user.setPresence({
            status: "dnd",
        });
        // Night night console!
        console.clear();
        // Login
        axo.startupMsg("╔══════════════════════════════════════════════╗");
        axo.startupMsg(`║Ready! Logged in as ${client.user.tag}              ║`);
        // Slashys
        const { REST } = require("@discordjs/rest");
        const { Routes } = require("discord-api-types/v9");
        require("dotenv").config();
        const token = process.env.CLIENT_TOKEN;
        const fs = require("fs");
        const commands = [];
        const none = [];
        const commandFiles = fs
            .readdirSync("./commands")
            .filter((file) => file.endsWith(".js"));
        // Place your client and guild ids here
        const clientId = "900894681137811517";
        const TSMP = "819106797028769844";
        const paradoxia = "898156163126935582";
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            commands.push(command.data.toJSON());
        }
        const rest = new REST({ version: "9" }).setToken(token);
        (async () => {
            try {
                axo.startupMsg("║Started refreshing application (/) commands   ║");
                await rest.put(Routes.applicationGuildCommands(clientId, TSMP), { body: commands });
                await rest.put(Routes.applicationGuildCommands(clientId, paradoxia), { body: commands });
                const ping = client.ws.ping.toString();
                axo.startupMsg(`║Successfully reloaded application (/) commands║`);
                axo.startupMsg(`╠══════════════════════════════════════╦═══════╝`);
                axo.startupMsg(`║ Johnbot os by JohnSandman ©          ║`);
                axo.startupMsg(`║ My current ping to Discord is ${client.ws.ping.toString()} ms ║`);
                axo.startupMsg(`╚══════════════════════════════════════╝`);
            }
            catch (error) {
                axo.err(error);
            }
            const CurrencySystem = require("currency-system");
            const cs = new CurrencySystem;
            CurrencySystem.cs.on('debug', (debug, error) => {
                console.log(debug);
                if (error)
                    console.error(error);
            });
            //sets mongo url
            cs.setMongoURL('mongodb+srv://cheese:3Pphi5G8EtzNxhzv@sussycoins.qyewh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
            //sets default wallet amount when ever new user is created.
            cs.setDefaultWalletAmount(10);
            //sets default bank amount when ever new user is created.
            cs.setDefaultBankAmount(500);
        })();
    },
};
// Template Originally
// Coded by tristan#0005 for Evie Bot
