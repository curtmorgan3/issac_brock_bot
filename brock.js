require('dotenv').config();
const Snoowrap = require('snoowrap');
const { get_issac_quote, is_about_issac } = require('./mm_quotes.js');
const { CommentStream } = require("snoostorm");

const client = new Snoowrap({
	userAgent: 'issac_brock_bot',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});


const comments = new CommentStream(client, { subreddit: "ModestMouse", limit: 10, pollTime: 2000 });
comments.on("item", (comment)=> {
	if(is_about_isaac(comment.body)){
		try {
			let reply = get_isaac_quote();
			comment.reply(reply);
		} catch (e) {
			console.error(e);
		}
	}
});
