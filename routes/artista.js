var artistaGerente = require('./../app/gerentes/artistaGerente');

exports.index = function (req, res) {
    var artistas = artistaGerente.obterTodos();
    res.render('artistaIndex', { viewModel: artistas });
};

//exports.novo = function (req, res) {
//    res.render('videoNovo');
//};

//exports.incluir = function (req, res) {
//    var resultado = { sucesso: false, mensagem: '' };

//    try {
//        var novoVideo = {
//            titulo: req.body.titulo,
//            url: req.body.url
//        };
//        var videoCriado = artistaGerente.incluir(novoVideo);
//        resultado.sucesso = true;
//        resultado.mensagem = 'Vídeo incluído com sucesso';
//        //'Vídeo <b>' + videoExcluido.titulo + '</b> incluído com sucesso';
//    } catch (error) {
//        resultado.mensagem = 'Erro ao incluir vídeo: ' + error;
//    }

//    var videos = artistaGerente.obterTodos();

//    res.render('videoIndex', { viewModel: videos, resultado: resultado });
//};

//exports.excluir = function (req, res) {
//    var resultado = { sucesso: false, mensagem: '' };
//    var videos = [];

//    try {
//        var videoExcluido = artistaGerente.excluirPorId(req.params.id);

//        resultado.sucesso = true;
//        resultado.mensagem = 'Vídeo excluído com sucesso';
//        //'Vídeo <b>' + videoExcluido.titulo + '</b> excluído com sucesso';
//    } catch (error) {
//        resultado.mensagem = 'Erro ao excluir vídeo: ' + error;
//    }

//    videos = artistaGerente.obterTodos();

//    res.render('videoIndex', { viewModel: videos, resultado: resultado });
//};