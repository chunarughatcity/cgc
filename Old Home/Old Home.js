document.addEventListener("DOMContentLoaded", function() {
    const bannerImg = document.getElementById('banner-img');
    const bannerInput = document.getElementById('banner-input');
    const newPageBtn = document.getElementById('new-page-btn');
    const newPageBtn1 = document.getElementById('new-page-btn1');
    const newPageBtn2 = document.getElementById('new-page-btn2');
    const newPageBtn3 = document.getElementById('new-page-btn3');
    const newPageBtn4 = document.getElementById('new-page-btn4');
    const newPageBtn5 = document.getElementById('new-page-btn5');
    const clubVideo = document.getElementById('club-video');
    const videoInput = document.getElementById('video-input');

    newPageBtn.addEventListener('click', function() {
        window.location.href = 'Members/index.html';
    });

    newPageBtn1.addEventListener('click', function() {
        window.location.href = 'Players/index.html';
    });

    newPageBtn2.addEventListener('click', function() {
        window.location.href = 'Match/index.html';
    });

    newPageBtn3.addEventListener('click', function() {
        window.location.href = 'Photos/index.html';
    });

    newPageBtn4.addEventListener('click', function() {
        window.location.href = 'Videos/index.html';
    });

    newPageBtn5.addEventListener('click', function() {
        window.location.href = 'Sports/index.html';
    });

    bannerInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                bannerImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    videoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const source = clubVideo.querySelector('source');
                source.src = e.target.result;
                clubVideo.load();
            };
            reader.readAsDataURL(file);
        }
    });
});
function toggleMenu() {
    const menu = document.getElementById('quickAccessMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
