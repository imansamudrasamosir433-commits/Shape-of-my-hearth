const photoList = [
    "https://www.dropbox.com/scl/fi/tt78vwvb8hcl1qbi2zzoi/gambar4.jpg?rlkey=66gthw333mz6ome33rnmiotw4&st=dmpucjta&raw=1",
    "https://www.dropbox.com/scl/fi/ocyzi2w5otqn4ilf7tqlr/gambar2.jpg?rlkey=3pn0e2q7z1uerk9q1fmutyejb&st=7auw7j3w&raw=1",
    "https://www.dropbox.com/scl/fi/q6uwpl387jxbucy8d6ybo/IMG-20260430-WA0045.jpg?rlkey=p55x47dlzj976brhlncf6qxbc&st=tus0sk8i&raw=1",
    "https://www.dropbox.com/scl/fi/qdhga14dnkec1bkonqd88/gambar3.jpg?rlkey=nklf5mt8vo7nplix01zem862a&st=9w0jvs0s&raw=1",
    "https://www.dropbox.com/scl/fi/ahu8xfu3dc3hndms95rpz/gambar5.jpg?rlkey=jjeli9ewpnp7v9kopmoovc39e&st=twml0v93&raw=1"
];

const musicUrl = "https://www.dropbox.com/scl/fi/dodtwrw5xl35g57k64aty/1000x.mp3?rlkey=8q1alfdq0gm160vgxhrbgnj4h&st=t57nkd3j&raw=1";

// Daftar lirik dengan penyesuaian milidetik agar lebih presisi
const lirikLagu = [
    { waktu: 0, teks: "Lalu aku memandangmu dan tersadar" },
    { waktu: 8.5, teks: "Betapa beruntungnya" },
    { waktu: 12.2, teks: "Ada cinta seperti cintamu" },
    { waktu: 15.8, teks: "kepadaku hoo" },
    { waktu: 21.0, teks: "Cukup aku milikmu dan kamu milikku" },
    { waktu: 25.5, teks: "Tetap di sampingku sampai jadi debu" },
    { waktu: 28.2, teks: "Sampai akhir waktu" },
    { waktu: 30.5, teks: "sampai maut yang bersaksi" },
    { waktu: 34.0, teks: "Cintaku abadi" },
    { waktu: 37.5, teks: "Dan bila aku terlahir seribu kali lagi" },
    { waktu: 42.0, teks: "Di dunia yang lain aku tak peduli" },
    { waktu: 47.0, teks: "Kau akan kucari sampai kau tau betapa kau kucintai" },
    { waktu: 63.5, teks: "Seribu kali lagi kau kan kucintai (kau kan kucintai)" },
    { waktu: 73.0, teks: "Cukup aku milikmu kau milikku (tetap disampingku)" },
    { waktu: 81.0, teks: "Sampai jadi debu sampai akhir waktu" },
    { waktu: 89.5, teks: "Hooo kau tetap milikku" },
    { waktu: 99.0, teks: "Detak di jantungku cintaku abadi" },
    { waktu: 113.0, teks: "Seribu kali lagi aku tak peduli" },
    { waktu: 122.0, teks: "Sampai kau tau betapa kau kucintai Hiii" },
    { waktu: 136.0, teks: "Kau akan kucari" }
];

const audio = document.getElementById("audio");
const imgElement = document.getElementById("main-slide");
const lirikElement = document.getElementById("lyrics");
const overlay = document.getElementById("overlay");
const card = document.querySelector(".card");
const btn = document.getElementById("musicBtn");

let index = 0;
let currentLirikIndex = -1;

function mulai() {
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 800);

    audio.src = musicUrl;
    audio.play();

    showContent();
    setInterval(changeContent, 4000);

    // Logika sinkronisasi lirik yang lebih halus
    audio.ontimeupdate = () => {
        const currentTime = audio.currentTime;
        
        // Mencari lirik yang sesuai dengan waktu audio saat ini
        let indexBaru = -1;
        for (let i = 0; i < lirikLagu.length; i++) {
            if (currentTime >= lirikLagu[i].waktu) {
                indexBaru = i;
            }
        }

        // Hanya update jika lirik berubah
        if (indexBaru !== currentLirikIndex && indexBaru !== -1) {
            currentLirikIndex = indexBaru;
            lirikElement.style.opacity = 0;
            setTimeout(() => {
                lirikElement.innerText = lirikLagu[currentLirikIndex].teks;
                lirikElement.style.opacity = 1;
            }, 200);
        }
    };
}

function showContent() {
    imgElement.src = photoList[index];
    imgElement.style.opacity = 1;
}

function changeContent() {
    index = (index + 1) % photoList.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = photoList[index];
        imgElement.style.opacity = 1;
    }, 1000);
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        btn.innerText = "Jeda Musik ⏸️";
    } else {
        audio.pause();
        btn.innerText = "Putar Musik 🎵";
    }
}
