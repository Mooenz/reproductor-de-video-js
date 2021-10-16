const MAIN__CONTAINER = document.querySelector(".main-container");
const CONTENEDOR__VIDEO = document.querySelector(".main-container__video");
const VIDEO = document.querySelector(".video");
const PLAY = document.querySelector(".play");
const PAUSE = document.querySelector(".pause");
const MUTE = document.querySelector(".mute");
const NOMUTE = document.querySelector(".nomute");
const LOOP = document.querySelector(".loop");
const EXPAND = document.querySelector(".expand");
const COMPRESS = document.querySelector(".compress");
const DURATION = document.querySelector(".duration");

function showControls() {
  CONTENEDOR__VIDEO.classList.add("container-video-show");
}

function hiddenControls() {
  CONTENEDOR__VIDEO.classList.remove("container-video-show");
}

function activeControls(ev) {
  const ID = ev.target.id;

  if (ID === "play" || ID === "video") {
    VIDEO.play();
    PLAY.classList.add("hidden-icon");
    PAUSE.classList.add("show-icon");
  }

  if (ID === "pause") {
    VIDEO.pause();
    PLAY.classList.remove("hidden-icon");
    PAUSE.classList.remove("show-icon");
  }

  if (ID === "mute") {
    VIDEO.muted = true;
    MUTE.classList.add("hidden-icon");
    NOMUTE.classList.add("show-icon");
  }

  if (ID === "nomute") {
    VIDEO.muted = false;
    MUTE.classList.remove("hidden-icon");
    NOMUTE.classList.remove("show-icon");
  }

  if (ID === "loop") {
    if (VIDEO.loop === true) {
      VIDEO.loop = false;
    } else {
      VIDEO.loop = true;
    }
    LOOP.classList.toggle("active");
  }

  if (ID === "expand") {
    MAIN__CONTAINER.classList.add("expand-video");
    EXPAND.classList.add("hidden-icon");
    COMPRESS.classList.add("show-icon");
  }

  if (ID === "compress") {
    MAIN__CONTAINER.classList.remove("expand-video");
    EXPAND.classList.remove("hidden-icon");
    COMPRESS.classList.remove("show-icon");
  }
}

function duration() {
  const DURATION_VIDEO = Math.floor(VIDEO.duration);
  const MIN_VIDEO = Math.floor(DURATION_VIDEO/100);
  console.log(DURATION_VIDEO);
  return `${MIN_VIDEO}:00`;
}

function startVideo() {
  CONTENEDOR__VIDEO.addEventListener("mouseover", showControls, false);
  CONTENEDOR__VIDEO.addEventListener("mouseout", hiddenControls, false);
  CONTENEDOR__VIDEO.addEventListener("click", activeControls, false);
  DURATION.innerHTML = duration();
  return console.log("Cargo...");
}

window.addEventListener("load", startVideo, false);
