const express = require('express');
const path = require('path')
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('home');
});

app.get('/home', (req, res) => {
  res.render('home');
}); 

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/art', (req, res) => {
  res.render('art');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.use((req, res) => {
  res.status(404).render('404');
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});