// Get the modals and buttons
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

// When the user clicks the button, display the corresponding modal
button1.addEventListener('click', () => {
  modal1.style.display = "block";
});

button2.addEventListener('click', () => {
  modal2.style.display = "block";
});

button3.addEventListener('click', () => {
  modal3.style.display = "block";
});

// When the user clicks the close button, hide the modal
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  });
});
