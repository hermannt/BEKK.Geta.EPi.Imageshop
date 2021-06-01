﻿(function (d) {
    var setupPlayer = function (playerEl) {
        var options = JSON.parse(playerEl.getAttribute('data-jwplayer'));

        // Create the player instance.
        var player = jwplayer(playerEl.getAttribute('id'));

        // Create sources array based on JSON data on HTML element.
        options.sources = [];

        for (var j = 0; j < options.videos.length; j++) {
            var video = options.videos[j];

            options.sources.push({
                'file': video.fullFile,
                'label': video.label
            });
        }

        player.setup({
            'image': options.thumb,
            'title': options.title,
            'description': options.description,
            'mediaid': options.mediaid,
            'sources': options.sources
        });
    };

    var setupPlayers = function () {
        var jwPlayerElements = d.querySelectorAll('[data-jwplayer]');

        for (var i = 0; i < jwPlayerElements.length; i++) {
            setupPlayer(jwPlayerElements[i]);
        }
    };

    if (typeof (jwplayer) !== 'undefined') {
        return;
    }

    var s = d.createElement('script');
    s.id = 'jwplayer-script';
    s.async = true;
    s.onload = setupPlayers;
    s.src = '/scripts/jwplayer.js';
    d.body.appendChild(s);
})(document);