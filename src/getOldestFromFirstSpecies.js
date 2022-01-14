const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((element) => element.id === id).responsibleFor[0];
  // Está verificando o id passado é de qual funcionário e vendo qual o primeiro animal que ele é responsável.
  const { residents } = species.find((element) => element.id === idAnimal);
  // Aqui eu vou pegar só os ''residents'', com todos os animais daquela espécie.
  let idade = residents.map(({ age }) => age);
  // Mapeia as idades.
  idade = Math.max(...idade);
  // Aqui ele retorna um array só com os valores das idades dos animais, e com o math ele pega só o maior.
  const animalEscolhido = residents.find(({ age }) => age === idade);
  // Aqui eu vou encontrar o animal que tem aquela idade que foi retornada. No caso foi 15, então ele retornou o leão que tem 15 anos.
  return Object.values(animalEscolhido);
  // Como ele retornou todo o objeto do leão (name: xxx, sex: xxx, age: xxx) e ele só quer os VALORES, usar a propriedade object.values, que já foi aprendida no curso.
  // Questão feita em conjunto na sala de estudos de madrugada.
}

module.exports = getOldestFromFirstSpecies;
