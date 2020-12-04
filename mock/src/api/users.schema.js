const faker = require('faker');

const schema = function () {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName() + faker.name.lastName(),
  };
};

module.exports = {
  schema,
  loop: 1000,
};
