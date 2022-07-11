import * as AS from './ServiceArtigo.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');




app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);	
});

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome!</h1>');
// });

app.get('/', (req, res) => {

    const artigos = AS.getArticle(); 
    res.render('home',{ title: 'Welcome!', artigos});

});

app.get('/artigos/:id', (req, res) => {
    const id = req.params.id;
    const artigo = AS.getArticleById(id);
    console.log(artigo)
    res.render('artigos', { artigo });
    
});