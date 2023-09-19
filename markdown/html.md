# Aprendendo HTML5
Um documento HTML recebe algumas tags que formam a sua estrutura básica. No HTML5, o documento padrão recebe a seguinte estrutura:

* < !DOCTYPE html> – A tag !DOCTYPE informa ao navegador a versão do HTML que está sendo utilizada no documento. Por exemplo: no HTML5, basta incluir !DOCTYPE html, e assim o navegador já saberá que se trata de um documento na versão HTML5;<br>

* < html> – Esta tag é o elemento básico da estrutura do HTML. Assim sendo, ela conterá todos os elementos do seu documento. Todo documento HTML deve iniciar e finalizar com essa tag;<br>

* < head> – Essa tag delimita o cabeçalho do documento. Não possui nenhum valor visível, porém é capaz de transmitir ao navegador diversas informações muito úteis e essenciais a uma boa apresentação do seu documento HTML;<br>

* < title> – Essa tag define o título da sua página, o nome que aparecerá na sua aba, janela ou guia. Por esta razão, a tag >title> é de grande importância para o SEO;<br>

* < meta> – Essa tag permite inserir metadados ao seu documento, no caso acima, a informação charset=”UTF-8″, que garante a compatibilidade do código com os caracteres de padrão latino americano;<br>

* < body> – Finalmente, a tag que representa o corpo do documento. Em síntese, é nessa tag que todos os elementos visíveis do seu site devem ser inseridos.<br>

## Tags HTML de texto<br>
As tags de texto definem textos, estilos de fonte, parágrafos, spans, quebras de linhas, etc. Vamos conhecê-las:

|Tag| Descrição|
|-|-|
| < p> | Principal tag de texto, compõe um parágrafo|
| < span> | Apesar de ter uma funcionalidade e características parecidas com os parágrafos, costumam ser utilizadas apenas para pequenas informações, como legendas de um formulário, legendas de uma imagem, etc. Também pode ser utilizada para formar um container|
| < pre> | Tag utilizada para representar texto pré-formatado. Muito utilizada para inserir códigos|
| < br/> | Essa tag não necessita de fechamento, ela executa a função de quebra de linha.|
| < hr/> | Essa tag não necessita de fechamento, ela forma uma linha horizontal.|

### Este é um texto para demonstrar as enfases encontradas em alguns parágrafos, que podem ser:
* Itálico é com tag < i >
* Itálico Semântico é com tag < em >
* Negrito é com tag < b >
* Negrito Semântico é com tag < strong >
* Taxado Semântico é com tag < del >
* Sublinhado é com tag < u >
* Sublinhado Semântico é com tag < ins >
<hr>


|Tag| Descrição|
|-|-|
|< h1> | Título de maior valor hierárquico|
|< h2>|
|< h3>|
|< h4>|
|< h5>|
|< h6> |Título de menor valor hierárquico|

### Tag Sub e Sup
A Tag SUB: este é um elemento inline destinado a marcar fragmentos de texto que devam ser renderizados em alinhamento vertical mais baixo em relação ao texto principal.<br>
A tag SUP: este é um elemento inline destinado a marcar fragmentos de texto que devam ser renderizados em alinhamento vertical mais alto em relação ao texto principal.

     Esta é a fórmula da água com tag < sub >. Ex: H<sub>2</sub>O
     Esta é uma expressão de 2º grau com tag < sup >. Ex: 2x<sup>2</sup>+x-5

### Tag big e small
     Para um texto grande pode-se usar tag < big >
     e para um texto pequeno pode-se usar tag < small >

## Tag de Link
Para realizar um link, podemos chamar as tags <a></a> com o atributo href. Por exemplo, caso você queira criar um link no seu texto que redirecione à página inicial do google:
     ex: <a href="www.google.com">Clique para acessar o portal Google</a>

## Tag de Imagem
Essa tag não necessita de fechamento, serve para incluir uma imagem ao seu texto. A partir dessa tag, utilizamos o atributo src=”” onde deve ser digitado o local em que a imagem se encontra. Também é muito utilizado em conjunto com o atributo alt para definir o texto alternativo da imagem.

     ex: <img src="imagens/imagem1.jpg" alt="imagem 1 da minha página">

## Tag de vídeo
Essa tag serve para indicar a inserção de um vídeo. Com isso, devemos colocar alguns atributos dentro da tag para poder ativar o controle, a principal dela é o controls. Posteriormente, incluímos a tag < source> com os atributos src e type, onde receberão o local em que está o vídeo e o tipo do vídeo. É recomendado utilizar mais de um tipo de source do mesmo vídeo, para garantir maior possibilidade de compatibilidade com o navegador. Finalmente, podemos incluir uma mensagem que será renderizada apenas se o navegador do usuário não suportar a tag video.

     ex: <video video controls>
     <source src="link video" type="video/mp4">
     <source src="video.ogg" type="video/ogg">Seu navegador não possui suporte para Vídeos.
     </video>

## Tag de audio
A tag < audio> funciona da mesma forma que a tag < video>, portanto, utilizamos a tag < source> dentro dela. Vejamos o exemplo a seguir:
     
     ex: <audio controls><source src="musica.ogg" type="audio/ogg">
     <source src="musica.mp3" type="audio/mpeg">
     Seu navegador não possui suporte para áudio.</audio>

### < code > e < pre > Ajuda a criar fontes com o mesmo espaçamento em todos caracteres:
     <code>const pi = 3.1415</code>
     <pre>const pi = 3.1415</pre>

### Para fazer citações:
     <q> e <cite> para fazer uma citação pequena
     <blockquote> Texto </blockquotecite> Para citar um parágrado


### Para mostrar informações sobre um nome abreviado.
     <abbr title="informação"> Nome abreviado 

### Para marcar uma informação de um texto
     Luciano é um <mark>professor top.</mark>

### Para marcar informações sobre uma palavra.
     <dfn title="É o mesmo que mexerica">Bergamota</dfn> é uma fruta tradicional brasileira

# Caracteres personalizados:

|Tag| Descrição|
|-|-|
|&copy;| de copyright|
|&reg; | de marca registrada|
| &trade;| de trade mark|
| &cent;| de centavos americano|
| &euro;| de dinheiro euro|
| &pound; | de libra|
| &yen;| do dinheiro do Japão|
| &Delta; | do delta|
| &uarr; | de seta para cima|
| &duarr; | de seta para cima e baixo|
| &darr; | de eta para baixo|
| &larr; | de seta para esquerda|
| &rarr; | de seta para direita|

# Para criar listas:
Lista não ordenada:
< ul> e para os itens utiliza-se < li>
     
     ex: <ul>
     <li>item 1</li>
     <li>item 2</li>
     <li>item 3</li>
     </ul>

Lista ordenada:
< ol> e para os itens utiliza-se < li>

     ex: <ol>
     <li>item 1</li>
     <li>item 2</li>
     <li>item 3</li>
     </ol>

# Tags para formulário
Para iniciar um formulário, incluimos as tags < form> e </ form>. Posteriormente, devemos incluir o conteúdo do formulário. Digamos que, por exemplo, você queira incluir três campos, sendo dois para coletar informações e um para receber uma mensagem. Desta forma, para criar os campos de preenchimento, deverá utilizar a tag < input >, enquanto para o campo referente à mensagem, deverá utilizar a tag < textarea >.<br>

A tag < input > possui o atributo type, que varia entre diversos tipos (vamos explicar os principais deles abaixo). Também há o atributo placeholder, que é um texto que ficará disponível enquanto nada for digitado nesse campo. Também é importante definir um atributo name para cada input.

|Tag| Descrição|
|-|-|
|button| Um botão sem comportamento padrão.|
|checkbox| Uma caixa de marcação. Você deve usar o atributo value para definir o valor enviado por este item. Use o atributo checked para indicar se o item está selecionado por padrão. Você também pode usar o atributo indeterminate para indicar que a caixa de marcação está em um estado indeterminado (na maioria das plataformas, isso desenha uma linha horizontal cortando a caixa)|
|color| Um controle para especificar cores. A interface de um seletor de cores não tem nenhuma funcionalidade obrigatória a não ser aceitar cores simples em texto (mais informações — em inglês).|
|date| Um controle para inserir uma data (ano, mês e dia, sem horário).|
|datetime| Um controle para inserir data e horário (hora, minuto, segundo e fração de segundo) baseado no fuso horário UTC.|
|datetime-local| Um controle para inserir data e horário, sem fuso horário.|
|email| Um campo para editar um endereço de e-mail. O valor do campo é validado para estar vazio ou ter um único endereço de e-mail válido antes de ser enviado. As pseudoclasses CSS :valid e :invalid são aplicadas apropriadamente.|
|file| Um controle que permite ao usuário selecionar um arquivo. Use o atributoaccept para definir os tipos de arquivo que o controle pode selecionar.|
|hidden| Um controle que não é exibido mas cujo valor é enviado ao servidor.
|image| Um botão gráfico para enviar o formulário. Você deve usar o atributo src para definir a fonte da imagem e o atributo alt para definir um texto alternativo. Você pode usar os atributos height e width para definir o tamanho da imagem em pixels.|
|month| Um controle para inserir mês e ano, sem fuso horário.|
|number| Um controle para inserir um número de ponto flutuante.|
|password| Um campo de texto com uma só linha cujo valor é obscurecido. Use o atributo maxlength para especificar o comprimento máximo do valor que pode ser inserido.|
|radio| Um botão de escolha. Você deve usar o atributo value para definir o valor a ser enviado por este item. Use o atributo checked para indicar se este item deve estar selecionado por padrão. Botões de escolha que têm o mesmo valor para o atributo name estão no mesmo "grupo de botões de escolha"; apenas um botão de escolha no grupo pode estar selecionado de cada vez.|
|range| Um controle para inserir um número cujo valor exato não é importante. Este tipo de controle usa os seguintes valores padrão se os atributos correspondentes não forem especificados: min: 0 max: 100|
|value| min + (max-min)/2, ou min se max for menos que min step: 1|
|reset| Um botão que faz o conteúdo do formulário voltar a ter seus valores padrão.|
|search| Um campo de texto com uma só linha para digitar termos de busca; quebras de linha são automaticamente removidas do valor entrado.|
|submit| Um botão que envia o formulário.|
|tel| Um controle para inserir um número de telefone; quebras de linha são automaticamente removidas do valor entrado, mas nenhuma outra sintaxe é imposta. Você pode usar atributos como pattern e maxlength para restringir os valores inseridos no controle. As pseudoclasses CSS :valid e :invalid são aplicadas apropriadamente.|
|text| Um campo de texto com uma só linha; quebras de linha são automaticamente removidas do valor entrado.|
|time| Um controle para inserir um horário sem fuso horário.|
|url| Um campo para editar uma URL. O valor inserido é validado para ser vazio ou uma URL absoluta válida antes de ser enviado. Quebras de linha e espaços em branco antes e após o valor inserido são automaticamente removidos. Você pode usar atributos como pattern e maxlength para restringir os valores inseridos no controle. As pseudoclasses CSS :valid e :invalid são aplicadas apropriadamente.|
|week| Um controle para inserir uma data consistindo de ano da semana e número da semana sem fuso horário.|

As tags < textarea></ textarea>
     Assim como a tag < input>, essa tag define um campo para o formulário. Porém, diferentemente, ela tem como principal característica ser uma área de preenchimento de texto, ou seja, permite que o usuário escreva um texto ou uma mensagem no seu interior. Também traz opções para que o usuário redimensione seu tamanho (resize). Dessa forma, podemos incluir uma area de texto utilizando as tags < textarea>.

## Tag Select
O elemento HTML select < select> representa um controle que apresenta um menu de opções. As opções dentro do menu são representadas pelo elemento < option>, que podem ser agrupados por elementos < optgroup>. As opções podem ser pré-selecionadas para o usuário.

            exemplo:
            <form action="cadastro.js" method="post">
                <label for="estado">Estado</label>
                <select name="iestado" id="estado">
                    <option value="none"></option>
                    <optgroup label="Nordeste">
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                    </optgroup>
                    <optgroup label="Centro-oeste">>
                        <option value="DF">DF</option>
                        <option value="MT">MT</option>
                    </optgroup>
                    <optgroup label="Sudeste">
                        <option value="RJ">RJ</option>
                        <option value="SP">SP</option>
                    </optgroup>
                </select>
            </form>


## Tabelas
As tags que vão formar a estrutura básica de uma tabela em HTML são as tags <tr> e <td>. A tag <tr> representa uma linha e a tag <td> representa uma célula. Desta forma, a criação de colunas em uma tabela HTML é feita automaticamente através da quantidade de células incluídas dentro de uma linha. Por exemplo, vejamos na imagem abaixo como essa estrutura é formada:
![Tabela](../imagens/tabela.png)

     Estrutura básica de uma tabela:
     <tr>
     <td>Nome</td>
     <td>Idade</td>
     <td>Profissão</td>
     </tr>

Em algumas situações, temos a necessidade de utilizar uma mesclagem de célula, ou seja, criar uma célula que abrange mais do que uma linha ou coluna. Dessa forma, podemos utilizar os atributos colspan e rowspan. O colspan=”x” vai fazer uma mesclagem de colunas, e o rowspan=”y” vai mesclar linhas, bastando substituir o y pelo número de colunas ou linhas que deseja ocupar. Além disso, podemos também mesclar os dois em uma mesma célula.
     
     ex: <th colspan="2"> </th>
     para mesclar colunas na vertical

     ex: <th rowspan="2"> </th>
     para mesclar colunas na horizontal
<hr>
