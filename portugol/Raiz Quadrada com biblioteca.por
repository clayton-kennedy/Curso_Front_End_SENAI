programa {
  /* incluindo a biblioteca matematica
e o --> está instanciando a biblioteca, onde math possui as mesmas propriedades da
biblioteca original, porem, sem o perigo de alterar a biblioteca original em algum bug. */
inclua biblioteca Matematica --> math
  funcao inicio() {
    inteiro numero
    real resultado

    escreva("Informe o número: ")
    leia(numero)

    resultado = math.raiz(numero, 2)

    escreva("O resultado é: ",resultado,"\n")
  }
}