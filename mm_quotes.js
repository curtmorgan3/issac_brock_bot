
const quotes = [
	"WELL!",
	"I'm on a road shaped like a figure eight. I'm going nowhere but I'm guaranteed to be late."
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
