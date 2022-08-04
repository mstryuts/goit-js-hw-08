import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime)

const onPlay = ({seconds})=> {

    localStorage.setItem("videoplayer-current-time", seconds);
    
};

player.on('play', onPlay);

