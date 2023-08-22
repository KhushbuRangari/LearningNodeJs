// const helloWorld = require("helloworld")
// helloWorld.helloIndia

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<br><p>mkhhjhkjhkjhjkh </p> <br><p>kjhjhjkhj</p>')
})

app.listen(3002,()=>{
  console.log("Khushbu");
})