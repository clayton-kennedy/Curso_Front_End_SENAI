programa {
  /* EXERCICIO 24- Crie um algoritmo capaz de informar se uma pessoa deve ou n�o cumprir o 
  alistamento militar, os dados recebidos s�o nome, idade e sexo.
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
    escreva("Voc� deve cumprir o alistamento militar.")
  }
  senao se ((sexo =="f") e (idade >=18){
    escreva("Voc� faz alistamento militar se quiser.")
  }
  senao {
    escreva("Voc� n�o deve fazer o alistamento militar.")
  }
  }
}
