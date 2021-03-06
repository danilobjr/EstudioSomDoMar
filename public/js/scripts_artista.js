(function ($) {

    $(function () {

        // Main App function

        window.app = function () {

            var prepareScrollables = function () {
                $('.scrollable').mCustomScrollbar();
            };

            var configureSongPlayer = function () {
                $('#player').html5Audio({ songSources: '.song' });
            };

            var switchCdCover = function (e) {
                var currentTarget = $(e.currentTarget);

                var cdCoverImagePath = currentTarget.attr('data-h5a-cover-url');

                if (!currentTarget.hasClass('h5aSourcePaused')) {
                    console.log('switch');
                    var currentImage = $('.albums img');
                    var currentPath = currentImage.attr('src');

                    if (cdCoverImagePath !== currentPath) {
                        var callback = function () {
                            currentImage.attr('src', cdCoverImagePath);
                        };

                        currentImage.fadeOut(200, callback).delay(100).fadeIn(200);
                    }
                }
            };

            var caseUpFirstLetter = function (elements) {
                elements.each(function (i, obj) {
                    var _this = $(obj);
                    var palavraComPrimeiraLetraMaiuscula = _this.text().toLowerCase().replace(/\b[a-z]/g, function (letra) {
                        return letra.toUpperCase();
                    });
                    _this.text(palavraComPrimeiraLetraMaiuscula);
                });
            };

            var checkExistHttpInHref = function (sentenca) {
                if (sentenca.indexOf('http://') <= 0) {
                    return false;
                }

                return true;
            };

            var putHttpInHref = function (element) {
                if (!checkExistHttpInHref(element.attr('href'))) {
                    element.attr('href', 'http://' + element.attr('href'));
                }
            };

            return {
                prepareScrollables: prepareScrollables,
                configureSongPlayer: configureSongPlayer,
                switchCdCover: switchCdCover,
                caseUpFirstLetter: caseUpFirstLetter,
                putHttpInHref: putHttpInHref
            }

        } ();

        // Running App Function

        window.app.prepareScrollables();
        window.app.configureSongPlayer();
        $('.song').on('click', window.app.switchCdCover);
        window.app.caseUpFirstLetter($('section footer > div > span:first-child'));
        if ($('.site').length) {
            window.app.putHttpInHref($('.site'));
        }
    });

})(jQuery);