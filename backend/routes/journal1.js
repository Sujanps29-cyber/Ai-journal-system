const express = require("express")
const router = express.Router()

// use db1
const db = require("../db1")

// use your service file
const { analyzeEmotion } = require("../services/llmservice")


// CREATE JOURNAL ENTRY
router.post("/", (req,res)=>{

const {userId, ambience, text} = req.body

db.run(
"INSERT INTO journals(userId, ambience, text) VALUES(?,?,?)",
[userId, ambience, text],
function(err){

if(err) return res.status(500).json(err)

res.json({
message:"Entry stored",
id:this.lastID
})

})

})


// GET USER ENTRIES
router.get("/:userId", (req,res)=>{

const userId = req.params.userId

db.all(
"SELECT * FROM journals WHERE userId=?",
[userId],
(err,rows)=>{

if(err) return res.status(500).json(err)

res.json(rows)

})

})


// ANALYZE TEXT
router.post("/analyze", async (req,res)=>{

try{

const { text } = req.body

const result = await analyzeEmotion(text)

res.json(result)

}
catch(err){

res.status(500).json({error:"analysis failed"})

}

})


module.exports = router