programa {
  funcao inicio() {
    caracter palavra

    escreva("Digite a palavra: ")
    leia(palavra)

    se (palavra == 'a' ou 'e' ou 'i' ou 'o' ou 'u'){
        escreva("A palavra começa com uma vogal.")
    }
    senao {
      escreva("A palavra começa com uma consoante.")
    }
  }
}
