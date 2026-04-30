// 1. Daftar link Dropbox yang sudah disesuaikan agar bisa tampil langsung
const photoList = [
    "https://www.dropbox.com/scl/fi/tt78vwvb8hcl1qbi2zzoi/gambar4.jpg?rlkey=66gthw333mz6ome33rnmiotw4&st=dmpucjta&raw=1",
    "https://www.dropbox.com/scl/fi/ocyzi2w5otqn4ilf7tqlr/gambar2.jpg?rlkey=3pn0e2q7z1uerk9q1fmutyejb&st=7auw7j3w&raw=1",
    "https://www.dropbox.com/scl/fi/q6uwpl387jxbucy8d6ybo/IMG-20260430-WA0045.jpg?rlkey=p55x47dlzj976brhlncf6qxbc&st=tus0sk8i&raw=1",
    "https://www.dropbox.com/scl/fi/qdhga14dnkec1bkonqd88/gambar3.jpg?rlkey=nklf5mt8vo7nplix01zem862a&st=9w0jvs0s&raw=1",
    "https://www.dropbox.com/scl/fi/ahu8xfu3dc3hndms95rpz/gambar5.jpg?rlkey=jjeli9ewpnp7v9kopmoovc39e&st=twml0v93&raw=1"
];

// 2. Kumpulan kata-kata ucapan (bisa kamu ubah sesukamu)
const quotes = [
    "Terima kasih sudah menjadi bagian dari hariku.",
    "Kamu adalah alasan di balik senyumku hari ini.",
    "Setiap momen bersamamu selalu terasa spesial.",
    "Semoga harimu selalu dipenuhi dengan kebahagiaan.",
    "Terima kasih untuk segalanya, tetaplah jadi dirimu yang hebat."
];

let index = 0;
const imgElement = document.getElementById("main-slide");
const quoteElement = document.getElementById("quote");
const audio = document.getElementById("audio");
const btn = document.getElementById("musicBtn");

// Pastikan gambar pertama langsung muncul saat halaman dibuka
imgElement.src = photoList[0];
quoteElement.innerText = quotes[0];

function changeContent() {
    index = (index + 1) % photoList.length;
    
    // Efek transisi halus (fade out)
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        imgElement.src = photoList[index];
        quoteElement.innerText = quotes[index];
        // Munculkan kembali (fade in)
        imgElement.style.opacity = 1;
    }, 1000);
}

// Ganti konten secara otomatis setiap 4 detik
setInterval(changeContent, 4000);

// Fungsi untuk kontrol musik
function togglePlay() {
    if (audio.paused) {
        audio.play();
        btn.innerText = "Jeda Musik ⏸️";
    } else {
        audio.pause();
        btn.innerText = "Putar Musik 🎵";
    }
}
