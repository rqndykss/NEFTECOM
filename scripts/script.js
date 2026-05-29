const elements = document.querySelectorAll(
  '.card__wrapper, .azs-anim, .fuel-item, .companies-item, .documents-item, .azs-item'
);

console.log(elements);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting, entry.target);

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0
});

elements.forEach(element => {
  observer.observe(element);
});

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