const socket = io('http://localhost:3000');


socket.on("chat-message", data => {
  console.log(data)
})



/*
let startPage = document.querySelector(".startpage");
let mainDiv = document.querySelector(".maindiv");
let groupChat = document.querySelector("#group");
let indivChat = document.querySelector("#friend");
let messageForm = document.querySelector("#form");
let sendButton = document.querySelector(".send");
let inputSpace = document.querySelector(".inputss")
 
 
 socket.on("connect", () => {
  console.log("Connected to server");
});



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
});

*/



/*
socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
 });
*/






//function proceed(){
//}
