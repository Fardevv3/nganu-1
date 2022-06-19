const { S_WHATSAPP_NET, delay } = require("@adiwajshing/baileys")
const package = require('../../../package.json')
const config = require('../../../src/config.json')

module.exports = {
    tags: ['others', 'information'],
    cmd: ['owner', 'creator'],
    help: ['owner'],
    exec: async (m, client) => {
        config.owner.map(async (v) => await client.sendContact(m.chat, v.split(S_WHATSAPP_NET)[0], package.author, m))
        await delay(2000)
        const btn = [
            { urlButton: { displayText: `Website`, url: `https://fardevv2.my.id` } },
            { urlButton: { displayText: `Instagram`, url: `https://www.instagram.com/fardev.id` } },
            { urlButton: { displayText: `Github`, url: `https://github.com/Fardevv2` } },
            { urlButton: { displayText: `Contact me`, url: `https://wa.me/18312576749` } },
        ]
        client.sendMessage(m.chat, { text: `Social Media`, footer: global.footer, templateButtons: btn }, { quoted: m })
    }
}