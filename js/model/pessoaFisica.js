class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome + ' - Física', dataNascimento, idade);
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }
}