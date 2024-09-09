const player = document.querySelector('#oframeplayer-'+window.videoElement+' > hdvbplayer:nth-child(5) > video');

function play()
{
    player.play();
}

function pause()
{
    player.pause();
}