import './style.css';
import { getScores, postScores } from './modules/api-Call.js';

const displayScores = () => {
  getScores().then((scores) => {
    const newScores = document.querySelector('.new-scores');
    newScores.innerHTML = '';
    scores.result.forEach((el) => {
      const li = document.createElement('li');
      li.textContent = `${el.user}: ${el.score}`;
      newScores.appendChild(li);
    });
    return scores;
  });
};

const addUserScore = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

addUserScore.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('.name-input').value;
  const scoreInput = document.querySelector('.score-input').value;
  if (nameInput && scoreInput) {
    postScores(nameInput, scoreInput);
    displayScores();
    document.querySelector('.name-input').value = '';
    document.querySelector('.score-input').value = '';
  }
});

refresh.addEventListener('click', () => {
  displayScores();
});