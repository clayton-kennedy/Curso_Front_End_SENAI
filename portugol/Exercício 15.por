programa {
  /*EXERCICIO 15-Crie um algoritmo capas de calcular a �rea de um circulo, recebendo somente a medida de seu raio.
*/

const real pi = 3.1415

  funcao inicio() {
    real area, raio

    escreva("Digite a medida do raio: ")
    leia(raio)
    
    area = pi*(raio*raio)

    escreva("O tamanho da �rea do c�rculo � de: ",area)
  }
}
