exports.run = {
   usage: ['mokaya'],
   hidden: ['fortune', 'fortunatus', 'dreaded'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `What Do You Want? -_- 🗿`, m)
   },
   error: false,
   cache: true,
   location: __filename
}
