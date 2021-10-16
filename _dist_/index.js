const CONTENEDOR__VIDEO = document.querySelector('.main-container__video');
const VIDEO = document.querySelector('.video');

function showControls() {
  CONTENEDOR__VIDEO.classList.add('container-video-show');
}

function hiddenControls() {
  CONTENEDOR__VIDEO.classList.remove('container-video-show');
}

function activeControls(ev) {
  const ID = ev.target.id;
  
  if (ID === 'play' || ID === 'video') {
    VIDEO.play();
  }

  if (ID === 'pause') {
    VIDEO.pause();
  }

  if (ID === 'mute') {
    VIDEO.muted = true;
  }

  if (ID === 'nomute') {
    VIDEO.muted = false;
  }

}

function startVideo() {
  CONTENEDOR__VIDEO.addEventListener('mouseover', showControls, false);
  CONTENEDOR__VIDEO.addEventListener('mouseout', hiddenControls, false);
  CONTENEDOR__VIDEO.addEventListener('click', activeControls, false);
  return console.log('Cargo...');
}

window.addEventListener('load', startVideo, false);
