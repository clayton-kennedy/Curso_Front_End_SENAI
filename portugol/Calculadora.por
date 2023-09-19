programa {
  inclua biblioteca Matematica --> math
    funcao criar_linha(){
    escreva("\n/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/\n")   }
    funcao valor_de_pi (){
      retorne math.PI }
    funcao raiz_quad(inteiro numero1){
      retorne math.raiz(numero1, 2)    }
    funcao calc_porcentagem (real numero_porcent, real porcent){
      retorne  numero_porcent*porcent/100   }
    funcao calc_divisao(real n1_div, real n2_div){
      retorne n1_div/n2_div    }
    funcao calc_multiplicacao(real n1_mult, real n2_mult){
      retorne n1_mult*n2_mult    }  
    funcao menu_opcao(){
    escreva("\nInforme o que deseja realizar:\n")
    escreva("01 - SOMA\n")
    escreva("02 - SUBTRAÇÃO\n")
    escreva("03 - MULTIPLICAÇÃO\n")
    escreva("04 - DIVISÃO\n")
    escreva("05 - RAIZ QUADRADA\n")
    escreva("06 - PORCENTAGEM\n")
    escreva("07 - PI\n")
    escreva("99 - SAIR\n")}

  funcao inicio() {
     inteiro opcao, numero, som1, sub1
     real num_porc, porcent, div1, div2, mult1, mult2, numero_somado, numero_subtraido

      enquanto (opcao != 99){
      menu_opcao()
      leia(opcao)
      limpa()


      se (opcao == 01){
        limpa()
          enquanto (som1 != 00){
          escreva("Informe o valor: ")
          leia(som1)
          numero_somado += som1 
          limpa()
          escreva(numero_somado,"\n")}
      }
      senao se (opcao == 02){
                limpa()
          enquanto (sub1 != 00){
          escreva("Informe o valor: ")
          leia(sub1)
          numero_subtraido -= sub1
          limpa()
          escreva(numero_subtraido,"\n")}
      }
      senao se (opcao == 03){
      limpa()
      escreva("Informe o multiplicador: ")
      leia(mult1)
      escreva("Informe o segundo valor: ")
      leia(mult2)
      escreva("Resultado: ",calc_multiplicacao(mult1, mult2))
      }
      senao se (opcao == 04){
      limpa()
      escreva("Informe o primeiro valor: ")
      leia(div1)
      escreva("Informe o segundo valor: ")
      leia(div2)
        se (div1 == 0 ou div2 == 0){
          escreva("Não é possível dividir por 0.")        }
        senao {
          escreva("Resultado: ",calc_divisao(div1, div2))         }
      }
      senao se(opcao == 05){
      escreva("Informe o valor que deseja saber a raiz: ")
      leia(numero) 
      limpa()
      escreva("Resultado: ",raiz_quad(numero)) 
      }
      senao se (opcao == 06){
      limpa()
      escreva("Informe o valor que deseja saber a porcentagem: ")
      leia(num_porc)
      escreva("Informe a porcentagem que deseja saber: % ")
      leia(porcent)
      escreva(porcent,"% de ",num_porc," é: ",calc_porcentagem(num_porc, porcent))
      }
      senao se (opcao == 07){
      limpa()
      escreva("Valor de PI: ",valor_de_pi())
      }
      senao{
        limpa()
        escreva("Informe uma opção válida! \n")
      }
    }
  }
}
