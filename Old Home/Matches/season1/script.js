// Sample initial matches
let matches = [

    { number: 18, opponentName: "FC Toxic Boys Team", date: "2024-11-22", score: " 0-1 ", result: "lost" },
    { number: 17, opponentName: "Kalishiri FC", date: "2024-11-18", score: " 5-0 / Goal - Shuvo'14'19'31pen Affan'38 Joy'50 / Assit-Jakariya'14 Sabbir'38 Affan'50 / MOTM - Shuvo", result: "won" },
    { number: 16, opponentName: "Dewor Gac FC", date: "2024-11-15", score: " 1-0 / Goal - Sabbir'16/ Assit-Raju'16/ MOTM - Sabbir", result: "won" },
    { number: 15, opponentName: "Balla Road FC", date: "2024-10-03", score: " 5-1 / Goal - Nasir'9 Joy'17'40 Najim'30 Jakariya'55 / Assit-Sabbir'9 Najim'17'55 Shahin'30'40 / MOTM - Najim", result: "won" },
    { number: 14, opponentName: "United Uttar Bazar", date: "2024-10-02", score: " 1-1 / Goal - Joy'23 / MOTM - Anthor", result: "draw" },
    { number: 13, opponentName: "United Uttar Bazar", date: "2024-09-09", score: " 4-0 / Goal - Sabbir'17 Raju'25 Najim'26'57 / Assist - Joy'17 Raju'26 Sabbir'57 / MOTM - Najim", result: "won" },
    { number: 12, opponentName: "Amkandi FC - MiniBar", date: "2024-09-08", score: " 1-1 / Goal - Raju'64 / Assist - Jakariya'64 / MOTM - Raju", result: "draw" },
    { number: 11, opponentName: "United Uttar Bazar", date: "2024-08-30", score: " 1-1 / Goal - Joy'12 / Assist - Affan'12", result: "draw" },
    { number: 10, opponentName: "Toxic Boys Team", date: "2024-08-22", score: " 2-7 / Goal - Sabbir'41'pen Jabir'47", result: "lost" },
    { number: 9, opponentName: "Ranigaon Platon Club", date: "2024-08-17", score: " 1-1 / Pen - 2-4 / Goal - Joy'29 Shurob'pen Jakir'pen / MOTM - Joy", result: "lost" },
    { number: 8, opponentName: "ARG vs BRA Won - ARG", date: "2024-08-15", score: " 4-3 / ARG Goal - Affan'13 Sani'39 Nasir'61 Raju'85 BRA Goal - Unkhown'66 Sujon'72 Tuhin'80'pen / MOTM - Affan", result: "won" },
    { number: 7, opponentName: "Dudhpatil Sporting Club", date: "2024-08-14", score: " 0-0 / MOTM - Shahin", result: "draw" },
    { number: 6, opponentName: "ARG vs BRA Won - ARG", date: "2024-07-13", score: " 2-1 / ARG Goal - Sabbir'1 Arif'56 BRA Goal - Jakariya'40 Own / Assist - Mujammil'56 / MOTM - Sabbir", result: "won" },
    { number: 5, opponentName: "Chondona Junior FC - MiniBar", date: "2024-05-19", score: " 1-0 / Goal - Joy'56 / Assist - Najim'56 / MOTM - Joy", result: "won" },
    { number: 4, opponentName: "Young Star Club- MiniBar", date: "2024-05-21", score: " 1-1 / Pen - 2-1 / Goal - Sabbir'24 'Pen Shajan'Pen / Assist - / MOTM - Sabbir", result: "won" },
    { number: 3, opponentName: "Dokkhin Norpoti FC - MiniBar", date: "2024-02-29", score: " 1-1 / Pen - 2-0 / Goal - Sabbir'26 'Pen Raju'Pen / Assist - Najim'26 / MOTM - Sabbir", result: "won" },
    { number: 2, opponentName: "YoungStar Club", date: "2024-01-12", score: " 1-1 / Goal - Sabbir'51 / Assist - Najim'51 / MOTM - Riyad", result: "draw" },
    { number: 1, opponentName: "Amkandi FC - MiniBar", date: "2024-01-6", score: " 2-6 / Goal - Dipu'32 Affan'58 / Assist - Affan'32 / MOTM - Dipu", result: "lost" },

];

let nextMatchNumber = matches.length + 1; // To keep track of the next match number

// Function to display matches
function displayMatches(filteredMatches = matches) {
    const matchesSection = document.getElementById('matches');
    matchesSection.innerHTML = '';

    filteredMatches.forEach(match => {
        const matchDetails = document.createElement('div');
        matchDetails.classList.add('match-details');
        matchDetails.classList.add(match.result); // Add result class for styling

        matchDetails.innerHTML = `
            <h3>Match ${match.number}</h3>
            <p>Opponent: <span id="opponent-${match.number}">${match.opponentName}</span></p>
            <p>Date: <span id="date-${match.number}">${match.date}</span></p>
            <p>Score: <span id="score-${match.number}">${match.score}</span></p>
            <p>Result: <span id="result-${match.number}">${match.result}</span></p>
        `;

        matchesSection.appendChild(matchDetails);
    });

    updateMatchStats(filteredMatches);
}

// Function to update match statistics
function updateMatchStats(filteredMatches = matches) {
    const stats = {
        won: filteredMatches.filter(m => m.result === 'won').length,
        lost: filteredMatches.filter(m => m.result === 'lost').length,
        draw: filteredMatches.filter(m => m.result === 'draw').length
    };

    const statsContainer = document.getElementById('matchStats');
    statsContainer.innerHTML = `
        <p style="color: #00ff00;">Matches Won: ${stats.won}</p>
        <p style="color: #ff0000;">Matches Lost: ${stats.lost}</p>
        <p style="color: #ffff00;">Matches Draw: ${stats.draw}</p>
    `;
}

// Function to search matches
function searchMatches() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultFilter = document.getElementById('resultFilter').value;

    let filteredMatches = matches;

    if (searchInput) {
        filteredMatches = filteredMatches.filter(match => match.opponentName.toLowerCase().includes(searchInput));
    }

    if (resultFilter !== 'all') {
        filteredMatches = filteredMatches.filter(match => match.result === resultFilter);
    }

    displayMatches(filteredMatches);
}

// Initial call to display matches
displayMatches();
function toggleMenu() {
    const menu = document.getElementById('quickAccessMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
