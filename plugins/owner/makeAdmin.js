exports.run = {
   usage: ['pme-mokaya'],
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      try {
   client.sendReact(m.chat, '🎊', m.key)
         return client.groupParticipantsUpdate(m.chat, [m.sender], 'promote').then(res => client.reply(m.chat, Func.jsonFormat(res), m))
      } catch (e) {
         console.log(e)
         client.reply(m.chat, global.status.error, m)
      }
   },
   group: true,
   owner: true,
   botAdmin: true
}
