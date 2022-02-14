document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = docum



    fetch("https://statsapi.web.nhl.com/api/v1/schedule/?season=20212022")
    .then(response => response.json())    
    .then(data => console.log(data.dates[0].games[0].teams.away.team.name))
    







})
