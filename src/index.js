const MAIN_CONTAINER = document.querySelector('.main-container');
const CONTENEDOR_VIDEO = document.querySelector('.main-container__video');
const VIDEO = document.querySelector('.video');
const PLAY = document.querySelector('.play');
const PAUSE = document.querySelector('.pause');
const MUTE = document.querySelector('.mute');
const NOMUTE = document.querySelector('.nomute');
const LOOP = document.querySelector('.loop');
const EXPAND = document.querySelector('.expand');
const COMPRESS = document.querySelector('.compress');
const DURATION = document.querySelector('.duration');
const TIME = document.querySelector('.time');
const PROGRESS_BAR = document.querySelector('.bar');

const showControls = () => CONTENEDOR_VIDEO.classList.toggle('show-controls');

const hiddenControls = () => CONTENEDOR_VIDEO.classList.toggle('show-controls');

function activeControls(ev) {
  const ID = ev.target.id;

  if (ID === 'play' || ID === 'video' || ID === 'pause') {
    VIDEO.paused === true ? VIDEO.play() : VIDEO.pause();

    PLAY.classList.toggle('hidden-icon');
    PAUSE.classList.toggle('show-icon');
  }

  if (ID === 'mute' || ID === 'nomute') {
    VIDEO.muted === true ? (VIDEO.muted = false) : (VIDEO.muted = true);

    MUTE.classList.toggle('hidden-icon');
    NOMUTE.classList.toggle('show-icon');
  }

  if (ID === 'loop') {
    VIDEO.loop === true ? (VIDEO.loop = false) : (VIDEO.loop = true);

    LOOP.classList.toggle('active');
  }

  if (ID === 'expand' || ID === 'compress') {
    ID === 'compress' ? closeFullscreen() : openFullscreen();

    function openFullscreen() {
      if (VIDEO.requestFullscreen) {
        VIDEO.requestFullscreen();
      } else if (VIDEO.webkitRequestFullscreen) {
        /* Safari */
        VIDEO.webkitRequestFullscreen();
      } else if (VIDEO.msRequestFullscreen) {
        /* IE11 */
        VIDEO.msRequestFullscreen();
      }
    }

    /* Close fullscreen */
    function closeFullscreen() {
      if (document.exitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }

    EXPAND.classList.toggle('hidden-icon');
    COMPRESS.classList.toggle('show-icon');
  }
}

function progressBar() {
  const POSITION = VIDEO.currentTime; // posicion actual
  const POSITION_MAX = VIDEO.duration; // duracion maxima del video
  const POSITION_PERCENTAGE = (POSITION * 100) / POSITION_MAX; //Calculo del progreso en porcentaje
  PROGRESS_BAR.style.width = `${POSITION_PERCENTAGE}%`;
}

function time() {
  const TIME_ACTUAL = VIDEO.currentTime;
  let SEC_VIDEO = Math.floor(TIME_ACTUAL);
  let MIN_VIDEO = 0;

  if (TIME_ACTUAL >= 59) {
    MIN_VIDEO = Math.floor(TIME_ACTUAL / 60);
  }

  let SEC_VIDEO_ACTUAL = SEC_VIDEO - MIN_VIDEO * 60;

  if (SEC_VIDEO_ACTUAL <= 9) {
    SEC_VIDEO_ACTUAL = `0${SEC_VIDEO_ACTUAL}`;
  }

  return (TIME.innerHTML = `${MIN_VIDEO}:${SEC_VIDEO_ACTUAL}`);
}

function duration() {
  const DURATION_VIDEO = Math.floor(VIDEO.duration);
  const MIN_VIDEO = Math.floor(DURATION_VIDEO / 60);
  const SEC_VIDEO = Math.floor(DURATION_VIDEO - MIN_VIDEO * 60);

  return (DURATION.innerHTML = `${MIN_VIDEO}:${SEC_VIDEO}`);
}

// se ejecuta cuando esta funcionado la barra de progreso
VIDEO.ontimeupdate = function () {
  progressBar();
  duration();
  time();
};

function startVideo() {
  CONTENEDOR_VIDEO.addEventListener('mouseover', showControls, false);
  CONTENEDOR_VIDEO.addEventListener('mouseout', hiddenControls, false);
  CONTENEDOR_VIDEO.addEventListener('click', activeControls, false);
}

window.addEventListener('load', startVideo, false);
