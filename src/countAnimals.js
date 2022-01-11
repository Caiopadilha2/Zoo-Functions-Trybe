const { species } = require('../data/zoo_data');

// Na linha 7, eu vou guardando a {espécie: número de animais} O reduce vai fazer esse papel de ir agrupando.
// Na linha 10, é como vai começar o contador. No caso, como um objeto vazio, que vai ser alimentado pela linha 8.
// O return do acc foi como se fossem as pizzas no baú do entregador. O return numeroDeAnimais seria o pedido pra entrega.
function countAnimals(animal) {
  if (!animal) {
    const numeroDeAnimais = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return numeroDeAnimais; // foi o exemplo dos motoboys.
  }
  const findSpecie = species.find((specie) => animal.specie === specie.name).residents;
  // Uso .residents porque só vou usar o tamanho(length) do residents, e ''sex'', que está dentro.
  // Não dou .length aqui para poder usar no outro ''requisito'', que é pra achar o número de animais daquele sexo.
  if (animal.sex && animal.specie) {
    // se passar como parâmetro o sexo e a espécie
    const findSex = findSpecie.filter(({ sex }) => sex === animal.sex);
    // Filtrar, a partir da espécie que já encontrei na const acima, os animais daquele sexo, naquela espécie já encontrada.
    return findSex.length;
    // uso sempre o tamanho no retorno.
  }
  return findSpecie.length;
}

module.exports = countAnimals;
