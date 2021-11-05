const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply('seja bem vindo , ' + from.first_name + " " + from.last_name + " ao seu primeiro bot  " )

    
})


bot.on('text', async (ctx, next) => {  
    await   ctx.reply('mid 1')
    next()
})

bot.on('text', async ctx => {
    await   ctx.reply('mid 2')
    
})
bot.startPolling()
