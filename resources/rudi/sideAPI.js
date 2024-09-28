if (typeof player_data === 'undefined' && typeof playerConfigs === 'undefined')
{
    var script = document.querySelector('body > script');
    ParsedFile = script.innerHTML.substring(script.innerHTML.search('file:"') + 6);

    RudiGeneratedConfig = {file: ParsedFile.substring(0,ParsedFile.search('.m3u8') + 5),
                            id: document.querySelector('div').id,
                            autoplay: 1
    };
}
else if (typeof player_data !== 'undefined')
{
    player_data['autoplay'] = 1;
}
else if (typeof playerConfigs !== 'undefined')
{
    playerConfigs['autoplay'] = 1;
}

Playerjs = typeof Playerjs !== 'undefined' ? Playerjs : HDVBPlayer;
const playerObj = new Playerjs(typeof player_data !== 'undefined' ? player_data : typeof playerConfigs !== 'undefined' ? playerConfigs : RudiGeneratedConfig);

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
    if (playerObj.api('playing'))
        return 1;
    else
        return 2;
}