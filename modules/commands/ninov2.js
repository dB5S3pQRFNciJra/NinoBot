module.exports.config = {
    name:"ninov2",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Duy Cute UwU",
    description: "Nói chiện zới bot nino cute",
    commandCategory: "General",
    usages: "nino [câu hỏi]/[on,off]",
    cooldowns: 5
};

module.exports.onLoad = function() {
    //file path by meewmeew
    const axios = require('axios');
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'nino.json');
    if (!existsSync(path)) {
        const obj = {
            nino: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('nino')) data.nino = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'nino.json');
    const { nino } = require(path);

    if (nino.hasOwnProperty(threadID) && nino[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://api-ninoreply-adreno.herokuapp.com/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "ủa nói j hong hiểu :<") {
                api.sendMessage("nino ko hiểu, dạy nino đi :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
    })
    }  
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'nino.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { nino } = database;

    if (!args[0]) { api.sendMessage("ủa hỏi j hỏi đi ;-;", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                nino[threadID] = true;
                api.sendMessage("bật ninoreply thành công!", threadID);
                break;
            }
            case "off": {
                nino[threadID] = false;
                api.sendMessage("đã tắt ninoreply", threadID);
                break;
            }
            default:
            axios.get(encodeURI(`https://api-ninoreply-adreno.herokuapp.com/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "ủa nói j hong hiểu :<") {
                api.sendMessage("nino ko hiểu, dạy nino đi :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}