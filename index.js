let team1ScoreEl = document.getElementById('team-1-score')
let team1Score = 0

let team2ScoreEl = document.getElementById('team-2-score')
let team2Score = 0

function add1PointTeam1() {
    team1Score += 1
    team1ScoreEl.textContent = team1Score
}

function add2PointsTeam1() {
    team1Score += 2
    team1ScoreEl.textContent = team1Score
}

function add3PointsTeam1() {
    team1Score += 3
    team1ScoreEl.textContent = team1Score
}

function add1PointTeam2() {
    team2Score += 1
    team2ScoreEl.textContent = team2Score
}

function add2PointsTeam2() {
    team2Score += 2
    team2ScoreEl.textContent = team2Score
}

function add3PointsTeam2() {
    team2Score += 3
    team2ScoreEl.textContent = team2Score
}

function newGame() {
    team1Score = 0
    team2Score = 0
    team1ScoreEl.textContent = 0
    team2ScoreEl.textContent = 0
}