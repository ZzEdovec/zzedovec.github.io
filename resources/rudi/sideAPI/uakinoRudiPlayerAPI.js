const playerObj = document.querySelector('#oframeplayer > pjsdiv:nth-child(3) > video');

function play()
{
    playerObj.play();
}

function pause()
{
    playerObj.pause();
}

function seekTo(seconds)
{
    playerObj.currentTime = seconds;
}

function getTime()
{
    return playerObj.currentTime;
}

function getDuration()
{
    return playerObj.duration;
}

function setVolume(volume)
{
    playerObj.volume =volume;
}

function getPlayerState()
{
    if (playerObj.error != null)
        return -1;

    if (playerObj.paused)
        return 2;
    else
        return 1;
}