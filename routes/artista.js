var artistaGerente = require('./../app/gerentes/artistaGerente'),
    util = require('util');

exports.index = function (req, res) {
    var artistas = artistaGerente.obterTodos();
    res.render('artistaIndex', { viewModel: artistas });
};

exports.novo = function (req, res) {
    res.render('artistaNovo');
};

exports.incluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    console.log('POST: ');
    console.log(req.body);

    try {
        var novoArtista = {
            nome: req.body.nome,
            site: req.body.site,
            email: req.body.email,
            telefones: [],
            redesSociais: []
        };

        if (util.isArray(req.body.telefone)) {
            var telefones = req.body.telefone;
            var tiposTelefone = req.body.tipoTelefone;
            for (var i = 0; i < telefones.length; i++) {
                novoArtista.telefones.push({
                    numero: telefones[i],
                    tipo: tiposTelefone[i]
                });
            }
        } else {
            novoArtista.telefones.push({
                numero: req.body.telefone,
                tipo: req.body.tipoTelefone
            });
        }

        if (util.isArray(req.body.redeSocial)) {
            var redesSociais = req.body.redeSocial;
            var tiposRedeSocial = req.body.tipoRedeSocial;
            for (var i = 0; i < redesSociais.length; i++) {
                novoArtista.redesSociais.push({
                    link: redesSociais[i],
                    tipo: tiposRedeSocial[i]
                });
            }
        } else {
            novoArtista.redesSociais.push({
                link: req.body.redeSocial,
                tipo: req.body.tipoRedeSocial
            });
        }

        console.log('Novo Artista: ');
        console.log(novoArtista);

        //var videoCriado = artistaGerente.incluir(novoVideo);
        resultado.sucesso = true;
        resultado.mensagem = 'Artista incluído com sucesso';
        //'Vídeo <b>' + videoExcluido.titulo + '</b> incluído com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao incluir artista: ' + error;
    }

    var artistas = artistaGerente.obterTodos();

    res.render('artistaIndex', { viewModel: artistas, resultado: resultado });
};

exports.excluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        var artistaExcluido = artistaGerente.excluirPorId(req.params.id);

        resultado.sucesso = true;
        resultado.mensagem = 'Artista excluído com sucesso';
        //'Artista <b>' + artistaExcluido.nome + '</b> excluído com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao excluir artista: ' + error;
    }

    var artistas = artistaGerente.obterTodos();

    res.render('artistaIndex', { viewModel: artistas, resultado: resultado });
};