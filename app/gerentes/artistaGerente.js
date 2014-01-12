var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodos = function () {
        return contexto.artistas.obterTodos();
    };

    var obterPorNome = function (nome) {
        return contexto.artistas.obterPorNome(nome);
    };

    var incluir = function (novoArtista) {
        var artistaJahExiste = obterPorNome(novoArtista.nome);
        
        if (artistaJahExiste) {
            throw new Error('Artista já existe');
        } else {
            return contexto.artistas.incluir(novoArtista);
        }
    };

    var excluirPorId = function (id) {
        var artistaExcluido = contexto.artistas.excluirPorId(id);

        if (!artistaExcluido) {
            throw new Error('Artista já excluído ou não encontrado');
        }

        return artistaExcluido;
    };

    return {
        obterTodos: obterTodos,
        excluirPorId: excluirPorId,
        incluir: incluir
    };
} ();