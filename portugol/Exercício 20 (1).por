programa {
  funcao inicio() {
    caracter palavra

    escreva("Digite a palavra: ")
    leia(palavra)

    se (palavra == 'a') ou (palavra == 'e') ou (palavra == 'i')
    (palavra == 'o') ou (palavra == 'u'){
        escreva("A palavra come�a com uma vogal.")
    }
    senao {
      escreva("A palavra come�a com uma consoante.")
    }
  }
}
