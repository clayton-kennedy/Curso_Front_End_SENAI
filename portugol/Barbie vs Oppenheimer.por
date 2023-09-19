programa {
  funcao inicio() {
    inteiro voto, votobarbie = 0, votooppenheimer = 0, votosinvalidos = 0
    enquanto (voto != 00){
      escreva("Escolha seu filme: \n")
      escreva("01 - Barbie\n")
      escreva("02 - Oppenheimer\n")
      leia(voto)
      limpa()
 
      escolha (voto){
      caso 00:
      pare
      caso 01:
        votobarbie += 1
      pare
      caso 02:
        votooppenheimer += 1
      pare
      caso contrario
        escreva("Voto inválido!\n")
        votosinvalidos += 1
      }
    }
    escreva("Votos Barbie: ",votobarbie)
    escreva("\nVotos Oppenheimer: ",votooppenheimer)
    escreva("\nVotos Inválidos: ",votosinvalidos,"\n")
  }
}