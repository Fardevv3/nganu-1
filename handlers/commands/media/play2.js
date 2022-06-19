const YT = require('../../../lib/yt')

module.exports = {
    tags: ['downloader'],
    cmd: ['play'],
    args: ['judul - artis'],
    help: ['play'],
    exec: async (m, client, { prefix, args, cmd }) => {
        try {
            if (args.length < 1) return m.reply(`*Fitur mencari lagu full tag metadata, sangat disarankan unutk memasukkan judul lagu yang tepat*\n${prefix}${cmd} judul - artis\n\ncontoh : ${prefix}${cmd} samudra janji - bima tarore`)
            const arr = await YT.searchTrack(args.join(' '))
            let list = new Array();
            let desc = `♫ 𝙈𝙪𝙨𝙞𝙘 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧\n𝙈𝙪𝙨𝙞𝙘 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 𝙙𝙚𝙣𝙜𝙖𝙣 𝙛𝙪𝙡𝙡 𝙩𝙖𝙜 𝙢𝙚𝙩𝙖𝙙𝙖𝙩𝙖\n\n𝘿𝙞𝙩𝙚𝙢𝙪𝙠𝙖𝙣  *${arr.length}* lagu`
            for (let i = 0; i < arr.length; i++) {
                list.push({
                    title: `${i + 1}. ${arr[i].title}`,
                    description: `Artist : ${arr[i].artist}\nAlbum : ${arr[i].album}\nDuration : ${arr[i].duration.label}\nSource : ${arr[i].isYtMusic ? 'YouTube Music' : 'YouTube'}\nId : ${arr[i].id}`,
                    rowId: `${prefix}ytmp3 ${arr[i].url}`
                });
            }
            await client.sendListM(
                m.chat,
                { buttonText: 'Music Downloader', description: desc, title: 'Pilih untuk mendownload' },
                list,
                m
            )

        } catch (error) {
            m.reply(util.format(error))
            console.log(error);
        }
    }
}
