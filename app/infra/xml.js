// requires

var builder = require('xmlbuilder'),
    xml2js = require('xml2js'),
    arquivo = require('./../infra/arquivo'),
    util = require('util');

// variáveis

var pathXmlFile = __dirname + '/../repository/',
    xmlFileName = 'dados.xml',
    xmlParser = new xml2js.Parser({ explicitArray: false });

var corrigirJSONContexto = function (contexto) {
    contexto.paginas = contexto.paginas.pagina;
    contexto.paginas[0].banners = contexto.paginas[0].banners.banner;
    contexto.artistas = contexto.artistas.artista;

    for (var i = 0; i < contexto.artistas.length; i++) {
        //console.log('Musica ' + i + ': ');
        //console.log(contexto.artistas[i].musicas);
        contexto.artistas[i].musicas = contexto.artistas[i].musicas.musica;

        if (!util.isArray(contexto.artistas[i].musicas)) {
            contexto.artistas[i].musicas = [ contexto.artistas[i].musicas ];
        }
    }

    //console.log('corrigirJSONContexto: musicas');
    //console.log(contexto.artistas[0]);
    //console.log(contexto.artistas[1]);

    contexto.videos = contexto.videos.video;
}

var tornarDadosBrutos = function (dados) {

    var dadosBrutos = dados;

    for (var i = 0; i < dados.paginas[0].banners.length; i++) {
        dados.paginas[0].banners[i] = { banner: dados.paginas[0].banners[i] };
    }

    for (var i = 0; i < dados.paginas.length; i++) {
        dados.paginas[i] = { pagina: dados.paginas[i] };
    }

    for (var i = 0; i < dados.artistas.length; i++) {
        dados.artistas[i] = { artista: dados.artistas[i] };
    }

    //console.log('# ANTES: dados.artistas[0].artista.musicas');
    //console.log(dados.artistas[0].artista.musicas);

    for (var i = 0; i < dados.artistas.length; i++) {
        for (var k = 0; k < dados.artistas[i].artista.musicas.length; k++) {
            dados.artistas[i].artista.musicas[k] = { musica: dados.artistas[i].artista.musicas[k] };
        }
    }

    //console.log('# DEPOIS: dados.artistas');
    //console.log(dados.artistas[0].artista.musicas);

    for (var i = 0; i < dados.videos.length; i++) {
        dados.videos[i] = { video: dados.videos[i] };
    }

    return dadosBrutos;
}

exports.criar = function (dados, recriar) {
    var xml = builder.create({ contexto: dados });
    arquivo.criar(pathXmlFile, xmlFileName, xml.toString({ pretty: true }), recriar);
};

exports.salvar = function (contexto) {
    //console.log('# ANTES - dados normais:');
    //console.log(contexto);

    var dadosBrutos = tornarDadosBrutos(contexto);

    //console.log('# DEPOIS - dados brutos:');
    //console.log(dadosBrutos);

    var recriar = true;
    this.criar(dadosBrutos, recriar);
};

exports.obterContexto = function (callback) {
    var contexto = arquivo.obterDados(pathXmlFile, xmlFileName, callback);

    xmlParser.parseString(contexto, function (err, result) {
        contexto = JSON.parse(JSON.stringify(result));
        //console.log('obterContexto():');
        //console.log(contexto.contexto.paginas.pagina[0].banners);
        contexto = contexto.contexto;
    });

    corrigirJSONContexto(contexto);

    return contexto;
};