const { default: onePercent, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, delay } = require('@whiskeysockets/baileys')
const pino = require('pino')
const { Boom } = require('@hapi/boom')

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth')
    const store = makeInMemoryStore({})

    const onepercent = onePercent({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['One Percent', 'Safari', '1.0.0'],
        auth: state
    })

    store.bind(onepercent.ev)

    onepercent.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); onepercent.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); connectToWhatsApp(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); connectToWhatsApp(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); onepercent.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); onepercent.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); connectToWhatsApp(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); connectToWhatsApp(); }
            else yanz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
    })


    onepercent.ev.on('creds.update', saveCreds)

    return onepercent
}

module.exports = { connectToWhatsApp }
