const submitButton = document.querySelector('.submit');
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();
  const inputBox = document.querySelector('.user-input');
  const userInput = inputBox.value;
  const noMoney = userInput < 1000;

  if(noMoney) {
      window.location = './broke.html'
  } else{
      window.location = './newyork.html'
  }






}
