let box = document.getElementById('box');
let message = document.getElementById('message');
let startTime, endTime;

function showBox() {
  setTimeout(() => {
    box.style.display = 'block';
    box.style.backgroundColor = 'green';
    startTime = Date.now();
  }, Math.random() * 3000 + 2000); // 2-5 second delay
}

box.onclick = () => {
  endTime = Date.now();
  let reactionTime = (endTime - startTime) / 1000;
  box.style.display = 'none';
  message.textContent = `Your reaction time: ${reactionTime} seconds`;
  showBox(); // restart the game
};

window.onload = showBox;
