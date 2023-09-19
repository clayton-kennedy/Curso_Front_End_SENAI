programa {
  /* EXERCICIO 24- Crie um algoritmo capaz de informar se uma pessoa deve ou não cumprir o 
  alistamento militar, os dados recebidos são nome, idade e sexo.
*/
  funcao inicio() {
    cadeia nome, sexo
    inteiro idade

    escreva("Digite o nome: ")
    leia(nome)
    escreva("Digite a idade: ")
    leia(idade)
    escreva("Digite o sexo: (m / f) ")
    leia(sexo)

  se ((sexo == 'm') e (idade >= 18)){
    escreva("Você deve cumprir o alistamento militar.")
  }
  senao se ((sexo =="f") e (idade >=18){
    escreva("Você faz alistamento militar se quiser.")
  }
  senao {
    escreva("Você não deve fazer o alistamento militar.")
  }
  }
}
