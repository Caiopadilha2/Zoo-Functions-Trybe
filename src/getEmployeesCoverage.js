const { species, employees } = require('../data/zoo_data');

const getAnimalName = (idAnimal) => species.find(({ id }) => id === idAnimal).name;
// Em species.find passando ID, verifica se esse id desestruturado é igual ao parâmetro passado. Se sim, já pego o name.
const getAnimalLocation = (idAnimal) => species.find(({ id }) => id === idAnimal).location;
// Em species.find passando ID, verifica se esse id desestruturado é igual ao parâmetro passado. Se sim, já pego a localização deste animal.

const procuraPorNome = (nome) => {
  // Vai ser passado um nome como parâmetro, que pode ser o nome ou o sobrenome. Verifico isso na linha 7.
  const objFuncionario = employees.find((employee) =>
    employee.firstName === nome || employee.lastName === nome);
  return {
    id: objFuncionario.id,
    fullName: `${objFuncionario.firstName} ${objFuncionario.lastName}`,
    species: objFuncionario.responsibleFor.map((idAnimal) => getAnimalName(idAnimal)),
    locations: objFuncionario.responsibleFor.map((idAnimal) => getAnimalLocation(idAnimal)),
  };
};
// As funções de cima e de baixo fazem a mesma coisa, mas recebendo parâmetros diferentes. Nome ou ID.
const procuraPorId = (id) => {
  const objFuncionario = employees.find((employee) => employee.id === id);
  // Verifico se o ID passado como parâmetro é o ID de qual funcionário.
  return {
    id: objFuncionario.id,
    fullName: `${objFuncionario.firstName} ${objFuncionario.lastName}`,
    species: objFuncionario.responsibleFor.map((idAnimal) => getAnimalName(idAnimal)),
    locations: objFuncionario.responsibleFor.map((idAnimal) => getAnimalLocation(idAnimal)),
  };
};

const erro = () => {
  throw new Error('Informações inválidas');
};

const semParametro = () => {
  // Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
  const listaDeFuncionarios = [];
  employees.forEach((employee) => listaDeFuncionarios.push(procuraPorNome(employee.firstName)));
  return listaDeFuncionarios;
};

const verificaFuncionario = (objeto) => employees.some((employee) =>
  employee.firstName === objeto.name || employee.lastName === objeto.name
  || employee.id === objeto.id);
// Verificando se o objeto passado como parâmetro é um funcionário. Se não for, vou usar essa função para retornar erro la em baixo, na outra função.

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return semParametro();
  }
  if (!verificaFuncionario(parametro)) {
    // Se NÃO for um funcionário, retornar erro.
    return erro();
  }
  if (parametro.id) {
    return procuraPorId(parametro.id);
  }
  if (parametro.name) {
    return procuraPorNome(parametro.name);
  }
}

module.exports = getEmployeesCoverage;
