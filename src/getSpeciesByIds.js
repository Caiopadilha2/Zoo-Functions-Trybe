const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // const result = [];
  // if (ids === undefined) {
  //   return result;
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
