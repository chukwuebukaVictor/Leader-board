import getScores from './api-Call.js';

const displayScores = () => {
  getScores().then((result) => {
      const newScores = document.querySelector('.new-scores');
      newScores.innerHTML = '';
      console.log(result);
result.result.forEach((user) => {
  const li = document.createElement('li');
  li.innerHTML = `${user.user}: ${user.score}`;
  newScores.appendChild(li);
});
return result;
  })
};

export default displayScores;