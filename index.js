import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Contas/ContaCorrente.js"
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticar } from "./AutSistem.js";

const diretor = new Diretor("Rodrigo", 15000, 11122233385);

diretor.cadastrarSenha("123456789")

const gerente = new Gerente("Manoel", 8000, 22255588845);

gerente.cadastrarSenha("123");

const cliente1 = new Cliente("Joao", 11122255547, 554321)

const logged = SistemaAutenticar.login(diretor, 123456789);
const logged2 = SistemaAutenticar.login(gerente, 123);
const logged3 = SistemaAutenticar.login(cliente1, 554321);



console.log(logged);
console.log(logged2);
console.log(logged3);
