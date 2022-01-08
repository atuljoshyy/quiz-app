const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) ||[];
const clearScoreBtn = document.getElementById("clearScoreBtn");

clearScoreBtn.addEventListener("click", function(){
    confirm("Are you sure you want to clear your high scores?");
    localStorage.clear();
    window.location.reload();
})
highScores.map( score=>{
    highScoresList.innerHTML += `<li>${score.name}: ${score.score}</li>`;
})