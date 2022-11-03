const socket = io();


const userName = new URLSearchParams(window.location.search).get('name');
document.querySelector('#me').innerText = userName;

socket.on('connect', () => {
  // console.log(socket.id);
  socket.emit('new-user', userName);
})