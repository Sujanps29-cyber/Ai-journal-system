async function analyzeEmotion(text){

text = text.toLowerCase()

let emotion = "neutral"

if(text.includes("happy") || text.includes("calm"))
emotion="calm"

if(text.includes("sad"))
emotion="sad"

if(text.includes("angry"))
emotion="anger"

return {
emotion,
keywords:text.split(" ").slice(0,3),
summary:"User expressed "+emotion+" feelings."
}

}

module.exports = { analyzeEmotion }