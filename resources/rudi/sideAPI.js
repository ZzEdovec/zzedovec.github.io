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