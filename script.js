// Daftar 5 foto kamu (pastikan file ada di folder yang sama)
const images = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
];

let currentIndex = 0;
const slideElement = document.getElementById("slide");
const song = document.getElementById("mySong");

// Fungsi ganti foto otomatis
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideElement.style.opacity = 0; // Efek fade out
    
    setTimeout(() => {
        slideElement.src = images[currentIndex];
        slideElement.style.opacity = 1; // Efek fade in
    }, 500);
}

setInterval(changeImage, 3000); // Ganti tiap 3 detik

// Fungsi Putar Musik
function togglePlay() {
    if (song.paused) {
        song.play();
        document.getElementById("playBtn").innerText = "Jeda Musik ⏸️";
    } else {
        song.pause();
        document.getElementById("playBtn").innerText = "Mulai Musik 🎵";
    }
}

