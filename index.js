let nhlData;

document.addEventListener('DOMContentLoaded', () => {


    const nhlTeams = ["Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils", "New York Islanders", "New York Rangers", "Philadelphia Flyers", "Pittsburgh Penguins", "Washington Capitals", "Boston Bruins", "Buffalo Sabres", "Detroit Red Wings", "Florida Panthers", "Montréal Canadiens", "Ottawa Senators", "Tampa Bay Lightning", "Toronto Maple Leafs", "Arizona Coyotes", "Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Minnesota Wild", "Nashville Predators", "St. Louis Blues", "Winnipeg Jets", "Anaheim Ducks", "Calgary Flames", "Edmonton Oilers", "Los Angeles Kings", "San Jose Sharks", "Seattle Kraken", "Vancouver Canucks", "Vegas Golden Knights"]
    const poll = document.querySelector('#poll')
    const teamList = document.querySelector('#team-list')
    const getSchedule = document.getElementById('get-schedule')


    fetch("https://statsapi.web.nhl.com/api/v1/schedule/?season=20212022")
        .then(response => response.json())
        .then(data => nhlData = data)

    // (data.dates[0].games[0].teams.away.team.name

    getSchedule.addEventListener('submit', (e) => {
        e.preventDefault();

    })

    

    nhlTeams.forEach(element => addInfo(element))

    function addInfo(nhlTeam) {

        let teamName = document.createElement('li')
        teamName.textContent = nhlTeam
        let numberOfLikes = document.createElement('span')
        numberOfLikes.textContent = "0"

        let likeBtn = document.createElement('button')
        likeBtn.textContent = "Vote"

        teamList.append(teamName)
        teamName.append(likeBtn)
        teamName.append(numberOfLikes)

        likeBtn.addEventListener('click', () => {
            ++numberOfLikes.textContent
        })

    }

})