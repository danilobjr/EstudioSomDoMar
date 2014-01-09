var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodosOsArtistas = function () {
        return contexto.artistas.obterTodos();
    };

    //var incluir = function (novoVideo) {
    //    return contexto.videos.incluir(novoVideo);
    //};

    //var excluirPorVideoId = function (id) {
    //    return contexto.videos.excluirPorId(id);
    //};

    return {
        obterTodos: obterTodosOsArtistas
        //excluirPorId: excluirPorVideoId,
        //incluir: incluir
    };
} ();