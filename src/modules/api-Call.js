
const getScores = async() => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OYKtMRSrWfyHNCTzyiXp/scores/';
    const response = await fetch(url);
    const scores = response.json() 
    return scores;
  }
  
  export const postScores = async(name, points)=> {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OYKtMRSrWfyHNCTzyiXp/scores/';
    const response = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            user: name,
            score: points,
          }),        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const scores = response.json();
    return scores;
  };
  
  export default getScores;
  // export {getScores, postScores};
  