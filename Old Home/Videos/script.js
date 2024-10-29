// scripts.js

// Define video data
const videos = [
    {
        src: 'https://www.youtube.com/embed/TdaD2bOTOiA?si=prmzsIAcy41SLU-B',
        title: 'Match Highlights',
        description: 'Check out the highlights from our latest match!'
    },
    {
        src: 'https://www.youtube.com/embed/VIDEO_ID_2',
        title: 'Player Interviews',
        description: 'Listen to our players\' thoughts after the game.'
    },
    {
        src: 'https://www.youtube.com/embed/VIDEO_ID_3',
        title: 'Training Session',
        description: 'Watch our team in action during a recent training session.'
    },
    {
        src: 'https://www.youtube.com/embed/VIDEO_ID_4',
        title: 'Fan Reactions',
        description: 'See how our fans reacted to the last match.'
    },
    {
        src: 'https://www.youtube.com/embed/VIDEO_ID_5',
        title: 'Behind the Scenes',
        description: 'Get a behind-the-scenes look at our football club.'
    }
];

// Save video data to local storage
localStorage.setItem('videos', JSON.stringify(videos));

// Function to display videos
function displayVideos(videosToDisplay) {
    const videoGallery = document.querySelector('.video-gallery');
    videoGallery.innerHTML = ''; // Clear existing videos

    videosToDisplay.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        videoContainer.innerHTML = `
            <iframe src="${video.src}" allowfullscreen></iframe>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;

        videoGallery.appendChild(videoContainer);
    });
}

// Function to filter videos based on search input
function filterVideos() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const storedVideos = JSON.parse(localStorage.getItem('videos'));
    const filteredVideos = storedVideos.filter(video =>
        video.title.toLowerCase().includes(searchInput) ||
        video.description.toLowerCase().includes(searchInput)
    );
    displayVideos(filteredVideos);
}

// Call function to display all videos on page load
document.addEventListener('DOMContentLoaded', () => {
    displayVideos(JSON.parse(localStorage.getItem('videos')));

    // Add event listener to the search button
    document.getElementById('search-button').addEventListener('click', filterVideos);

    // Add event listener to search input for real-time search
    document.getElementById('search-input').addEventListener('input', filterVideos);
});
function toggleMenu() {
    const menu = document.getElementById('quickAccessMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
