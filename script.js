const photoList = [
    "https://www.dropbox.com/scl/fi/tt78vwvb8hcl1qbi2zzoi/gambar4.jpg?rlkey=66gthw333mz6ome33rnmiotw4&st=dmpucjta&raw=1",
    "https://www.dropbox.com/scl/fi/ocyzi2w5otqn4ilf7tqlr/gambar2.jpg?rlkey=3pn0e2q7z1uerk9q1fmutyejb&st=7auw7j3w&raw=1",
    "https://www.dropbox.com/scl/fi/q6uwpl387jxbucy8d6ybo/IMG-20260430-WA0045.jpg?rlkey=p55x47dlzj976brhlncf6qxbc&st=tus0sk8i&raw=1",
    "https://www.dropbox.com/scl/fi/qdhga14dnkec1bkonqd88/gambar3.jpg?rlkey=nklf5mt8vo7nplix01zem862a&st=9w0jvs0s&raw=1",
    "https://www.dropbox.com/scl/fi/ahu8xfu3dc3hndms95rpz/gambar5.jpg?rlkey=jjeli9ewpnp7v9kopmoovc39e&st=twml0v93&raw=1"
];

const musicUrl = "https://www.dropbox.com/scl/fi/dodtwrw5xl35g57k64aty/1000x.mp3?rlkey=8q1alfdq0gm160vgxhrbgnj4h&st=t57nkd3j&raw=1";

const lirikLagu = [
    { waktu: 0.0, teks: "Lalu aku memandangmu dan tersadar" },
    { waktu: 7.6, teks: "Betapa beruntungnya" },
    { waktu: 11.3, teks: "Ada cinta seperti cintamu" },
    { waktu: 14.8, teks: "kepadaku hoo" },
    { waktu: 20.0, teks: "Cukup aku milikmu dan kamu milikku" },
    { waktu: 24.6, teks: "Tetap di sampingku sampai jadi debu" },
    { waktu: 27.3, teks: "Sampai akhir waktu" },
    { waktu: 29.5, teks: "sampai maut yang bersaksi" },
    { waktu: 32.7, teks: "Cintaku abadi" },
    { waktu: 36.5, teks: "Dan bila aku terlahir 1000X lagi" },
    { waktu: 40.7, teks: "Di dunia yang lain aku tak peduli" },
    { waktu: 46.3, teks: "Kau akan kucari sampai kau tau betapa kau kucintai" },
    { waktu: 62.6, teks: "1000X lagi kau kan kucintai (kau kan kucintai)" },
    { waktu: 71.8, teks: "Cukup aku milikmu kau milikku (tetap disampingku)" },
    { waktu: 79.8, teks: "Sampai jadi debu sampai akhir waktu" },
    { waktu: 88.6, teks: "Hooo kau tetap milikku" },
    { waktu: 97.8, teks: "Detak di jantungku cintaku abadi" },
    { waktu: 111.6, teks: "1000X lagi aku tak peduli" },
    { waktu: 120.7, teks: "Sampai kau tau betapa kau kucintai Hiii" },
    { waktu: 134.8, teks: "Kau akan kucari" }
];

const audio = document.getElementById("audio");
const imgElement = document.getElementById("main-slide");
const lirikElement = document.getElementById("lyrics");
const overlay = document.getElementById("overlay");
const card = document.querySelector(".card");
const btn = document.getElementById("musicBtn");

let index = 0;
let lastIndex = -1;

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

    audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        let activeIndex = -1;
        for (let i = 0; i < lirikLagu.length; i++) {
            if (currentTime >= lirikLagu[i].waktu) {
                activeIndex = i;
            }
        }
        if (activeIndex !== lastIndex && activeIndex !== -1) {
            lastIndex = activeIndex;
            lirikElement.style.opacity = 0;
            setTimeout(() => {
                lirikElement.innerText = lirikLagu[activeIndex].teks;
                lirikElement.style.opacity = 1;
            }, 150);
        }
    });
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
