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
    window.location = './north.html';
  }

  if (userInput === 'west') {
    window.location = './west.html';
  }

  if (userInput === 'south') {
    window.location = './south.html'
  }

  // const notEnoughMoney = userInput < 100;

  // // // let goHome;
  // if (notEnoughMoney) {
  //   window.location = './home.html';
  // }   
  // //  const h1 = document.querySelector('.result')
  // // h1.innerText = goHome;

  // if (userInput === 'yes') {
  //   window.location = './money.html';
  // }// } else{
  // //   window.location = './home.html';
  // // }

}