// Code your solutions in this file
function writeCards(namesArray, eventName) {
  let messagesArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }

  return messagesArray;
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}


