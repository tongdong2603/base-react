#! /bin/node

import { createServer } from 'http';
import app from './app';

const server = createServer(app);

server.listen(3001, () => {
  console.log(`Server listing on port 3001`);
});
