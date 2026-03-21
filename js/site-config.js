/**
 * Centralized site configuration.
 * Social links, music playlist, and other shared settings.
 */
var SITE_CONFIG = {
    socialLinks: [
        { href: "https://www.facebook.com/young.lee.3701779", icon: "icon/fb.png" },
        { href: "https://github.com/RadiumP", icon: "icon/github.png" },
        { href: "https://www.linkedin.com/in/chenyang-li-9141a7112", icon: "icon/in.png" },
        { href: "https://www.pinterest.com/atychip/", icon: "icon/pin.png" },
        { href: "https://www.instagram.com/atychip", icon: "icon/insta.png" }
    ],

    playlist: [
        "music/Too Bad.mp3",
        "music/Actor.mp3",
        "music/Me, Myself & I.mp3",
        "music/pop.mp3"
    ],
    playlistStartIndex: 3
};

// Render social links if the container exists
(function () {
    var container = document.getElementById('social-links');
    if (!container) return;

    var html = '';
    for (var i = 0; i < SITE_CONFIG.socialLinks.length; i++) {
        var link = SITE_CONFIG.socialLinks[i];
        html += '<li><a href="' + link.href + '"><img src="' + link.icon + '"></a></li>';
    }
    container.innerHTML = html;
})();
