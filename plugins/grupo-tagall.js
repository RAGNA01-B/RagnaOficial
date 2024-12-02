let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝙼𝙴𝙽𝚂𝙰𝙹𝙴: ${pesan}`
let teks = `❄🎅🏻𝙰𝙲𝚃𝙸𝚅𝙴𝙽𝚂𝙴 𝙱𝙾𝚃𝚂 𝙻𝙴𝚂 𝙷𝙰𝙱𝙻𝙰 𝚂𝙰𝙽𝚃𝙰 𝙲𝙻𝙰𝚄𝚂🎅🏻❄\n${oi}\n\n❄𝙱𝙾𝚃𝚂:❄\n`
for (let mem of participants) {
teks += `❄ @${mem.id.split('@')[0]}\n`}
teks += `RagnaBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
