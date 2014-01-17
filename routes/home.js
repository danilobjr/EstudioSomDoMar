var videoGerente = require('./../app/gerentes/videoGerente'),
    artistaGerente = require('./../app/gerentes/artistaGerente');

exports.index = function (req, res) {
    var videos = videoGerente.obterTodos();
    var artistas = artistaGerente.obterTodos();
    
    res.render('index',
        {
            _layoutFile: false,
            viewModel: {
                artistas: artistas,
                videos: videos
            }
        });
};