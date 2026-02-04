const Config = {
    serverName: "Jay Development V2 Is The Best",

    playlist: [
        {
            title: "Song Name",
            artist: "Artist Name",
            mp4: "https://r2.fivemanage.com/0I1BKUcAVxmicb4keBlYB/YTDown.com_YouTube_Chuckyy-My-World-Official-Music-Video_Media_4BQZ-YgVGsk_001_1080p.mp4"
        },
        {
            title: "Song Name",
            artist: "Artist Name",
            mp4: "https://r2.fivemanage.com/0I1BKUcAVxmicb4keBlYB/YTDown.com_YouTube_MAF-Teeski-Catch-A-B-Official-Music-Vide_Media_5QIC1dLnRzQ_001_1080p.mp4"
        },
        {
            title: "Song Name",
            artist: "Artist Name",
            mp4: "https://r2.fivemanage.com/0I1BKUcAVxmicb4keBlYB/YTDown.com_YouTube_Cash-Cobain--BunnaB-Hoes-Be-Mad-Officia_Media_vjttylZ5yqM_001_1080p.mp4"
        },
        {
            title: "Song Name",
            artist: "Artist Name",
            mp4: "https://r2.fivemanage.com/0I1BKUcAVxmicb4keBlYB/YTDown.com_YouTube_Lelo-Call-It-Official-Music-Video_Media_z5QV2pxLE1w_001_1080p.mp4"
        }
    ]
};

const video = document.getElementById("bgVideo");
const title = document.getElementById("songTitle");
const artist = document.getElementById("songArtist");

const playPauseBtn = document.getElementById("playPause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const volumeSlider = document.getElementById("volume");

document.getElementById("serverName").textContent = Config.serverName;

let index = 0;
let isPlaying = true;

/* LOAD TRACK */
function loadTrack(i) {
    const track = Config.playlist[i];
    video.src = track.mp4;
    title.textContent = track.title;
    artist.textContent = track.artist;
    video.play();
}

/* PLAY / PAUSE */
playPauseBtn.onclick = () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "⏸";
    } else {
        video.pause();
        playPauseBtn.textContent = "▶";
    }
};

/* NEXT */
nextBtn.onclick = () => {
    index = (index + 1) % Config.playlist.length;
    loadTrack(index);
};

/* PREVIOUS */
prevBtn.onclick = () => {
    index = (index - 1 + Config.playlist.length) % Config.playlist.length;
    loadTrack(index);
};

/* VOLUME */
volumeSlider.value = 0.50;
video.volume = 0.50;

volumeSlider.oninput = (e) => {
    video.volume = e.target.value;
};

/* AUTOPLAY RULES */
video.muted = false;
window.addEventListener("click", () => {
    video.muted = false;
});

/* INIT */
loadTrack(index);

