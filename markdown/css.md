# Aprendendo CSS

### Para estilizar uma tag basta coloca-la no < style > dentro do head ou abrir um arquivo .css e em seguida colocar { }<br>
    Ex: p {   
    }
### Para estilizar uma tag específica, basta dar um nome único com div ou coloca-la junto a tag pai:<br>
    Ex: body > p > del {
    }
### Pode-se definir a cor de três maneiras:<br>
    Exemplos: 
    color: rgb(0, 70, 60);
    color: aquamarine;
    color: hsl(30, 60%, 35%);
    color: #0A5159;

### Para colocar uma fonte em um repositório no computador:<br>
            @font-face {
            font-family: nome da fonte;
            src: url(local da pasta onde está a fonte);
        }

        no inicio do css.

###
---
# Principais TAGs usadas no CSS:

### Plano de fundo
* background-color = Define a cor de fundo
* background: url() = inserir imagem de plano de fundo
* background: linear gradient (cor1, cor2) = personalizar a cor de fundo

### Bordas
* border = Define todas as propriedades de estilo de borda de uma vez
* border-color = Define a cor da borda
* border-width = Define a largura de todas as bordas
* border-style = Define o estilo de linha para todas as bordas
* border-bottom = Define todas as propriedades de estilo da borda inferior de uma vez
* border-bottom-color = Define a cor da borda inferior
* border-bottom-style = Define o estilo da linha de borda inferior
* border-bottom-width = Define a largura da linha da borda inferior
* border-left = Define todas as propriedades de estilo da borda esquerda de uma vez
* border-left-color = Define a cor da borda esquerda
* border-left-style = Define o estilo da linha da borda esquerda
* border-left-width = Define a largura da linha da borda esquerda
* border-right = Define todas as propriedades de estilo da borda direita de uma vez
* border-right-color = Define a cor da borda direita
* border-right-style = Define o estilo de linha da borda direita
* border-right-width = Define a largura da linha da borda direita
* border-top = Define todas as propriedades de estilo da borda superior de uma vez
* border-top-color = Define a cor da borda superior
* border-top-style = Define o estilo da linha da borda superior
* border-top-width = Define a largura da linha da borda superior

### Elemento
* display = Especifica a saída do elemento e a exibição visual na página
* height = Define a altura do elemento
* width = Define a largura do elemento

### Font
* color = Define a cor do texto
* font = Define todas as propriedades de estilo de fonte de uma vez
* font-family = Define a família de fontes do texto
* font-size = Define o tamanho da fonte
* font-style = Define o estilo da fonte, por exemplo, normal ou italic
* font-variant = Determina como as letras minúsculas devem ser representadas, ou seja, se deve deixá-las inalteradas (normal) ou aplicar versaletes (caixas minúsculas)
* font-weight = Define o peso da fonte

### List
* list-style-type = Define o tipo de marcador para cada elemento da lista

### Table
* table-layout = Define a largura das células da tabela com base no conteúdo

### Text
* letter-spacing = Define o espaçamento entre letras no texto
* line-height = Define o espaçamento entre linhas no texto
* text-align = Define o alinhamento horizontal do texto
* text-decoration = Especifica a decoração do texto, como sublinhado, tachado ou piscando
* text-indent = Define o tamanho do recuo antes de uma linha em um bloco de texto
* text-transform = Converte texto em caracteres maiúsculos ou minúsculos, por exemplo, transforma todos os caracteres no texto ou o primeiro caractere de cada palavra em uma frase em maiúsculas
* vertical-align = Define o alinhamento vertical do texto
* text-shadow = Para colocar uma sombra no texto ( 5px 1px 5px cor)

### 