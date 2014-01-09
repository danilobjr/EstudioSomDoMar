var fileSystem = require("fs");

exports.criar = function (path, nomeArquivo, conteudo, recriar) {
    //fileSystem.readdir(path, function (err, files) {
    //    if (err) {
    //        console.log(err);
    //    } else {
    //        if (files) {
    //            var arquivoJahExiste = false;

    //            for (var i = 0; i < files.length; i++) {
    //                //console.log('Encontrado: ' + files[i] + '; Procurado: ' + nomeArquivo);
    //                if (files[i] === nomeArquivo) {
    //                    arquivoJahExiste = true;
    //                    //console.log('XML já existe!');
    //                }
    //            }

    //            if (!arquivoJahExiste) {
    //                fileSystem.writeFile(path + nomeArquivo, conteudo, function (err) {
    //                    if (err) {
    //                        console.log(err);
    //                    } else {
    //                        console.log("Arquivo criado!");
    //                    }
    //                });
    //            }
    //        }
    //    }
    //});

    var arquivos = fileSystem.readdirSync(path);

    if (arquivos) {
        var arquivoJahExiste = false;

        for (var i = 0; i < arquivos.length; i++) {
            //console.log('Encontrado: ' + files[i] + '; Procurado: ' + nomeArquivo);
            if (arquivos[i] === nomeArquivo) {
                arquivoJahExiste = true;
                //console.log('XML já existe!');
            }
        }

        if (!arquivoJahExiste || recriar) {
            try {
                console.log('LOG # arquivo.js: criando arquivo');
                fileSystem.writeFileSync(path + nomeArquivo, conteudo);
                console.log('LOG # arquivo.js: arquivo criado!');
            } catch (e) {
                console.log(e);
            }
        }
    } else {
        console.log('arquivo.js: Arquivo \'' + nomeArquivo + '\' não encontrado.');
    }
};

exports.obterDados = function (path, nomeArquivo) {
    var resultado = fileSystem.readFileSync(path + nomeArquivo);
    return resultado.toString('utf8');
};

//exports.obterDados = function (path, nomeArquivo, callback) {
//    fileSystem.readFile(path + nomeArquivo, function (err, content) {
//        if (err) {
//            return callback(err);
//        }

//        callback(null, content);
//    });
//};