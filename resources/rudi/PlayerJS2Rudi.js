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

function load(id)
{
    playerObj.api('play',id);
}

function getPlayerState()
{
    if (playerObj.api('playing'))
        return 1;
    else
        return 2;
}