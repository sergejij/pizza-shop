const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./public/pizzas.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.port || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running');
});
