const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // 'retorna true se o id passado é de um gerente e false se não for de um gerente.'
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  // retorna uma array com o nome dos funcionários do respectivo gerente passado pelo id' OU 'dispara erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
}

module.exports = { isManager, getRelatedEmployees };
