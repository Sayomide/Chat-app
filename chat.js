const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});




/*
const { join } = require('node:path');
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});
*/



/*
let startPage = document.querySelector(".startpage");
let mainDiv = document.querySelector(".maindiv");
let groupChat = document.querySelector("#group");
let indivChat = document.querySelector("#friend");
let messageForm = document.querySelector("#form");
let sendButton = document.querySelector(".send");



groupChat.addEventListener("click", () => {
  startPage.style.display = "none";
  mainDiv.classList.add("active");
});

indivChat.addEventListener("click", () => {
  startPage.style.display = "none"
  mainDiv.classList.add("active");
})

sendButton.addEventListener("click", (e)=> {
 e.preventDefault();
})

function proceed(){
}
*/