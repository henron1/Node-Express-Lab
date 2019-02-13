const express = require('express'); // importing a CommonJS module

const postsRouter = require('./router/PostRouter')

const server = express();

server.use(express.json());
server.use('/api/posts', postsRouter);

// server.use('/api/posts', postsRouter);

server.get('/', async (req, res) => {
    res.send(`
      <h2>Lambda Posts API</h>
      <p>Welcome to the Lambda Posts API</p>
    `);
  });module.exports = server;