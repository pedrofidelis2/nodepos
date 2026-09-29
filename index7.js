import express from 'express'
const app = express()
app.set('view engine', 'ejs');
app.set('views', './views');

app.get ('/exemplo', (req, res) => {
    const dados = [{ nome: "Carlos", idade: 30 }, 
                   { nome: "Ana", idade: 25 }];
    res.render('exemplo', { pessoas: dados });
});
app.listen(3000);