const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui  // 'retorna true se o id passado é de um gerente e false se não for de um gerente.'
  return employees.some((employee) => employee.managers.includes(id));
  // Ajuda do pessoal sala de estudos. Estava pensando em como descobrir se é gerente ou não. Lendo os testes e o DATA ajudou.
  // Vai ver se, em employees, algum deles tem o ID que foi passado no parâmetro da função "isManager".
}

function getRelatedEmployees(managerId) {
  // seu código aqui // utiliza a primeira função para apresentar as seguintes saídas: // retorna uma array com o nome dos funcionários do respectivo gerente passado pelo id' OU 'dispara erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // Se, chamando a função que verifica se o id passado é um gerente - usando o parâmetro "managerId" for falso - então o Id inserido não é válido.
  return employees.filter((subordinado) => subordinado.managers.includes(managerId))
    .map((subordinado) => `${subordinado.firstName} ${subordinado.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
