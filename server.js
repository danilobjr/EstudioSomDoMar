var express = require('express'),
    engine = require('ejs-locals'),
    http = require('http'),
    path = require('path'),
    home = require('./routes/home'),
    admin = require('./routes/admin'),
    video = require('./routes/video'),
    artista = require('./routes/artista');

var app = express();

app.configure(function () {
    app.engine('ejs', engine);
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    //app.set('view options', { layout: '/views/layout.ejs' });
    app.locals({ _layoutFile: true });
    app.use(express.favicon());
    //app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// routes

app.get('/', home.index);
app.get('/admin', admin.index);
app.get('/admin/videos', video.index);
app.get('/admin/video/novo', video.novo);
app.get('/admin/artistas', artista.index);
app.get('/admin/artista/novo', artista.novo);
app.get('/admin/artista/alterar/:id', artista.editar);

// actions

app.post('/admin/video/novo', video.incluir);
app.get('/admin/video/excluir/:id', video.excluir);
app.post('/admin/artista/novo', artista.incluir);
app.post('/admin/artista/alterar/dados-pessoais', artista.alterarDadosPessoais);
//app.post('/admin/artista/alterar/musicas', artista.alterarMusicas);
app.post('/admin/artista/alterar/imagem-perfil', artista.alterarImagemPerfil);
app.post('/admin/artista/alterar/background', artista.alterarBackground);
app.get('/admin/artista/excluir/:id', artista.excluir);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
