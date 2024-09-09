const player = document.querySelector('#oframeplayer-'+document.querySelector('body > div').id.substring(7)+' > hdvbplayer > video');

function play()
{
    player.play();
}

function pause()
{
    player.pause();
}