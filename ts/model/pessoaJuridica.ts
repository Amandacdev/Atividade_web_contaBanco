class PessoaJuridica extends Pessoa {

    readonly _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome + ' - Pessoa Jurídica', idade, dataNascimento);
        this._cnpj = cnpj; 
    }
    
    toString(): string {
        return `Nome: ${this.nome}
        - Idade: ${this.idade}
        - Data de Nascimento: ${this.dataNascimento}
        - CPF: ${this._cnpj}`;
    }
}

