const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');
const faker = require('faker');
const url = require('url');

const files = {};

const apiRootDir = path.resolve('src/api');

faker.locale = 'ja';

fs.readdirSync(apiRootDir)
  .filter((i) => fs.statSync(path.join(apiRootDir, i)).isFile() && i.slice(-10) === '.schema.js')
  .map((i) => i.replace('.schema.js', ''))
  .forEach(
    (i) =>
      (files[i] = {
        schema: path.join(apiRootDir, `${i}.schema.js`),
        json: path.join(apiRootDir, `${i}.json`),
      }),
  );

console.log('🚀 ~ file: server.js ~ line 10 ~ files', files);

function fakeData(file, urlPath) {
  const data = {
    [urlPath]: [],
  };
  const load = require(file.schema);
  for (let i = 0; i <= load.loop; i++) {
    data[urlPath].push(load.schema());
  }

  fs.writeFileSync(file.json, JSON.stringify(data));

  return data;
}

function fakeJson(req, res, next) {
  const urlPath = require('url').parse(req.url).pathname.split('/')[1];
  const file = files[urlPath];
  if (file) {
    if (!fs.existsSync(file.json) && fs.existsSync(file.schema)) {
      fakeData(file, urlPath);
    }
  }
  const router = jsonServer.router(fs.existsSync(file.json) ? file.json : { [urlPath]: [] });
  return router(req, res, next);
}

server.use(middlewares);

server.get('/reload', function (req, res) {
  const { model } = req.query;

  const file = files[model];

  if (file) {
    fakeData(file, model);
  }

  if (!file && model === '*') {
    Object.keys(files).map((key) => fakeData(files[key], key));
  }
  res.json({
    message: 'Success',
  });
});

server.use('/api/v1', fakeJson);

const port = 3004;

server.listen(port, () => console.log(`Server listing on port ${port}`));
