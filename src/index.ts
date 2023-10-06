import { Assalariado } from "./model/Assalariado";
import { comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado(`Miroslav klose`, `12345678989`, 1500);

a1.setNome(`wesley sneidjer`);
a1.setCpf(`12345678901`);
a1.setSalario(2500);

console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new comissionado ('maaaaa','39302940',3949,0.10)
c1.setNome('luciano');
c1.setCpf('0000000000000000000');
c1.setTotalVendas(3333);
c1.setTaxaComissao(0.00);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf()}`);
console.log(`Comissao: ${c1.getTaxaComissao()} Total Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista ('oloco', '12345676789', 59, 19)
h1.setNome(`kovaslk`);
h1.setCpf(`660-332-974-90`);
h1.setValorHora(30);
h1.setHorasTrabalhadas(9);
console.log(`Nome: ${h1.getNome()}, CPF: ${h1.getCpf()}`);
console.log(`Valor da Hora: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);




