const name = document.getElementById('username');
const saveBtn = document.getElementById('saveBtn');
const finalScoreEl = document.getElementById('finalScoreEl');

const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScoreEl.innerHTML = `${mostRecentScore}`;


const highScores = JSON.parse(localStorage.getItem('highScores')) || []; 
const maxHighScores = 5

username.addEventListener('keyup', ()=>{
    saveBtn.disabled = !username.value;
});
saveHighScore = e =>{ 
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b)=>  b.score - a.score)
    highScores.splice(5)
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/pages/highscores.html');
}