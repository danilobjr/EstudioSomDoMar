var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodos = function () {
        return contexto.artistas.obterTodos();
    };

    //var obterPorTitulo = function (titulo) {
    //    return contexto.videos.obterPorTitulo(titulo);
    //};

    //var incluir = function (novoVideo) {
    //    var videoJahExiste = obterPorTitulo(novoVideo.titulo);

    //    if (videoJahExiste) {
    //        throw new Error('Vídeo já existe');
    //    } else {
    //        return contexto.videos.incluir(novoVideo);
    //    }
    //};

    //var excluirPorVideoId = function (id) {
    //    var videoExcluido = contexto.videos.excluirPorId(id);

    //    if (!videoExcluido) {
    //        throw new Error('Vídeo já excluído ou não encontrado');
    //    }

    //    return videoExcluido;
    //};

    return {
        obterTodos: obterTodos
        //excluirPorId: excluirPorId,
        //incluir: incluir
    };
} ();