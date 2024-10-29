document.addEventListener('DOMContentLoaded', function() {
    const footballPlayers = [
        { name: 'AFFAN', image: 'AFFAN1.jpg', stats: { Wins: 95, Losses: 20, Goals: 60, Assists: 80, Appearances: 50 } },
        { name: 'SUVO', image: 'player2.jpg', stats: { Wins: 85, Losses: 15, Goals: 70, Assists: 90, Appearances: 45 } }
        // Add more players as needed
    ];

    const freeFirePlayers = [
        { name: 'RAKIB', image: 'RAKIB1.jpg', stats: { Wins: 100, Losses: 50, Damage: 2500, TotalKills: 150, Appearances: 70 } },
        { name: 'SABBIR', image: 'freefire2.jpg', stats: { Wins: 90, Losses: 30, Damage: 3000, TotalKills: 200, Appearances: 65 } }
        // Add more players as needed
    ];

    function createPlayerCard(player, containerId, chartId) {
        const container = document.getElementById(containerId);
        const playerCard = document.createElement('div');
        playerCard.className = 'player';
        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h3>${player.name}</h3>
            <canvas id="${chartId}" width="200" height="200"></canvas>
        `;
        container.appendChild(playerCard);
        return chartId;
    }

    function renderChart(chartId, stats) {
        const ctx = document.getElementById(chartId).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(stats),
                datasets: [{
                    label: 'Stats',
                    data: Object.values(stats),
                    backgroundColor: ['green', 'red', 'blue', 'orange', 'purple']
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    footballPlayers.forEach((player, index) => {
        const chartId = createPlayerCard(player, 'footballGrid', 'footballChart' + index);
        renderChart(chartId, player.stats);
    });

    freeFirePlayers.forEach((player, index) => {
        const chartId = createPlayerCard(player, 'freeFireGrid', 'freeFireChart' + index);
        renderChart(chartId, player.stats);
    });

    // Switch between sections
    window.showSection = function(section) {
        document.getElementById('football').classList.add('hidden');
        document.getElementById('freefire').classList.add('hidden');
        document.getElementById(section).classList.remove('hidden');
    };

    // Media items array (YouTube videos)
    const mediaItems = [
        { title: 'Match Highlight 1', video: 'https://www.youtube.com/embed/your_video_id' },
        { title: 'Match Highlight 2', video: 'https://www.youtube.com/embed/your_video_id_2' }
    ];

    mediaItems.forEach(item => {
        const mediaGrid = document.getElementById('mediaGrid');
        const media = document.createElement('div');
        media.className = 'media-item';
        media.innerHTML = `
            <iframe width="320" height="240" src="${item.video}" frameborder="0" allowfullscreen></iframe>
            <h3>${item.title}</h3>
        `;
        mediaGrid.appendChild(media);
    });

    // Search functionality
    window.searchPlayers = function() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const footballGrid = document.getElementById('footballGrid').getElementsByClassName('player');
        const freeFireGrid = document.getElementById('freeFireGrid').getElementsByClassName('player');

        // Search in Football Players
        Array.from(footballGrid).forEach(player => {
            const playerName = player.getElementsByTagName('h3')[0].textContent.toLowerCase();
            if (playerName.includes(input)) {
                player.style.display = '';
            } else {
                player.style.display = 'none';
            }
        });

        // Search in Free Fire Players
        Array.from(freeFireGrid).forEach(player => {
            const playerName = player.getElementsByTagName('h3')[0].textContent.toLowerCase();
            if (playerName.includes(input)) {
                player.style.display = '';
            } else {
                player.style.display = 'none';
            }
        });
    };

    // Initialize by showing the football section
    showSection('football');
});
function toggleMenu() {
    const menu = document.getElementById('quickAccessMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
