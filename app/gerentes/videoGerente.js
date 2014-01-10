var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodosOsVideos = function () {
        return contexto.videos.obterTodos();
    };

    var obterPorTitulo = function (titulo) {
        return contexto.videos.obterPorTitulo(titulo);
    };

    var incluir = function (novoVideo) {
        var videoJahExiste = obterPorTitulo(novoVideo.titulo);

        if (videoJahExiste) {
            throw new Error('Vídeo já existe');            
        } else {
            return contexto.videos.incluir(novoVideo);
        }
    };

    var excluirPorVideoId = function (id) {
        return contexto.videos.excluirPorId(id);
    };

    return {
        obterTodos: obterTodosOsVideos,
        excluirPorId: excluirPorVideoId,
        incluir: incluir
    };
} ();