class PessoaFisica extends Pessoa {

    readonly _cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome + ' - Física', idade, dataNascimento);
        this._cpf = cpf; 
    }

    toString(): string {
        return `Nome: ${this.nome}
        - Idade: ${this.idade}
        - Data de Nascimento: ${this.dataNascimento}
        - CPF: ${this._cpf}`;
    }
    

}
