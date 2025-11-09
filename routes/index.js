var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const items = [
	  { id: 1, nombre: 'Mewtwo', url: "/images/Mewtwo.jfif" },
	  { id: 2, nombre: 'Mew', url: "/images/mew.jfif" },
	  { id: 3, nombre: 'Lucario', url: "/images/lucario.jfif" },
	  { id: 4, nombre: 'Samurott', url: "/images/samurott.jfif" },
	  { id: 5, nombre: 'Charizard', url: "/images/charizard.jfif" }
  ];

  res.render('index', {
	  title: 'Mis 5 Pokemon favoritos',
	  items: items
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Iniciar sesión' });
});

router.post('/login', function(req, res, next) {
  const user = req.body.username;
  const pass = req.body.password;
  res.send('Login recibido de ' + user);
});

module.exports = router;
