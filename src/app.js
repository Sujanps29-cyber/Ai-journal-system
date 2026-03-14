import React,{useState,useEffect} from "react"

function App(){

const [text,setText] = useState("")
const [entries,setEntries] = useState([])
const [analysis,setAnalysis] = useState(null)

const userId="123"

const fetchEntries = async ()=>{
const res = await fetch(`http://localhost:5000/api/journal/${userId}`)
const data = await res.json()
setEntries(data)
}

useEffect(()=>{
fetchEntries()
},[])

const saveEntry = async ()=>{

await fetch("http://localhost:5000/api/journal",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({userId,ambience:"forest",text})
})

setText("")
fetchEntries()

}

const analyze = async ()=>{

const res = await fetch("http://localhost:5000/api/journal/analyze",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({text})
})

const data = await res.json()

let emoji="😐"

if(data.emotion==="happy") emoji="😄"
if(data.emotion==="sad") emoji="😢"
if(data.emotion==="angry") emoji="😡"

setAnalysis({
emotion:data.emotion,
summary:data.summary,
emoji
})

}

return(

<div style={styles.page}>

<h1 style={styles.title}>
AI Emotion Journal ✨
</h1>

<div style={styles.panel}>

<textarea
value={text}
placeholder="Write your thoughts..."
onChange={(e)=>setText(e.target.value)}
style={styles.input}
/>

<div style={styles.buttonRow}>

<button style={styles.primaryBtn} onClick={saveEntry}>
💾 Save Entry
</button>

<button style={styles.aiBtn} onClick={analyze}>
🤖 Analyze Emotion
</button>

</div>

{analysis && (

<div style={styles.analysisBox}>

<h3>Emotion Analysis</h3>

<p>
<strong>Emotion:</strong> {analysis.emotion} {analysis.emoji}
</p>

<p>
<strong>Summary:</strong> {analysis.summary}
</p>

</div>

)}

</div>

<div style={styles.entriesPanel}>

<h2 style={styles.sectionTitle}>
📜 Previous Entries
</h2>

{entries.map((e,i)=>(
<div key={i} style={styles.entryCard}>
{e.text}
</div>
))}

</div>

</div>

)

}

const styles={

page:{
minHeight:"100vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
padding:"80px 20px"
},

title:{
fontSize:"56px",
fontWeight:"800",
background:"linear-gradient(90deg,#7f5af0,#2cb67d,#ff8906)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent",
marginBottom:"40px",
textAlign:"center"
},

panel:{
width:"540px",
padding:"30px",
borderRadius:"20px",
background:"rgba(255,255,255,0.05)",
backdropFilter:"blur(20px)",
boxShadow:"0 20px 60px rgba(0,0,0,0.6)",
marginBottom:"40px"
},

input:{
width:"100%",
height:"120px",
borderRadius:"12px",
border:"1px solid rgba(255,255,255,0.1)",
background:"rgba(0,0,0,0.3)",
color:"white",
padding:"15px",
fontSize:"16px",
outline:"none"
},

buttonRow:{
display:"flex",
gap:"15px",
marginTop:"20px"
},

primaryBtn:{
flex:1,
padding:"14px",
borderRadius:"12px",
border:"none",
background:"linear-gradient(90deg,#7f5af0,#2cb67d)",
color:"white",
fontSize:"16px",
cursor:"pointer",
boxShadow:"0 10px 30px rgba(127,90,240,0.6)",
transition:"transform 0.2s"
},

aiBtn:{
flex:1,
padding:"14px",
borderRadius:"12px",
border:"none",
background:"linear-gradient(90deg,#ff8906,#f25f4c)",
color:"white",
fontSize:"16px",
cursor:"pointer",
boxShadow:"0 10px 30px rgba(255,137,6,0.6)"
},

analysisBox:{
marginTop:"20px",
padding:"15px",
borderRadius:"12px",
background:"rgba(255,255,255,0.08)",
border:"1px solid rgba(255,255,255,0.1)"
},

entriesPanel:{
width:"540px",
padding:"30px",
borderRadius:"20px",
background:"rgba(255,255,255,0.05)",
backdropFilter:"blur(20px)",
boxShadow:"0 20px 60px rgba(0,0,0,0.6)"
},

sectionTitle:{
marginBottom:"20px"
},

entryCard:{
background:"rgba(255,255,255,0.08)",
padding:"15px",
borderRadius:"12px",
marginBottom:"12px",
border:"1px solid rgba(255,255,255,0.05)"
}

}

export default App