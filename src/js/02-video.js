import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

const local = localStorage.getItem('videoplayer-current-time') || 0;

player.on('timeupdate', throttle(currentTime, 1000));
player.setCurrentTime(local);
player.off('timeupdate', currentTime);
