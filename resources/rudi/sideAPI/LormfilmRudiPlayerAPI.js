const playerObj = document.querySelector('#oframeplayer-'+document.querySelector('body > div').id.substring(7)+' > hdvbplayer > video');

function play()
{
    playerObj.play();
}

function pause()
{
    playerObj.pause();
}