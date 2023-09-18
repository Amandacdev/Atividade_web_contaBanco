let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

//Criando os objetos pessoas
const pessoa1 = new Pessoa(
    'Mônica',
    32,
    new Date(2023,4,5)
);

const pessoa2 = new PessoaJuridica(
    'Pedro',
    54,
    new Date(2023,2,1),
    '4567'
);

const pessoa3 = new PessoaFisica(
    'Lucas',
    23,
    new Date(2023,2,1),
    '31245'
);

//Imprimindo no console

console.log('Pessoa 1:');
console.log('Nome: ' + pessoa1.nome);
console.log('Idade: ' + pessoa1.idade);
console.log('Data Nascimento: ' + pessoa1.dataNascimento);
console.log('Pessoa 2:');
console.log('Nome: ' + pessoa2.nome);
console.log('Idade: ' + pessoa2.idade);
console.log('Data Nascimento: ' + pessoa2.dataNascimento);
console.log('CNPJ: ' + pessoa2._cnpj);
console.log('Pessoa 3:');
console.log('Nome: ' + pessoa3.nome);
console.log('Idade: ' + pessoa3.idade);
console.log('Data Nascimento: ' + pessoa3.dataNascimento);
console.log('CPF: ' + pessoa3._cpf);