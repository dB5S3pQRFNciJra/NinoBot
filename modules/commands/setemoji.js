module.exports.config = {
	name: "setemoji",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lợi",
	description: "Đổi emoji trong nhóm",
	commandCategory: "Quản Lí Nhóm",
	usages: "setemoji [emoji]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	return api.setTitle(`${args.join(" ")}`, event.threadID, event.messagaID);
}