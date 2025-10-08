const express = require('express');
const app = express();
const ninetyDaysInSeconds = 90 * 24 * 60 * 60;

app.use(helmet.hidePoweredBy());
// Usar Helmet para proteger todas las rutas
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hola, tu app está protegida con Helmet.js 🚀');
});

app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.ieNoOpen());

app.use(
  helmet.hsts({
    maxAge: ninetyDaysInSeconds,
    force: true
  })
);

app.use(helmet.dnsPrefetchControl({ allow: false }));
app.use(helmet.noCache());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],               // Solo confiar en tu propio dominio por defecto
      scriptSrc: ["'self'", "trusted-cdn.com"]  // Solo scripts de tu dominio y trusted-cdn.com
    }
  })
);

const helmet = require('helmet');
const bcrypt = require('bcrypt');
const plainPassword = 'miContraseñaSegura';
const saltRounds = 12; // nivel de seguridad recomendado

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('Hash generado:', hash);
});






































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
