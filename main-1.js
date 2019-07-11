const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  const userInput = inputBox.value;

if (userInput === 'yes') {
    window.location = './passport.html'
}   else{
    window.location = './home.html'
}




}

