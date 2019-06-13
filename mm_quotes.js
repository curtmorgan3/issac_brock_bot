
const quotes = [
	"WELL!",
	"I'm on a road shaped like a figure eight. I'm going nowhere but I'm guaranteed to be late.",
	"We kiss on the mouth, but still cough down our sleeves.",
	"I get up just about noon, my head sends a message for me to reach for my shoes and walk.",
	"Well I can't swim, but I dog paddle.",
	"Oh noose- tied myself in, tied myself too tight.",
	"My brain's the burger and my heart's the coal.",
	"Short love with a long divorce and a couple of kids, of course they don't mean anything.",
	"Two one-eyed dogs, they're looking at steroes.",
	"Hi-fi gods try so hard to make their cars low to the ground.",
	"Well I'll go to college and I'll learn some big words and I'll talk real loud, God damn right I'll be heard.",
	"Some guy comes in lookin' a bit like everyone I'd ever seen. He moved just like Crisco disco, breathes 100% Listerine.",
	"God takes care of himself, you of you.",
	"When you get to the promise land, you're gonna shake that eye's hand.",
	"Everyone's a voyeurist, they're watching me watch them watch me right now.",
	"Early in the morning it pulls all on down my sore feet. I just wanna go back to sleep.",
	"I just got a message that said 'Yeah Hell has frozen over.' I got a phone call from the Lord saying, 'Hey boy, get a sweater'.",
	"I'm watchin' TV, I guess that's a solution. They gave me a receipt that said I 'didn't buy nothing'.",
	"It might not be a lot, but I feel like I'm making the most.",
	"Maybe we'll get lucky and we'll both live again. Well I don't know, I don't know, I don't know, Don't think so.",
	"You wasted life why wouldn't you waste death?",
	"Well all that icing and all that cake. I can't make it to your wedding, but I'm sure I'm gonna be at your wake.",
	"We were done done done with all the fuck fuck fucking around!",
	"Blame it on the web, but the spider's your problem now.",
	"Everyone's a building buring with no one to put the fire out.",
	"Shrug off short sighted false excitement and, oh what can I say?",
	"Jaws clenched tight we talked all night, oh but what the Hell did we say?",
	"Enough hair of the dog to make myself an entire rug.",
	"If you sweep up this mess I've created, there's nothing left to show I existed.",
	"I've got it all.....most.",
	"Our tails wagged and then fell off, but we just turned 'round, marched into the sea.",
	"Have one, have twenty more one-mores and oh it does not relent.",
	"When we find the perfect water, we'll hang out on the shore just long enough to leave our clothes there.",
	"We were certainly uncertain, at least I'm pretty sure I am.",
	"We owned all the tools ourselves, but not the skills to make a shelf with.",
	"I hope that the suite sleeps and suites you well.",
	"Cheer up, baby, it wasn't always quite so bad.",
	"For every bit of venom that came out, the antidote was had.",
	"Hold on to what you need. We've got a knack for fucked up history.",
	"So we carried all our groceries in while hauling out the trash. If this doesn't make us motionless I do not know what can.",
	"Always asking a question and I don't want to know.",
	"Open up a window, all the air all the air is falling out.",
	"Push push push push pull us up!",
	""
]


function get_issac_quote(){
	return quotes[Math.floor(Math.random() * quotes.length)];
}
function is_about_issac(text){
	return text.includes('Issac Brock');
}


module.exports = {
	get_issac_quote,
	is_about_issac
}
