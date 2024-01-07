const express = require('express');
const app = express();

app.get("/" , (req,res) => {
  res.send("Hola mundo desde Node")
})

app.get("/mensaje" , (req,res) => {
  res.send("Mensaje");
}
module.exports = app
