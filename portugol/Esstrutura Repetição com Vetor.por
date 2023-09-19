programa {
  funcao inicio() {
    inteiro idade[3], contador
    cadeia nome[3]

    // utilizando o contador para armazenar informaçoes nas variaveis com vetor
    para (contador = 0; contador <= 2; contador++){
    escreva("Qual seu nome?\n")
    leia(nome[contador])
    escreva("Qual a sua idade?\n")
    leia(idade[contador])
    }

    limpa()
    // utilizando o contador para mostrar as informaçoes das variaveis com vetor
    para (contador = 0; contador <= 2; contador++){
      escreva("Nome: ",nome[contador],"\n")
      escreva("Idade: ",idade[contador],"\n")
      }
  }
}
