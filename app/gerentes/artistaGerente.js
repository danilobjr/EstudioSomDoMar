var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodos = function () {
        return contexto.artistas.obterTodos();
    };

    var obterPorNome = function (nome) {
        return contexto.artistas.obterPorNome(nome);
    };

    var obterPorId = function (id) {
        return contexto.artistas.obterPorId(id);
    };

    var incluir = function (novoArtista) {
        var artistaJahExiste = obterPorNome(novoArtista.nome);

        if (artistaJahExiste) {
            throw new Error('Artista já existe');
        } else {

            // propriedades padrão na criação de um novo artista
            novoArtista.imagens = {
                background: {
                    cor: '#ffffff'
                }
            };

            return contexto.artistas.incluir(novoArtista);
        }
    };

    var alterarDadosPessoais = function (artistaAlterado) {
        return contexto.artistas.alterarDadosPessoais(artistaAlterado);
    };

    var alterarNomeArquivoImagemPerfil = function (idArtista, nomeArquivoImagemPerfil) {
        return contexto.artistas.alterarNomeArquivoImagemPerfil(idArtista, nomeArquivoImagemPerfil);
    };

    var alterarBackground = function (idArtista, corDeFundo, nomeArquivoImagemBackground) {

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
        obterPorId: obterPorId,
        incluir: incluir,
        alterarDadosPessoais: alterarDadosPessoais,
        alterarNomeArquivoImagemPerfil: alterarNomeArquivoImagemPerfil,
        excluirPorId: excluirPorId
    };
} ();