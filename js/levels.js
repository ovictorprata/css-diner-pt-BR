var levels = [
  {
    helpTitle : "Selecione elementos pelo tipo",
    selectorName : "Seletor de Tipo",
    doThis : "Selecione os pratos",
    selector : "prato",
    syntax : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo refere-se ao tipo de tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos diferentes de elementos.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <prato/>
    <prato/>
    `
  },
  {
    doThis : "Selecione as guardanapos",
    selector : "guardanapo",
    syntax : "A",
    helpTitle : "Selecione elementos pelo tipo",
    selectorName : "Seletor de Tipo",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo refere-se ao tipo de tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos diferentes de elementos.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <guardanapo/>
    <prato/>
    <guardanapo/>
    `
  },
  {
    doThis : "Selecione o prato elegante",
    selector : "#elegante",
    selectorName: "Seletor de ID",
    helpTitle: "Selecione elementos com um ID",
    syntax: "#id",
    help : 'Seleciona o elemento com um <strong>id</strong> específico. Você também pode combinar o seletor de ID com o seletor de tipo.',
    examples : [
      '<strong>#maneiro</strong> seleciona qualquer elemento com <strong>id="maneiro"</strong>',
      '<strong>ul#longo</strong> seleciona <tag>ul id="longo"</tag>'
    ],
    boardMarkup : `
    <prato id="elegante"/>
    <prato/>
    <guardanapo/>
    `
  },
  {
    helpTitle: "Selecione um elemento dentro de outro elemento",
    selectorName : "Seletor de Descendente",
    doThis : "Selecione a maçã no prato",
    selector : "prato maca",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os elementos <strong>B</strong> dentro de <strong>A</strong>. <strong>B</strong> é chamado de descendente porque está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos os elementos <tag>strong</tag> que estão dentro de qualquer <tag>p</tag>',
      '<strong>#elegante&nbsp;&nbsp;span</strong> seleciona qualquer elemento <tag>span</tag> que esteja dentro do elemento com <strong>id="elegante"</strong>',
    ],
    boardMarkup : `
    <guardanapo/>
    <prato>
      <maca/>
    </prato>
    <maca/>
    `
  },
  {
    doThis : "Selecione o picles no prato elegante",
    selector : "#elegante picles",
    helpTitle: "Combinação dos Seletores Descendente & ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com o seletor de descendente.',
    examples : [
      '<strong>#maneiro&nbsp;span</strong> seleciona todos os elementos <tag>span</tag> que estão dentro de elementos com <strong>id="maneiro"</strong>'
    ],
    boardMarkup : `
    <guardanapo>
    <laranja/>
    </guardanapo>
    <prato id="elegante">
      <picles/>
    </prato>
    <prato>
      <picles/>
    </prato>
    `
  },
  {
    doThis : "Selecione as maçãs pequenas",
    selector : ".pequeno",
    selectorName: "Seletor de Classe",
    helpTitle: "Selecione elementos pela classe",
    syntax: ".nome-da-classe",
    help : 'O seletor de classe seleciona todos os elementos com esse atributo de classe. Os elementos podem ter apenas um ID, mas muitas classes.',
    examples : [
    '<strong>.puro</strong> seleciona todos os elementos com <strong>class="puro"</strong>'
    ],
    boardMarkup : `
    <maca/>
    <maca class="pequeno"/>
    <prato>
      <maca class="pequeno"/>
    </prato>
    <prato/>
    `
  },
  {
    doThis : "Selecione as laranjas pequenas",
    selector : "laranja.pequeno",
    helpTitle: "Combinação do Seletor de Classe",
    syntax: "A.nome-da-classe",
    help : 'Você pode combinar o seletor de classe com outros seletores, como o seletor de tipo.',
    examples : [
      '<strong>ul.importante</strong> seleciona todos os elementos <tag>ul</tag> que têm <strong>class="importante"</strong>',
      '<strong>#grande.largo</strong> seleciona todos os elementos com <strong>id="grande"</strong> que também têm <strong>class="largo"</strong>'
    ],
    boardMarkup :`
    <maca/>
    <maca class="pequeno"/>
    <guardanapo>
      <laranja class="pequeno"/>
    </guardanapo>
    <prato>
      <laranja/>
    </prato>
    <prato>
      <laranja class="pequeno"/>
    </prato>`
  },
  {
    doThis : "Selecione as laranjas pequenas nas guardanapos",
    selector : "guardanapo laranja.pequeno",
    syntax: "BORAA! Você dá conta!",
    helpTitle: "Você consegue...",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver este!',
    boardMarkup : `
    <guardanapo>
      <laranja/>
    </guardanapo>
    <laranja class="pequeno"/>
    <guardanapo>
      <laranja class="pequeno"/>
    </guardanapo>
    <guardanapo>
      <maca class="pequeno"/>
    </guardanapo>
    <guardanapo>
      <laranja class="pequeno"/>
    </guardanapo>
    `
  },
  {
    doThis : "Selecione todos os pratos e guardanapos",
    selector : "prato,guardanapo",
    selectorName : "Combinador de Vírgula",
    helpTitle: "Combine, seletores, com... vírgulas!",
    syntax : "A, B",
    help : 'Graças à tecnologia Shatner, isso seleciona todos os elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar quaisquer seletores dessa maneira, e pode especificar mais de dois.',
    examples: [
    '<strong>p, .divertido</strong> seleciona todos os elementos <tag>p</tag> e também todos os elementos com <strong>class="divertido"</strong>',
    '<strong>a, p, div</strong> seleciona todos os elementos <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    boardMarkup : `
    <picles class="pequeno"/>
    <picles/>
    <prato>
      <picles/>
    </prato>
    <guardanapo>
      <picles/>
    </guardanapo>
    <prato>
      <picles/>
    </prato>
    <picles/>
    <picles class="pequeno"/>
    `
  },
  {
    "doThis": "Selecione todas as coisas!",
    "selector": "*",
    "selectorName": "O Seletor Universal",
    "helpTitle": "Você pode selecione tudo!",
    "syntax": "*",
    "help": "Você pode selecione todos os elementos com o seletor universal!",
    "examples": [
      "<strong>p *</strong> seleciona qualquer elemento dentro de todos os elementos <tag>p</tag>.",
    ],
    "boardMarkup": "\n<maca/>\n<prato>\n  <laranja class=\"pequeno\" />\n</prato>\n<guardanapo/>\n<guardanapo>\n  <laranja/>\n</guardanapo>\n<prato id=\"elegante\"/>\n"
  },  
  {
    "doThis": "Selecione tudo em um prato",
    "selector": "prato *",
    "syntax": "A&nbsp;&nbsp;*",
    "helpTitle": "Combine o Seletor Universal",
    "help": "Isso seleciona todos os elementos dentro de <strong>A</strong>.",
    "examples": [
      "<strong>p *</strong> seleciona todos os elementos dentro de todos os elementos <tag>p</tag>.",
      "<strong>ul.elegante *</strong> seleciona todos os elementos dentro de todos os elementos <tag>ul class=\"elegante\"</tag>."
    ],
    "boardMarkup": "\n<prato id=\"elegante\">\n  <laranja class=\"pequeno\"/>\n</prato>\n<prato>\n  <picles/>\n</prato>\n<maca class=\"pequeno\"/>\n<prato>\n  <maca/>\n</prato>"
  },
  {
    "doThis": "Selecione todas as maçãs que estão ao lado de um prato",
    "selector": "prato + maca",
    "helpTitle": "Selecione um elemento que segue diretamente outro elemento",
    "selectorName": "Seletor de Irmão Adjacente",
    "syntax": "A + B",
    "help": "Isso seleciona todos os elementos <strong>B</strong> que seguem diretamente <strong>A</strong>. Elementos que seguem um ao outro são chamados de irmãos. Eles estão no mesmo nível, ou profundidade. <br/><br/>No markup HTML deste nível, elementos com a mesma indentação são irmãos.",
    "examples": [
      "<strong>p + .intro</strong> seleciona todos os elementos com <strong>class=\"intro\"</strong> que seguem diretamente um <tag>p</tag>",
      "<strong>div + a</strong> seleciona todos os elementos <tag>a</tag> que seguem diretamente um <tag>div</tag>"
    ],
    "boardMarkup": "\n<guardanapo>\n  <maca class=\"pequeno\"/>\n</guardanapo>\n<prato />\n<maca class=\"pequeno\"/>\n<prato />\n<maca/>\n<maca class=\"pequeno\"/>\n<maca class=\"pequeno\"/>\n"
  },
  {
    "selectorName": "Seletor de Irmão Geral",
    "helpTitle": "Selecione elementos que seguem outro elemento",
    "syntax": "A ~ B",
    "doThis": "Selecione os picles ao lado do guardanapo",
    "selector": "guardanapo ~ picles",
    "help": "Você pode selecione todos os irmãos de um elemento que o seguem. Isso é semelhante ao Seletor Adjacente (A + B), exceto que ele obtém todos os elementos seguintes em vez de apenas um.",
    "examples": [
      "<strong>A ~ B</strong> seleciona todos os <strong>B</strong> que são irmãos de um <strong>A</strong>"
    ],
    "boardMarkup": "\n<picles/>\n<guardanapo>\n  <laranja class=\"pequeno\"/>\n</guardanapo>\n<picles class=\"pequeno\"/>\n<picles/>\n<prato>\n  <picles/>\n</prato>\n<prato>\n  <picles class=\"pequeno\"/>\n</prato>\n"
  },
  {
    "selectorName": "Seletor de Filho",
    "syntax": "A > B&nbsp;",
    "doThis": "Selecione a maçã que é filha direta de um prato",
    "selector": "prato > maca",
    "helpTitle": "Selecione filhos diretos de um elemento",
    "help": "Você pode selecione elementos que são filhos diretos de outros elementos. Um elemento filho é qualquer elemento que está diretamente aninhado em outro elemento. <br><br>Elementos que são aninhados mais profundamente são chamados de elementos descendentes.",
    "examples": [
      "<strong>A > B</strong> seleciona todos os <strong>B</strong> que são filhos diretos de <strong>A</strong>"
    ],
    "boardMarkup": "\n<prato>\n  <guardanapo>\n    <maca/>\n  </guardanapo>\n</prato>\n<prato>\n  <maca/>\n</prato>\n<prato/>\n<maca/>\n<maca class=\"pequeno\"/>\n"
  },
  {
    "selectorName": "Seletor de Atributo",
    "helpTitle": "Selecione todos os elementos que têm um atributo específico",
    "doThis": "Selecione os itens que são de alguém",
    "selector": "[for]",
    "syntax": "[atributo]",
    "help": "Os atributos aparecem dentro da tag de abertura de um elemento, assim: <tag>span atributo=\"valor\"</tag>. Um atributo nem sempre tem um valor, pode estar vazio!",
    "examples": [
      "<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que têm um atributo <strong>href=\"alguma-coisa\"</strong>.",
      "<strong>[type]</strong> seleciona todos os elementos que têm um  atributo <strong>type=\"alguma-coisa\"</strong>"
    ],
    "boardMarkup": "\n<guardanapo><maca class=\"pequeno\"/></guardanapo>\n<maca for=\"Victor\"/>\n<prato for=\"Prata\"><picles/></prato>\n<guardanapo for=\"Clara\"><laranja/></guardanapo>\n<picles/>\n"
  },
  
  {
    "selectorName": "Seletor de Atributo",
    "helpTitle": "Selecione todos os elementos que têm um atributo específico",
    "doThis": "Selecione os pratos que são de alguém",
    "selector": "prato[for]",
    "syntax": "A[atributo]",
    "help": "Combine o seletor de atributo com outro seletor (como o seletor de nome da tag) adicionando-o ao final.",
    "examples": [
      "<strong>[value]</strong> seleciona todos os elementos que têm um atributo <strong>value=\"alguma-coisa\"</strong>.",
      "<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que têm um atributo <strong>href=\"alguma-coisa\"</strong>.",
      "<strong>input[disabled]</strong> seleciona todos os elementos <tag>input</tag> com o atributo <strong>disabled</strong>"
    ],
    "boardMarkup": "\n<prato for=\"Sarah\"><picles/></prato>\n<prato for=\"Prata\"><maca/></prato>\n<prato/>\n<guardanapo for=\"Victor\"><laranja/></guardanapo>\n"
  },
  {
    "selectorName": "Seletor de Valor de Atributo",
    "helpTitle": "Selecione todos os elementos que têm um valor específico de atributo",
    "doThis": "Selecione a refeição do Prata",
    "selector": "[for=Prata]",
    "syntax": '[atributo="valor"]',
    "help": "Os seletores de atributo são sensíveis a maiúsculas e minúsculas, cada caractere deve corresponder exatamente.",
    "examples": [
      "<strong>input[type=\"checkbox\"]</strong> seleciona todos os elementos de input do tipo checkbox."
    ],
    "boardMarkup": "\n<maca for=\"Alex\" />\n<guardanapo for=\"Fernanda\"><maca /></guardanapo>\n<guardanapo for=\"Prata\"><laranja/></guardanapo>\n<picles/>\n"
  },
  {
    "selectorName": "Seletor de Começa Com",
    "helpTitle": "Selecione todos os elementos com um valor de atributo que começa com caracteres específicos",
    "doThis": "Selecione os itens para nomes que começam com 'Vi'",
    "selector": '[for^="Vi"]',
    "syntax": '[atributo^="valor"]',
    "examples": [
      "<strong>.brinquedo[categoria^=\"Es\"]</strong> seleciona elementos com a classe <strong>brinquedo</strong> e com <strong>categoria=\"Esportes\"</strong> ou <strong>categoria=\"Estratégia\"</strong>."
    ],
    "boardMarkup": "\n<prato for=\"Vinicius\"><picles/></prato>\n<guardanapo for=\"Victor\"><maca class=\"pequeno\"/></guardanapo>\n<guardanapo for=\"Cláudio\"><laranja/></guardanapo>\n"
  },
  {
    "selectorName": "Seletor de Termina Com",
    "helpTitle": "Selecione todos os elementos com um valor de atributo que termina com caracteres específicos",
    "doThis": "Selecione os itens para nomes que terminam com 'ina'",
    "selector": '[for$="ina"]',
    "syntax": '[atributo$="valor"]',
    "help": "",
    "examples": [
      "<strong>img[src$=\".jpg\"]</strong> seleciona todas as imagens que exibem uma imagem <strong>.jpg</strong>.",
    ],
    "boardMarkup": "\n<maca class=\"pequeno\"/>\n<guardanapo for=\"Betina\"><picles/></guardanapo>\n<maca for=\"Bianca\"></maca>\n<prato for=\"Marina\"><laranja/></prato>\n<picles class=\"pequeno\"/>\n"
  },
  {
    "selectorName": "Seletor de Coringa de Atributo",
    "helpTitle": "Selecione todos os elementos com um valor de atributo que contém caracteres específicos em qualquer lugar",
    "syntax": '[atributo*="valor"]',
    "doThis": "Selecione as refeições para nomes que contenham 'nie'",
    "selector": '[for*="nie"]',
    "help": "Um seletor útil se você pode identificar um padrão comum em coisas como <strong>class</strong>, <strong>href</strong> ou atributos <strong>src</strong>.",
    "examples": [
      "<strong>img[src*=\"/thumbnails/\"]</strong> seleciona todos os elementos de imagem que exibem imagens da pasta \"thumbnails\".",
      "<strong>[class*=\"cabecalho\"]</strong> seleciona todos os elementos com \"cabecalho\" em sua classe, como <strong>class=\"cabecalho-principal\"</strong> e <strong>class=\"sub-cabecalho\"</strong>"
    ],
    "boardMarkup": "\n<guardanapo for=\"Daniela\"><maca /></guardanapo>\n<guardanapo for=\"Gabriela\"><picles /></guardanapo>\n<guardanapo for=\"Danielly\"><laranja /></guardanapo>\n"
  },
  {
    "selectorName": "Seletor Vazio",
    "helpTitle": "Selecione elementos que não têm filhos",
    "doThis": "Selecione as guardanapos vazias",
    "selector": "guardanapo:empty",
    "syntax": ":empty",
    "help": "Seleciona elementos que não têm nenhum outro elemento dentro deles.",
    "examples": [
      "<strong>div:empty</strong> seleciona todos os elementos <tag>div</tag> vazios."
    ],
    "boardMarkup": "\n<guardanapo/>\n<guardanapo>\n  <picles class=\"pequeno\"/>\n</guardanapo>\n<prato/>\n<guardanapo/>\n"
  },
  {
    "selectorName": "Pseudo-classe de Negação",
    "helpTitle": "Selecione todos os elementos que não correspondem ao seletor de negação",
    "doThis": "Selecione as maçãs grandes",
    "selector": "maca:not(.pequeno)",
    "syntax": ":not(X)",
    "help": "Você pode usar isso para selecione todos os elementos que não correspondem ao seletor <strong>\"X\"</strong>.",
    "examples": [
      "<strong>:not(#elegante)</strong> seleciona todos os elementos que não têm <strong>id=\"elegante\"</strong>.",
      "<strong>div:not(:first-child)</strong> seleciona todos os <tag>div</tag> que não são o primeiro filho.",
      "<strong>:not(.grande, .medio)</strong> seleciona todos os elementos que não têm <strong>class=\"grande\"</strong> ou <strong>class=\"medio\"</strong>."
    ],
    "boardMarkup": "\n<prato id=\"elegante\">\n  <maca class=\"pequeno\" />\n</prato>\n<prato>\n  <maca />\n</prato>\n<maca />\n<prato>\n  <laranja class=\"pequeno\" />\n</prato>\n<picles class=\"pequeno\" />\n"
  },
  {
    "selectorName": "Pseudo-seletor Primeiro Filho",
    "helpTitle": "Selecione um elemento primeiro filho dentro de outro elemento",
    "doThis": "Selecione a laranja de cima",
    "selector": "prato :first-child",
    "syntax": ":first-child",
  
    "help": "Você pode selecione o primeiro elemento filho. Um elemento filho é qualquer elemento que está diretamente aninhado em outro elemento. Você pode combinar este pseudo-seletor com outros seletores.",
    "examples": [
      "<strong>:first-child</strong> seleciona todos os elementos primeiro filho.",
      "<strong>p:first-child</strong> seleciona todos os elementos primeiro filho <tag>p</tag>.",
      "<strong>div p:first-child</strong> seleciona todos os elementos primeiro filho <tag>p</tag> que estão em um <tag>div</tag>."
    ],
    "boardMarkup": "\n<guardanapo/>\n<prato />\n<prato>\n  <laranja />\n  <laranja />\n  <laranja />\n</prato>\n<picles class=\"pequeno\" />\n"
  },
  {
    "selectorName": "Pseudo-seletor Único Filho",
    "helpTitle": "Selecione um elemento que é o único elemento dentro de outro.",
    "doThis": "Selecione a maçã e o picles nos pratos",
    "selector": "prato :only-child",
    "syntax": ":only-child",
    "help": "Você pode selecione qualquer elemento que seja o único elemento dentro de outro.",
    "examples": [
      "<strong>span:only-child</strong> seleciona os elementos <tag>span</tag> que são o único filho de algum outro elemento.",
      "<strong>ul li:only-child</strong> seleciona o único elemento <tag>li</tag> que está em um <tag>ul</tag>."
    ],
    "boardMarkup": "\n<prato>\n  <maca/>\n</prato>\n<prato>\n  <picles />\n</prato>\n<guardanapo>\n  <picles />\n</guardanapo>\n<prato>\n  <laranja class=\"pequeno\"/>\n  <laranja/>\n</prato>\n<picles class=\"pequeno\"/>\n"
  },
  {
    "selectorName": "Pseudo-seletor Último Filho",
    "helpTitle": "Selecione o último elemento dentro de outro elemento",
    "doThis": "Selecione a maçã pequena e o picles",
    "selector": ".pequeno:last-child",
    "syntax": ":last-child",
    "help": "Você pode usar este seletor para selecione um elemento que é o último filho dentro de outro elemento. <br><br>Dica Pro &rarr; Em casos onde há apenas um elemento, aquele elemento conta como o primeiro filho, único filho e último filho!",
    "examples": [
      "<strong>:last-child</strong> seleciona todos os elementos último filho.",
      "<strong>span:last-child</strong> seleciona todos os elementos último filho <tag>span</tag>.",
      "<strong>ul li:last-child</strong> seleciona os últimos elementos <tag>li</tag> dentro de qualquer <tag>ul</tag>."
    ],
    "boardMarkup": "\n<prato id=\"elegante\">\n  <maca class=\"pequeno\"/>\n</prato>\n<prato/>\n<prato>\n  <laranja class=\"pequeno\"/>\n  <laranja>\n</prato>\n<picles class=\"pequeno\"/>"
  },
  {
    "selectorName": "Seletor Nth Child",
    "helpTitle": "Selecione um elemento pela sua ordem em outro elemento",
    "doThis": "Selecione o 3º prato",
    "selector": ":nth-child(3)",
    "syntax": ":nth-child(A)",
    "help": "Seleciona o elemento <strong>nth</strong> (por exemplo: 1º, 3º, 12º etc.) filho em outro elemento.",
    "examples": [
      "<strong>:nth-child(8)</strong> seleciona todos os elementos que são o 8º filho de outro elemento.",
      "<strong>div p:nth-child(2)</strong> seleciona o segundo <strong>p</strong> em todos os <strong>div</strong>."
    ],
    "boardMarkup": "\n<prato/>\n<prato/>\n<prato/>\n<prato id=\"elegante\"/>\n"
  },
  {
    "selectorName": "Seletor Nth Last Child",
    "helpTitle": "Selecione um elemento pela sua ordem em outro elemento, contando do final",
    "doThis": "Selecione a 1º guardanapo",
    "selector": "guardanapo:nth-last-child(3)",
    "syntax": ":nth-last-child(A)",
    "help": "Seleciona os filhos a partir do final do pai. É como o nth-child, mas contando do final!",
    "examples": [
      "<strong>:nth-last-child(2)</strong> seleciona todos os elementos que são o penúltimo filho."
    ],
    "boardMarkup": "\n<prato/>\n<guardanapo/>\n<prato>\n  <laranja/>\n  <laranja/>\n  <laranja/>\n</prato>\n<guardanapo/>\n"
  },
  {
    "selectorName": "Primeiro do Tipo Selector",
    "helpTitle": "Selecione o primeiro elemento de um tipo específico",
    "doThis": "Selecione a primeira maçã",
    "selector": "maca:first-of-type",
    "syntax": ":first-of-type",
    "help": "Seleciona o primeiro elemento desse tipo dentro de outro elemento.",
    "examples": [
      "<strong>span:first-of-type</strong> seleciona o primeiro <tag>span</tag> em qualquer elemento."
    ],
    "boardMarkup": "\n<laranja class=\"pequeno\"/>\n<maca/>\n<maca class=\"pequeno\"/>\n<maca/>\n<maca class=\"pequeno\"/>\n<prato>\n  <laranja class=\"pequeno\"/>\n  <laranja/>\n</prato>\n"
  },
  {
    "selectorName": "Nth do Tipo Selector",
    "doThis": "Selecione todos os pratos pares",
    "selector": "prato:nth-of-type(even)",
    "syntax": ":nth-of-type(A)",
    "help": "Seleciona um elemento específico com base no seu tipo e ordem em outro elemento - ou instâncias pares ou ímpares desse elemento.",
    "examples": [
      "<strong>div:nth-of-type(2)</strong> seleciona a segunda instância de um div.",
      "<strong>.example:nth-of-type(odd)</strong> seleciona todas as instâncias ímpares da classe example."
    ],
    "boardMarkup": "\n<prato/>\n<prato/>\n<prato/>\n<prato/>\n<prato id=\"elegante\"/>\n<prato/>\n"
  },
  {
    "selectorName": "Nth-of-type Selector com Fórmula",
    "doThis": "Selecione todo 2º prato, começando do 3º",
    "selector": "prato:nth-of-type(2n+3)",
    "syntax": ":nth-of-type(An+B)",
    "help": "A fórmula nth-of-type seleciona cada elemento nth, começando a contar de uma instância específica desse elemento.",
    "examples": [
      "<strong>span:nth-of-type(6n+2)</strong> seleciona cada 6ª instância de um <tag>span</tag>, começando (e incluindo) a segunda instância."
    ],
    "boardMarkup": "\n<prato/>\n<prato>\n  <picles class=\"pequeno\"/>\n</prato>\n<prato>\n  <maca class=\"pequeno\"/>\n</prato>\n<prato/>\n<prato>\n  <maca/>\n</prato>\n<prato/>\n"
  },
  {
    "selectorName": "Apenas do Tipo Selector",
    "helpTitle": "Selecione elementos que são os únicos do seu tipo dentro do seu elemento pai",
    "selector": "maca:only-of-type",
    "syntax": ":only-of-type",
    "doThis": "Selecione a maçã no prato do meio",
    "help": "Seleciona o único elemento do seu tipo dentro de outro elemento.",
    "examples": [
      "<strong>p span:only-of-type</strong> seleciona um <tag>span</tag> dentro de qualquer <tag>p</tag> se for o único <tag>span</tag> ali."
    ],
    "boardMarkup": "\n<prato id=\"elegante\">\n  <maca class=\"pequeno\"/>\n  <maca/>\n</prato>\n<prato>\n  <maca class=\"pequeno\"/>\n</prato>\n<prato>\n  <picles/>\n</prato>\n"
  },
  
  {
    "selectorName": "Último do Tipo Selector",
    "helpTitle": "Selecione o último elemento de um tipo específico",
    "doThis": "Selecione a última maçã e a última laranja",
    "selector": ".pequeno:last-of-type",
    "syntax": ":last-of-type",
    "help": "Seleciona cada último elemento desse tipo dentro de outro elemento. Lembre-se que tipo refere-se ao tipo da tag, então <tag>p</tag> e <tag>span</tag> são tipos diferentes. <br><br> Eu me pergunto se foi assim que o último dinossauro foi selecionado antes de ficar extinto.",
    "examples": [
      "<strong>div:last-of-type</strong> seleciona o último <tag>div</tag> em todos os elementos.",
      "<strong>p span:last-of-type</strong> seleciona o último <tag>span</tag> em todos os <tag>p</tag>."
    ],
    "boardMarkup": "\n<laranja class=\"pequeno\"/>\n<laranja class=\"pequeno\" />\n<picles />\n<picles />\n<maca class=\"pequeno\" />\n<maca class=\"pequeno\" />\n"
  }
];
