exports.run = {
   usage: ['foreigners'],
   use: '(option)',
   category: 'admin tools',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      participants
   }) => {
      try {
         let member = participants.filter(v => !v.admin).map(v => v.id).filter(v => !v.startsWith('254') && v != client.decodeJid(client.user.id))
         if (!args || !args[0]) {
            if (member.length == 0) return client.reply(m.chat, Func.texted('bold', `Dreaded Bot has checked this group and found it is clean with no foreigners -_- 🗿🚬`), m)
            let teks = `Dreaded Bot has checked this group and found *${member.length}* members are foreigners, send *${isPrefix + command} -y* to remove these foreigners -_- 🗿🚬 \n\n`
            teks += member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')
            client.reply(m.chat, teks, m)
         } else if (args[0] == '-y') {
            for (let jid of member) {
               await Func.delay(2000)
               await client.groupParticipantsUpdate(m.chat, [jid], 'remove')
            }
            await client.reply(m.chat, Func.texted('bold', `Done Successfully, ${member.length} outsiders successfully eliminated from this group -_- 🗿🚬`), m)
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   admin: true,
   group: true,
   botAdmin: true
}
