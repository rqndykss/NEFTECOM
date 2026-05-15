const elements = document.querySelectorAll(`.card__wrapper`);


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));


const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const player = document.getElementById("player");

playBtn.addEventListener("click", () => {
  video.play();
});

video.addEventListener("play", () => {
  player.classList.add("playing");
});

video.addEventListener("pause", () => {
  player.classList.remove("playing");
});

video.addEventListener("ended", () => {
  player.classList.remove("playing");
});