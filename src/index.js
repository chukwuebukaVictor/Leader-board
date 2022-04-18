import './style.css';
import { getScores, postScores } from './modules/api-Call.js';

const displayScores = () => {
  getScores().then((scores) => {
    const newScores = document.querySelector('.new-scores');
    newScores.innerHTML = '';
    scores.result.forEach((el) => {
      const html = `<li>${el.user}: ${el.score}</li>`;
      newScores.insertAdjacentHTML('beforeend', html);
    });
    return scores;
  });
};

const addUserScore = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

const showAlert = (message) => {
  const alert = document.querySelector('.alert');
  alert.appendChild(document.createTextNode(message));
  alert.style.backgroundColor = 'lightGreen';
  setTimeout(() => document.querySelector('.alert').remove(), 2000);
};

addUserScore.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('.name-input').value;
  const scoreInput = +(document.querySelector('.score-input').value);
  if (nameInput && scoreInput && scoreInput >= 0) {
    postScores(nameInput, scoreInput);
    displayScores();
    document.querySelector('.name-input').value = '';
    document.querySelector('.score-input').value = '';
    showAlert('User score added successfully');
  }
});

refresh.addEventListener('click', () => {
  displayScores();
});

window.addEventListener('DOMContentLoaded', () => {
  displayScores();
});

console.log(typeof 2);