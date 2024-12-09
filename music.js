
const songs = [
  {
    title: "Heat Waves",
    artist: "Glass Animal",
    src: "Heat-Waves(Pagal-World.Com.In).mp3",
    cover: "Media.jpg"
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "Perfect-MobCup.vip.mp3",
    cover: "Ed Sheeran.jpg"
  }
];


let currentSongIndex = 0;
const audio = document.getElementById("audio-element");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumCover = document.getElementById("album-cover");

let isPlaying = false;


function loadSong(index) {
  const song = songs[index];
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumCover.src = song.cover;
  audio.src = song.src;
}


function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "Play";
  } else {
    audio.play();
    playBtn.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}


function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audio.play();
}


function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audio.play();
}


playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);


loadSong(currentSongIndex);
