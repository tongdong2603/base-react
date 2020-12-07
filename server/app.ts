import express from 'express';
import path from 'path';

const app: express.Application = express();

// Static file
app.use(express.static(path.join(__dirname, 'public')));

//
app.get('*', function (req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app;
