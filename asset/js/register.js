// Redirect URL Register
// Daftar URL untuk berbagai elemen
const urls = {
    loginUrl: "https://livetv.4k-sports.net/registersoccer.php",
    logoUrl: "https://livetv.4k-sports.net/registersoccer.php",
    playPauseUrl: "https://livetv.4k-sports.net/registersoccer.php",
    volumeUpUrl: "https://livetv.4k-sports.net/registersoccer.php",
    fullscreenUrl: "https://livetv.4k-sports.net/registersoccer.php",
    contactUsUrl: "https://livetv.4k-sports.net/registersoccer.php",
    dmcaUrl: "https://livetv.4k-sports.net/registersoccer.php",
    privacyUrl: "https://livetv.4k-sports.net/registersoccer.php"
};

// Fungsi untuk menetapkan atribut href
const setHrefAttribute = (elementId, url) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.href = url;
    } else {
        console.error(`Element with id ${elementId} not found.`);
    }
};

// Menetapkan href untuk semua elemen
const initializeHrefAttributes = () => {
    setHrefAttribute("loginButton", urls.loginUrl);
    setHrefAttribute("logoLink", urls.logoUrl);
    setHrefAttribute("playPause", urls.playPauseUrl);
    setHrefAttribute("volumeUp", urls.volumeUpUrl);
    setHrefAttribute("fullscreen", urls.fullscreenUrl);
    setHrefAttribute("contactUsLink", urls.contactUsUrl);
    setHrefAttribute("dmcaLink", urls.dmcaUrl);
    setHrefAttribute("privacyLink", urls.privacyUrl);
};

// Jalankan fungsi inisialisasi saat dokumen siap
document.addEventListener("DOMContentLoaded", initializeHrefAttributes);


// Fungsi untuk mengarahkan ke URL tertentu
const navigateTo = (url) => {
    if (typeof url === 'string' && url.startsWith('http')) {
        window.location.href = url;
    } else {
        console.error('Invalid URL:', url);
    }
};

// Fungsi untuk menambahkan pendengar acara
const addNavigationListener = (buttonId, url) => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener("click", () => {
            navigateTo(url);
        });
    } else {
        console.error(`Element with id ${buttonId} not found.`);
    }
};

// Daftarkan pendengar acara untuk tombol REGISTER dan START
const initializeNavigation = () => {
    addNavigationListener("registerButton", "https://livetv.4k-sports.net/registersoccer.php");
    addNavigationListener("startButton", "https://livetv.4k-sports.net/registersoccer.php");
};

// Jalankan fungsi inisialisasi saat dokumen siap
document.addEventListener("DOMContentLoaded", initializeNavigation);
