import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonus = 1.1;
    }
}