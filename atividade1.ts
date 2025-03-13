let teclado = require (`prompt-sync`)();

let salario: number = 0;
let idade: number = 0;
let tot_pess_atend_condicao: number = 0;
let n_pess: number = 0;

do{
      idade = parseFloat(teclado(`Digite a idade do funcionario `));
      salario = parseFloat(teclado(`Digite o salario do funcionario `));

if(idade<30 && salario>3000){
tot_pess_atend_condicao++;
n_pess++
}
else{
      n_pess++;
    }

}while(n_pess <= 50)

   console.log(`O total de pessoas é ${tot_pess_atend_condicao}`);