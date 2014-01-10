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

    var excluirPorId = function (id) {
        var artistaExcluido = contexto.artistas.excluirPorId(id);

        if (!artistaExcluido) {
            throw new Error('Artista já excluído ou não encontrado');
        }

        return artistaExcluido;
    };

    return {
        obterTodos: obterTodos,
        excluirPorId: excluirPorId
        //incluir: incluir
    };
} ();