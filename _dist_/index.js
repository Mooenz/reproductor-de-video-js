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

const showControls = () => CONTENEDOR__VIDEO.classList.toggle("show-controls");

const hiddenControls = () => CONTENEDOR__VIDEO.classList.toggle("show-controls");

function activeControls(ev) {
  const ID = ev.target.id;

  if (ID === "play" || ID === "video" || ID === "pause") {
    VIDEO.paused === true ? VIDEO.play() : VIDEO.pause();

    PLAY.classList.toggle("hidden-icon");
    PAUSE.classList.toggle("show-icon");
  }

  if (ID === "mute" || ID === "nomute") {
    VIDEO.muted === true ? VIDEO.muted = false : VIDEO.muted = true

    MUTE.classList.toggle("hidden-icon");
    NOMUTE.classList.toggle("show-icon");
  }


  if (ID === "loop") {
    VIDEO.loop === true ? VIDEO.loop = false : VIDEO.loop = true

    LOOP.classList.toggle("active");
  }

  if (ID === "expand" || ID === "compress") {
    MAIN__CONTAINER.classList.toggle("expand-video");
    EXPAND.classList.toggle("hidden-icon");
    COMPRESS.classList.toggle("show-icon");
  }
}

async function duration() {
  const DURATION_VIDEO = await Math.floor(VIDEO.duration);
  const MIN_VIDEO = await Math.floor(DURATION_VIDEO / 100);
  const SEC_VIDEO = await Math.floor(DURATION_VIDEO - 200);

  return DURATION.innerHTML = `${MIN_VIDEO}:${SEC_VIDEO}`;
}

function startVideo() {
  CONTENEDOR__VIDEO.addEventListener("mouseover", showControls, false);
  CONTENEDOR__VIDEO.addEventListener("mouseout", hiddenControls, false);
  CONTENEDOR__VIDEO.addEventListener("click", activeControls, false);
  duration();
  
  return console.log("Cargo...");
}

window.addEventListener("load", startVideo, false);
