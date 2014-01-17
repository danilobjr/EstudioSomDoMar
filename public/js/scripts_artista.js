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

            return {
                prepareScrollables: prepareScrollables,
                configureSongPlayer: configureSongPlayer,
                switchCdCover: switchCdCover
            }

        }();

        // Running App Function

        window.app.prepareScrollables();
        window.app.configureSongPlayer();
        $('.song').on('click', window.app.switchCdCover);

    });

})(jQuery);