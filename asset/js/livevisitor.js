// Inisialisasi elemen dan jumlah pengunjung
const visitorElement = document.querySelector('.visitor-online');
let visitorNumber = localStorage.getItem('visitorNumber') ? parseInt(localStorage.getItem('visitorNumber')) : 1945;

// Fungsi untuk menampilkan jumlah pengunjung
const updateVisitorDisplay = () => {
    visitorElement.textContent = visitorNumber.toLocaleString();
};

// Tampilkan jumlah pengunjung awal
updateVisitorDisplay();

// Fungsi untuk memperbarui jumlah pengunjung
const updateVisitorNumber = () => {
    const randomFactor = Math.random();
    let change;

    if (randomFactor < 0.1) {
        change = Math.floor(Math.random() * 201 - 100);
    } else if (randomFactor < 0.3) {
        change = Math.floor(Math.random() * 51 - 25);
    } else {
        change = Math.floor(Math.random() * 6 - 3);
    }

    // Batasi jumlah pengunjung
    visitorNumber = Math.max(1945, Math.min(visitorNumber + change, 3943));

    // Simpan jumlah pengunjung saat ini
    localStorage.setItem('visitorNumber', visitorNumber);

    // Perbarui tampilan jumlah pengunjung
    updateVisitorDisplay();
};

// Jalankan pembaruan setiap detik
setInterval(updateVisitorNumber, 1000);
