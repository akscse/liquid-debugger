const { Liquid } = require('liquidjs');
const path = require('path');

const engine = new Liquid();

const variables = {}

engine
  .renderFile("<fileName>", variables)
  .then(console.log);