if (typeof player_data === 'undefined' && typeof playerConfigs === 'undefined')
{
    var script = document.querySelector('body > script');
    ParsedFile = script.innerHTML.substring(script.innerHTML.search('file:"') + 6);

    RudiGeneratedConfig = {file: ParsedFile.substring(0,ParsedFile.search('.m3u8') + 5),
                            id: document.querySelector('div').id,
                            autoplay: 1,
                            controls: 0
    };
}
else if (typeof player_data !== 'undefined')
{
    player_data['autoplay'] = 1;
    player_data['controls'] = 0;
    delete player_data['rek'];
}
else if (typeof playerConfigs !== 'undefined')
{
    playerConfigs['autoplay'] = 1;
    playerConfigs['controls'] = 0;
    delete playerConfigs['rek'];
}

Playerjs = typeof Playerjs !== 'undefined' ? Playerjs : HDVBPlayer;
const playerObj = new Playerjs(typeof player_data !== 'undefined' ? player_data : typeof playerConfigs !== 'undefined' ? playerConfigs : RudiGeneratedConfig);