const socket = io();

const messages = document.querySelector('.messages');
const chatForm = document.querySelector('#chatForm');
const chatMessage = document.querySelector('#chatMessage');
const chatWindow = document.querySelector('.chat-window');
const feedback = document.querySelector('#feedback');
const logoutBtn = document.querySelector('#logout');


const userName = new URLSearchParams(window.location.search).get('name');
document.querySelector('#me').innerText = userName;

socket.on('connect', () => {
  socket.emit('new-connection', userName);
})

socket.on('user', message => {
  //  messages.innerHTML += `<p class="inline-feedback">${DOMPurify.sanitize(userName)} has entered the chat</p>`
  const inlineFeedback = document.createElement('p');
  inlineFeedback.classList = 'inline-feedback';
  inlineFeedback.innerText = message
  
  messages.appendChild(inlineFeedback);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  })


socket.on('new-message', data => {

  const message = document.createElement('div');
  message.classList = 'single-message';
   if(data.id === socket.id) {
    message.classList.add('right');
   }

  const name = document.createElement('p');
  name.classList = 'single-message_name';
  name.innerText = data.name;

  const messageText = document.createElement('p');
  messageText.classList = 'single-message_msg';
  messageText.innerText = data.message;

  message.appendChild(name);
  message.appendChild(messageText);

  messages.appendChild(message);

  feedback.innerText = ''
  feedback.classList.add('d-none');
  chatWindow.scrollTop = chatWindow.scrollHeight;

})


socket.on('typing', name => {
  feedback.innerText = `${name} is typing a message...`
  feedback.classList.remove('d-none');
})

const submitHandler = e => {
  e.preventDefault()
  if(chatMessage.value.trim() !== '') {
    socket.emit('message', {
      id: socket.id,
      message: chatMessage.value,
      name: userName
    })
  }
  chatMessage.value = '';
  chatMessage.focus();
}

chatForm.addEventListener('submit', submitHandler);

chatMessage.addEventListener('keypress', () => {
  socket.emit('typing', userName);
})

logoutBtn.addEventListener('click', () => {
  socket.emit('manual-logout')
})