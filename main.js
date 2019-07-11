const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector('.user-input');
  const userInput = inputBox.value;

  if (userInput === 'east') {
    window.location = './east.html';
  }

  if (userInput === 'north') {
    window.location = './north.html'
  }

  if (userInput === 'west') {
    window.location = './west.html'
  }
}