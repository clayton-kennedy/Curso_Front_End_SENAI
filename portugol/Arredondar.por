programa {
  /* incluindo a biblioteca matematica
e o --> est� instanciando a biblioteca, onde math possui as mesmas propriedades da
biblioteca original, porem, sem o perigo de alterar a biblioteca original em algum bug. */
inclua biblioteca Matematica --> math
  funcao inicio() {
    inteiro numero1, numero2
    real resultado

    escreva("Informe o n�mero 1: ")
    leia(numero1)
    escreva("Informe o n�mero 2: ")
    leia(numero2)

    resultado = numero1 / numero2
    escreva(math.arredondar(resultado, 2))
  }
}