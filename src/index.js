import './style.css';
import displayScores from './modules/DOM.js';
import postScores from './modules/api-Call.js';
 

const addUserScore = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

addUserScore.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nameInput = document.querySelector('.name-input').value;
    const scoreInput = +document.querySelector('.score-input').value;
    if (nameInput && scoreInput) {
      postScores(nameInput, scoreInput);
     displayScores();
     document.querySelector('.name-input').value 
     = document.querySelector('.score-input').value ='';
    }
  });

  refresh.addEventListener('click',(e) => {
      displayScores();
  })