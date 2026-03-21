/**
 * Music player with SVG filter animation for the index page.
 * Configuration is passed via SITE_CONFIG.
 */
(function () {
    var config = window.SITE_CONFIG || {};
    var playlist = config.playlist || [];
    var startIndex = config.playlistStartIndex || 0;

    var bt = document.getElementById('component-10');
    var btTxt = bt.querySelector('.button__text');
    var isPlaying = true;
    var turbVal = { val: 0.000001 };
    var turbValX = { val: 0.000001 };
    var turb = document.querySelector('#filter-music feTurbulence');

    var btTl = new TimelineLite({
        paused: false,
        onUpdate: function () {
            turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
        },
        onComplete: function () {
            btTl.reverse();
        },
        onReverseComplete: function () {
            btTl.restart();
        }
    });

    btTl.to(turbValX, 0.4, { val: 0.04, ease: Power0.easeNone }, 0);
    btTl.to(turbVal, 0.1, { val: 0.2, ease: Power0.easeNone }, 0);

    var audio = new Audio();
    audio.src = playlist[startIndex];

    // Browsers block autoplay; start paused and let user click to play
    isPlaying = false;
    btTxt.textContent = 'Play';
    btTl.pause();

    var i = startIndex;
    audio.addEventListener('ended', function () {
        i = ++i < playlist.length ? i : 0;
        audio.src = playlist[i];
        audio.play();
    }, true);

    bt.addEventListener('click', function () {
        if (isPlaying) {
            btTxt.textContent = 'Play';
            btTl.pause();
            var btTl2 = new TimelineLite({
                onUpdate: function () {
                    turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
                }
            });
            btTl2.to(turbVal, 0.1, { val: 0.000001 });
            btTl2.to(turbValX, 0.1, { val: 0.000001 }, 0);
            isPlaying = false;
            audio.pause();
        } else {
            btTxt.textContent = 'Pause';
            btTl.play();
            isPlaying = true;
            audio.play();
        }
    });
})();
