const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const funcionario = employees.find((employee) => employeeName === employee.firstName
   || employeeName === employee.lastName);
  return funcionario;
  // Fiz 100% sozinho, sem pesquisar. Estava fazendo (employeeName === employee.firstName
  // || employee.lastName) e não estava dando certo os testes 2 e 3. Depois de arrumar isso, fiz a linha 6 e 7
  // para passar o requisito 1, mas acho que deve ter algum jeito de não precisar daquele IF.
}

module.exports = getEmployeeByName;
