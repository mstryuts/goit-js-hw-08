import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";


player.setCurrentTime(localStorage.getItem(STORAGE_KEY))

const whenPlay = ({seconds})=> {

    localStorage.setItem(STORAGE_KEY, seconds); 

};

player.on('timeupdate', throttle(whenPlay, 1000));
