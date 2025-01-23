// Bagian Inisialisasi
const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const progressBar = document.querySelector('#progressBar #progressBar1');
const registerButton = document.getElementById('registerButton');
const overlayText = document.getElementById('overlayText');
const timerElement = document.getElementById('timer');
const totalDuration = 2 * 60 * 60;
let elapsedTime = 0;
let countdown = 30;

// Fungsi untuk menyembunyikan elemen overlay dan tombol register
const hideOverlayAndRegisterButton = () => {
    overlayText.style.display = 'none';
    registerButton.style.display = 'none';
};

window.onload = hideOverlayAndRegisterButton;

// Fungsi untuk memperbarui progress bar setiap detik
const updateProgressBar = () => {
    elapsedTime++;
    const percentage = (elapsedTime / totalDuration) * 100;
    progressBar.style.width = `${percentage}%`;
    
    if (elapsedTime < totalDuration) {
        setTimeout(updateProgressBar, 1000);
    }
};

// Fungsi untuk memperbarui timer setiap detik
const updateTimer = () => {
    if (countdown > 0) {
        countdown--;
        timerElement.querySelector('.timer-text').textContent = `00:00:${countdown.toString().padStart(2, '0')}`;
    } else {
        clearInterval(timerInterval);
        overlayText.style.display = 'block';
        registerButton.style.display = 'block';
        timerElement.style.display = 'none';
    }
};

const timerInterval = setInterval(updateTimer, 1000);

// Fungsi untuk mengendalikan tombol Play/Pause
const togglePlayPause = () => {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
};

playPauseButton.addEventListener('click', togglePlayPause);

// Event listener untuk memperbarui progress bar saat video diputar
video.addEventListener('timeupdate', () => {
    if (!video.paused) {
        updateProgressBar();
    }
});
