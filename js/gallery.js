/**
 * Renders a gallery page from GALLERY_DATA based on the current page filename.
 * Requires gallery-data.js to be loaded first.
 */
(function () {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var data = GALLERY_DATA[page];
    if (!data) return;

    var container = document.querySelector('.container');

    // Build header
    var header = document.createElement('header');
    header.className = 'clearfix';
    header.innerHTML =
        '<h1>' + data.title + '</h1>' +
        '<nav>' +
            '<a href="' + data.nav.prev.href + '" class="bp-icon bp-icon-prev" data-info="Previous"><span>Previous</span></a>' +
            '<a href="' + data.nav.home.href + '" class="bp-icon bp-icon-drop" data-info="Home"><span>Home</span></a>' +
            '<a href="' + data.nav.next.href + '" class="bp-icon bp-icon-next" data-info="Next"><span>Next</span></a>' +
        '</nav>';
    container.appendChild(header);

    // Build grid gallery
    var galleryDiv = document.createElement('div');
    galleryDiv.id = 'grid-gallery';
    galleryDiv.className = 'grid-gallery';

    // Grid section
    var gridHtml = '<section class="grid-wrap"><ul class="grid">' +
        '<li class="grid-sizer"></li>';

    // Slideshow section
    var slideshowHtml = '<section class="slideshow"><ul>';

    for (var i = 0; i < data.items.length; i++) {
        var item = data.items[i];
        var altText = 'img' + (i + 1 < 10 ? '0' : '') + (i + 1);

        gridHtml +=
            '<li><figure>' +
                '<img src="' + item.thumb + '" alt="' + altText + '"/>' +
                '<figcaption><h3>' + item.title + '</h3><p>' + item.subtitle + '</p></figcaption>' +
            '</figure></li>';

        slideshowHtml +=
            '<li><figure>' +
                '<figcaption><h3>' + item.title + '</h3><p>' + item.description + '</p></figcaption>' +
                '<img src="' + item.image + '" alt="' + altText + '"/>' +
            '</figure></li>';
    }

    gridHtml += '</ul></section>';
    slideshowHtml += '</ul>' +
        '<nav>' +
            '<span class="icon nav-prev"></span>' +
            '<span class="icon nav-next"></span>' +
            '<span class="icon nav-close"></span>' +
        '</nav>' +
        '<div class="info-keys icon">Navigate with arrow keys</div>' +
        '</section>';

    galleryDiv.innerHTML = gridHtml + slideshowHtml;
    container.appendChild(galleryDiv);

    // Initialize gallery
    new CBPGridGallery(galleryDiv);
})();
