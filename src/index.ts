import { Assalariado } from "./model/Assalariado";

const a1 = new Assalariado(`Miroslav klose`, `12345678989`, 1500);

a1.setNome(`wesley sneidjer`);
a1.setCpf(`12345678901`);
a1.setSalario(2500);

console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);








