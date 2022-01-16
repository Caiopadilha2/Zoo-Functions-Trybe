const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  // Aqui estou filtrando as pessoas desse array entrant pelas idades e pegando a quantidade de quantos tem de cada uma das faixa etátias com o .length
  return { child, adult, senior };
  // Vai retornar um objeto já com a chave e seus valores.
  // Explicação do Daniel: ''Se você não diz qual será a chave ele já coloca o nome da chave igual ao nome da variável. É um recurso do JavaScript.'' Por isso eu não tava conseguindo colocar return { 'child:' child, 'adult:' adult, ....
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
    // Eu tava tentando passar entrant.length === 0 para representar um objeto vazio, mas não fazia sentido.
    // Antes disso eu tava usando dois ifs, mas posso fazer os dois em um só.
  }

  const visitantes = countEntrants(entrants);
  // Estou usando a função lá de cima que trás o cálculo dos visitantes.
  // Colocando o cursor do mouse em cima de visitantes, consigo ver que é um objeto com chaves child, adult e senior.

  const childPrice = visitantes.child * data.prices.child;
  // visitantes.child é o número de crianças. Multiplico isso pelo valor do ingresso para criança, que é 20,99.
  const adultPrice = visitantes.adult * data.prices.adult;
  const seniorPrice = visitantes.senior * data.prices.senior;

  return childPrice + adultPrice + seniorPrice;
  // Vai retornar o ''faturamento'' do parque no dia, de acordo com o número de visitantes e o tipo (criança, adulto, senhor).
}

module.exports = { calculateEntry, countEntrants };
