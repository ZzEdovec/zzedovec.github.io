const playerObj = new Playerjs({id:"player"});

function play()
{
    playerObj.api('play');
}

function pause()
{
    playerObj.api('pause');
}

function seekTo(seconds)
{
    playerObj.api('seek',seconds);
}

function getTime()
{
    return playerObj.api('time');
}

function getDuration()
{
    return playerObj.api('duration');
}

function setVolume(volume)
{
    playerObj.api('volume',volume);
}

function getPlayerState()
{
    if (document.querySelector('#oframeplayer > pjsdiv:nth-child(3) > video').error != null)
        return -1;

    if (playerObj.api('playing'))
        return 2;
    else
        return 1;
}