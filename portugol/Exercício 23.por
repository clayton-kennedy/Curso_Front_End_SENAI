programa {
  /* EXERCICIO 23- Crie um algoritmo capaz de medir o imc de uma pessoa recebendo seu peso, idade,
   nome e altura, e informe os seus dados e grau de sa�de conforme tabela de imc.
*/
  funcao inicio() {
    cadeia nome
    real peso, altura, calculo_imc
    inteiro idade

    escreva("Digite seu nome: ")
    leia(nome)
    escreva("Digite sua idade: ")
    leia(idade)
    escreva("Digite sua altura: ")
    leia(altura)
    escreva("Digite seu peso: ")
    leia(peso)

    calculo_imc = peso/(altura*altura)

limpa()
    se (calculo_imc <= 18.5){
      escreva(nome,", de idade ",idade,", seu IMC �: ",calculo_imc,", e seu grau de sa�de �: Magreza.")
    
    se(calculo_imc >= 18.5 ou <= 24.9){
      escreva(nome,", de idade ",idade,", seu IMC �: ",calculo_imc,", e seu grau de sa�de �: Normal.")
    
    se (calculo_imc >= 25 ou <= 29.9){
      escreva(nome,", de idade ",idade,", seu IMC �: ",calculo_imc,", e seu grau de sa�de �: Sobrepeso.")
    
    se (calculo_imc >= 30 ou <= 39.9){
      escreva(nome,", de idade ",idade,", seu IMC �: ",calculo_imc,", e seu grau de sa�de �: Obesidade.")
    }}}}
    senao {
      escreva(nome,", de idade ",idade,", seu IMC �: ",calculo_imc,", e seu grau de sa�de �: Obesidade Grave.")
    }

  }
}
