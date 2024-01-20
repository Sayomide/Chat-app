 const socket = io();
 
 
let startPage = document.querySelector(".startpage");
let mainDiv = document.querySelector(".maindiv");
let groupChat = document.querySelector("#group");
let indivChat = document.querySelector("#friend");
let messageForm = document.querySelector("#form");
let sendButton = document.querySelector(".send");
let inputSpace = document.querySelector(".inputss")
 
 sendButton.addEventListener("click", (e)=> {
 e.preventDefault();
 if (inputSpace.value) {
      socket.emit('chat message', inputSpace.value);
      inputSpace.value = '';
 }
})
 
groupChat.addEventListener("click", () => {
  startPage.style.display = "none";
  mainDiv.classList.add("active");
});

indivChat.addEventListener("click", () => {
  startPage.style.display = "none"
  mainDiv.classList.add("active");
})

const messages = document.getElementById('messages');
socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });







function proceed(){
}
