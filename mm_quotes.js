
const quotes = [
	"WELL!",
	"I'm on a road shaped like a figure eight. I'm going nowhere but I'm guaranteed to be late.",
	"We kiss on the mouth, but still cough down our sleeves.",
	"I get up just about noon, my head sends a message for me to reach for my shoes and walk.",
	"Well I can't swim, but I dog paddle.",
	"Oh noose- tied myself in, tied myself too tight.",
	"My brain's the burger and my heart's the coal.",
	"Short love with a long divorce and a couple of kids, of course they don't mean anything.",
	"Two one-eyed dogs, they're looking at stereos.",
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
	"Everyone's a building burning with no one to put the fire out.",
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
	"Opinions were like kittens, I was giving them away.",
	"Sometimes all I really want to do is love. Sometimes I'm angry that I feel so angry.",
	"You ask me what size it is, not what I sell.",
	"While we're on the subject, could we change the subject now?",
	"Changed my mind so much I can't even trust it. My mind changed me so much I can't even trust myself.",
	"We treat mishaps like sinking ships, and I know that I don't want to be out to drift.",
	"I've got my PISTOL IN THE CAR! UH-HUH!",
	"Someday you will die and somehow something's going to still your carbon.",
	"Where do you move when what you are moving from is yourself?",
	"We are fixed right where we are.",
	"I’m trying to drink away the part of the day that I cannot sleep away.",
	"Well, I hadn't noticed but the people really noticed that they really didn't want us around.",
	"No my dog wont bite you, though it had the right to. You oughta give her credit cause she knows I would have let it happen.",
	"Workin' on leavin' the livin'.",
	"You're the flowers in my house when my allergies come out.",
	"Alright already, we'll all float on!",
	"If life's not beautiful without the pain, well I'd just rather never ever even see beauty again.",
	"You can't look in on one-way eyes.",
	"Dogs eat their own shit.",
	"You missed when time and life shook hands and said goodbye.",
	"I miss you when you’re around.",
	"Open your window, and let in the atmosphere! OH YEAH!!",
	"But God who’d want to be such an asshole?",
	"I’m the same as I was when I was six years old.",
	"I'm upset and I leave the door open wide. Our hearts are used up, cracked and dry.",
	"THIS PLANE IS DEFINITELY CRASHING!",
	"When I have sex I'm always thinking about the pavement so I can avoid premature ejaculation.",
	"Standing in the tall grass, thinking nothing.",
	"The 3rd planet is sure they're being watched by an eye in the sky that can't be stopped.",
	"Right wing, left wing, chicken wing.",
	"Anytime anyone gets on their knees to pray well it makes my telephone ring!",
	"Needed me to fall down so you could climb up some fool ass ladder, well good luck. I hope there’s something better up there.",
	""

]


function get_isaac_quote(){
	return quotes[Math.floor(Math.random() * quotes.length)];
}
function is_about_isaac(text){
	return text.includes('Isaac Brock');
}


module.exports = {
	get_isaac_quote,
	is_about_isaac
}
