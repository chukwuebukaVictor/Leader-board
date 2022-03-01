// import _ from 'lodash';
import './style.css';
import scores from './modules/scores.js';


const displayScores = () =>{
    const newScores = document.querySelector('.new-scores') 
scores.forEach(function(score){
    console.log(score.name);
    const li = document.createElement('li');
    li.innerHTML = `${score.name}: ${score.score}`
    newScores.appendChild(li)
})

}
displayScores()