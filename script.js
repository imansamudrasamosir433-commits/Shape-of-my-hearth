// 1. Daftar link foto Dropbox (Direct Link)
const photoList = [
    "https://www.dropbox.com/scl/fi/tt78vwvb8hcl1qbi2zzoi/gambar4.jpg?rlkey=66gthw333mz6ome33rnmiotw4&st=dmpucjta&raw=1",
    "https://www.dropbox.com/scl/fi/ocyzi2w5otqn4ilf7tqlr/gambar2.jpg?rlkey=3pn0e2q7z1uerk9q1fmutyejb&st=7auw7j3w&raw=1",
    "https://www.dropbox.com/scl/fi/q6uwpl387jxbucy8d6ybo/IMG-20260430-WA0045.jpg?rlkey=p55x47dlzj976brhlncf6qxbc&st=tus0sk8i&raw=1",
    "https://www.dropbox.com/scl/fi/qdhga14dnkec1bkonqd88/gambar3.jpg?rlkey=nklf5mt8vo7nplix01zem862a&st=9w0jvs0s&raw=1",
    "https://www.dropbox.com/scl/fi/ahu8xfu3dc3hndms95rpz/gambar5.jpg?rlkey=jjeli9ewpnp7v9kopmoovc39e&st=twml0v93&raw=1"
];

// 2. Kumpulan kata-kata ucapan
const quotes = [
    "Terima kasih sudah menjadi bagian dari hariku.",
    "Kamu adalah alasan di balik senyumku hari ini.",
    "Setiap momen bersamamu selalu terasa spesial.",
    "Semoga harimu selalu dipenuhi dengan kebahagiaan.",
    "Terima kasih untuk segalanya, tetaplah jadi dirimu yang hebat."
];

// 3. Link Lagu Ghea Indrawari - 1000X (Direct Link)
const musicUrl = "https://www.dropbox.com/scl/fi/pcz6x2b1rozji1o8gnfft/Ghea-Indrawari-1000X-Official-Visualizer.mp3?rlkey=fyzaod0zjfkk1ci45hi87cc5q&st=kwgwtvir&raw=1";

let index = 0;
const imgElement = document.getElementById("main-slide");
const quoteElement = document.getElementById("quote");
const audio = document.getElementById("audio");
const btn = document.getElementById("musicBtn");

// Setting awal: masukkan sumber lagu & konten pertama
audio.src = musicUrl;
imgElement.src = photoList[0];
quoteElement.innerText = quotes[0];

function changeContent() {
    index = (index + 1) % photoList.length;
    
    // Animasi ganti foto (fade)
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        imgElement.src = photoList[index];
        quoteElement.innerText = quotes[index];
        imgElement.style.opacity = 1;
    }, 1000);
}

// Interval ganti foto setiap 4 detik
setInterval(changeContent, 4000);

// Fungsi kontrol musik
function togglePlay() {
    if (audio.paused) {
        audio.play().catch(e => console.error("Gagal putar musik:", e));
        btn.innerText = "Jeda Musik ⏸️";
    } else {
        audio.pause();
        btn.innerText = "Putar Musik 🎵";
    }
}
