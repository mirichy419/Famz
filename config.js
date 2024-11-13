//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2348161421533";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkQyOTJ3UXVIc292aHd4MDdBZU13bW5zVWpvdXo5NktxTEl3OE9LYXlsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBoS0NPUFBjdEJlaEtySVhZQ0hrSE9DdTRuUXdjM1ZOYStCWXBlYkRpVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQlVaUnpOQ2xmd05qVFB3bkh0TW1tNjRNNXBhQzBUSjRSWGUrMXFYZjFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVlVDbS9leEFlMzZFdmFycnVWeU5tRlVOb2k3ZEZMYnV6UWd5bEk3RlhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlIZ2hQcUxBZEdzSlJnRVZtVllFVUtVQldMRXhTWGZTSlhaTXR5Wjh4V289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBZNXRBSzAzamswbXhEaVAzMzZRNEVvNFZwSzgzZ0tDZTFza3YvMHg4RTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUkxbGl2YW51aGNtcktiNXVqWEpVKzh0OUlPZGxuVVhjTHlXOStjUzRIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXNZbGdodkJFUDhEZGxBc0EwcGI5NzJJSjUwKzRZM1JBOUdyVzc3NVVXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkzTFVJNWJuM3lKNjM3bzcvTlIvUXBWeEJ3dlNQcG1XbmN1allDd3BHMGd5Z3pOSkZpYWxtODZFZG01ZytEc2hNYW9IMXVmd1B0WDVBYkJuejdxV2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJ4R0VOQWRqS2Z6bWhOQnJwZkcxaGJOVyt2ZWN5RmptWEh0WmdhdVorZDEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrQ2w0VUpRWVJBU1RKeWk1d0NkZzVBIiwicGhvbmVJZCI6ImU4N2ViZDQ5LTg0NGYtNDU1YS04YWY4LTVmYmEwMmMwMjg1MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1ZUNvTFFEQmxHVUNzbXIyc0RiUVF6VlFWUTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2FvbUxSR256THhrZjMwVFMwZkh1SVlGZ0pzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE2NFRLTTZWIiwibWUiOnsiaWQiOiIyMzQ4MTYxNDIxNTMzOjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRHNpU01Ra2ZEVHVRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSUU0yT0tweEdUL3l0SFlBbm54aXRDZjFjSkRHMENDZkRIeVhIekhRMlRZPSIsImFjY291bnRTaWduYXR1cmUiOiJiN2p6dGNkOVd1SlR5YlF1aGluNFpSUlNQWmd0ZmNmaERFL21oa05yTUorcjcyZkhFd3I4Y2FNUG93ck5iNStybkVPYnYyYzhIQzUzYlFHdW9yeXFDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWXBQYkNTTzZlUWZrbVFIcTJwc2x0UDJvMVVselEyZm9pOXJNUjllOVFCWkliOUgxdFNZa1cwV2pMeWxuR2xlZTAyNCtuc1paOEtITVpPMWcwRXQ2Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTYxNDIxNTMzOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVVRE5qaXFjUmsvOHJSMkFKNThZclFuOVhDUXh0QWdud3g4bHg4eDBOazIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE1MjQ2Mzd9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MI.RICHY™`",
  author: process.env.PACK_AUTHER || "RICHY",
  packname: process.env.PACK_NAME || "MI",
  botname: process.env.BOT_NAME || "FAMZ_LTD",
  ownername: process.env.OWNER_NAME || "FAMZ-BOT",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
