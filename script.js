const button = document.getElementById("mainButton");
const message = document.getElementById("message");

const changeMessage = () => {
  message.textContent = "A new message";
};

button.addEventListener("click", changeMessage);
