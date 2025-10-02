const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet.hidePoweredBy());
// Usar Helmet para proteger todas las rutas
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hola, tu app está protegida con Helmet.js 🚀');
});

helmet.frameguard({ action: 'deny' })














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
