const session = require('express-session');
const express = require('express');
const http = require('http');
const uuid = require('uuid');

const WebSocket = require('ws');

const app = express();

const clients = new Map();

let user, staff;

const sessionParser = session({
  saveUninitialized: false,
  secret: '$eCuRiTy',
  resave: false
});

app.use(express.static('public'));
app.use(sessionParser);

app.post('/customer', (req, res) => {
  const id = uuid.v4();

  console.log(`Adding user: ${id}`);

  user = id;

  req.session.userId = id;
  res.send({ message: 'Conection established' });
});

app.post('/staff', (req, res) => {
  const id = uuid.v4();

  console.log(`Adding staff: ${id}`);

  staff = id;

  req.session.userId = id;
  res.send({ message: 'Conection established' });
});

const server = http.createServer(app);

const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

server.on('upgrade', (request, socket, head) => {
  sessionParser(request, {}, () => {
    console.log('Added user');

    wss.handleUpgrade(request, socket, head, ws => {
      wss.emit('connection', ws, request);
    });
  });
});

wss.on('connection', (ws, request) => {
  const id = request.session.userId;

  clients.set(id, ws);

  ws.on('message', message => {
    console.log(`Received message: ${message} from user: ${id}`);

    switch (id) {
    case user:
      clients.get(staff).send('Hello staff, from user!');

    case server:
      clients.get(user).send('Hello user, from staff!');
    }
  });
});

server.listen(8080, () => {
  console.log('Listening on http://localhost:8080');
});
