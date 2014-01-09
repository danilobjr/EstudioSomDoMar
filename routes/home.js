var videoGerente = require('./../app/gerentes/videoGerente');

exports.index = function (req, res) {
    var videos = videoGerente.obterTodos();
    console.log(videos);
    res.render('index',
        {
            _layoutFile: false,
            viewModel: {
                videos: videos
            }
        });
};