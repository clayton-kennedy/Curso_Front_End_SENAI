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
    escreva("Digite o sexo: (h / m) ")
    leia(sexo)

  se ((sexo == 'h') e (idade >= 18)){
    escreva("Voc� deve cumprir o alistamento militar.")
  }
  senao {
    escreva("Voc� n�o precisa cumprir o alistamento militar.")
  }
  }
}
