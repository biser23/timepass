const express = require('express');
const hora = require('./validarHora');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentHour = new Date().getHours();
  const mensaje = `<h1>Bienvenido.</h1> La hora actual es: ${currentHour}:00`;

  const buttonHtml = `
    <form action="/endroute" method="post">
      <button type="submit">Entrar</button>
    </form>
  `;

  res.send(`${mensaje}<br>${buttonHtml}`);
});

app.post('/endroute', hora, (req, res) => {
  res.send('<h1>Ruta final</h1> Bienvenido a la ruta final');
});

app.listen(port, () => {
  console.log(`Escuchando en el servidor: http://localhost:${port}`);
});