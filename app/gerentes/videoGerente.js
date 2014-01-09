var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodosOsVideos = function () {
        return contexto.videos.obterTodos();
    };

    var incluir = function (novoVideo) {
        return contexto.videos.incluir(novoVideo);
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