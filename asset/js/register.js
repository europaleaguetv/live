// Redirect URL Register
// Daftar URL untuk berbagai elemen
const urls = {
    loginUrl: "https://six.sportshd1.com/register.php",
    logoUrl: "https://six.sportshd1.com/register.php",
    playPauseUrl: "https://six.sportshd1.com/register.php",
    volumeUpUrl: "https://six.sportshd1.com/register.php",
    fullscreenUrl: "https://six.sportshd1.com/register.php",
    contactUsUrl: "https://six.sportshd1.com/register.php",
    dmcaUrl: "https://six.sportshd1.com/register.php",
    privacyUrl: "https://six.sportshd1.com/register.php"
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
    addNavigationListener("registerButton", "https://six.sportshd1.com/register.php");
    addNavigationListener("startButton", "https://six.sportshd1.com/register.php");
};

// Jalankan fungsi inisialisasi saat dokumen siap
document.addEventListener("DOMContentLoaded", initializeNavigation);
