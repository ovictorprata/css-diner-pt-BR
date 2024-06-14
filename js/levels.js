var levels = [
  {
    helpTitle : "Selecionar elementos pelo tipo",
    selectorName : "Seletor de Tipo",
    doThis : "Selecionar os pratos",
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
    doThis : "Selecionar as caixas marmita",
    selector : "marmita",
    syntax : "A",
    helpTitle : "Selecionar elementos pelo tipo",
    selectorName : "Seletor de Tipo",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo refere-se ao tipo de tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos diferentes de elementos.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <marmita/>
    <prato/>
    <marmita/>
    `
  },
  {
    doThis : "Selecionar o prato elegante",
    selector : "#elegante",
    selectorName: "Seletor de ID",
    helpTitle: "Selecionar elementos com um ID",
    syntax: "#id",
    help : 'Seleciona o elemento com um <strong>id</strong> específico. Você também pode combinar o seletor de ID com o seletor de tipo.',
    examples : [
      '<strong>#cool</strong> seleciona qualquer elemento com <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleciona <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <prato id="elegante"/>
    <prato/>
    <marmita/>
    `
  },
  {
    helpTitle: "Selecionar um elemento dentro de outro elemento",
    selectorName : "Seletor de Descendente",
    doThis : "Selecionar a maçã no prato",
    selector : "prato maca",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os elementos <strong>B</strong> dentro de <strong>A</strong>. <strong>B</strong> é chamado de descendente porque está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos os elementos <tag>strong</tag> que estão dentro de qualquer <tag>p</tag>',
      '<strong>#elegante&nbsp;&nbsp;span</strong> seleciona qualquer elemento <tag>span</tag> que esteja dentro do elemento com <strong>id="elegante"</strong>',
    ],
    boardMarkup : `
    <marmita/>
    <prato>
      <maca/>
    </prato>
    <maca/>
    `
  },
  {
    doThis : "Selecionar o picles no prato elegante",
    selector : "#elegante pickle",
    helpTitle: "Combinação dos Seletores Descendente & ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com o seletor de descendente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> seleciona todos os elementos <tag>span</tag> que estão dentro de elementos com <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <marmita>
    <laranja/>
    </marmita>
    <prato id="elegante">
      <pickle/>
    </prato>
    <prato>
      <pickle/>
    </prato>
    `
  },
  {
    doThis : "Selecionar as maçãs pequenas",
    selector : ".small",
    selectorName: "Seletor de Classe",
    helpTitle: "Selecionar elementos pela classe",
    syntax: ".classname",
    help : 'O seletor de classe seleciona todos os elementos com esse atributo de classe. Os elementos podem ter apenas um ID, mas muitas classes.',
    examples : [
    '<strong>.neato</strong> seleciona todos os elementos com <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <maca/>
    <maca class="small"/>
    <prato>
      <maca class="small"/>
    </prato>
    <prato/>
    `
  },
  {
    doThis : "Selecionar as laranjas pequenas",
    selector : "laranja.small",
    helpTitle: "Combinação do Seletor de Classe",
    syntax: "A.className",
    help : 'Você pode combinar o seletor de classe com outros seletores, como o seletor de tipo.',
    examples : [
      '<strong>ul.important</strong> seleciona todos os elementos <tag>ul</tag> que têm <strong>class="important"</strong>',
      '<strong>#big.wide</strong> seleciona todos os elementos com <strong>id="big"</strong> que também têm <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <maca/>
    <maca class="small"/>
    <marmita>
      <laranja class="small"/>
    </marmita>
    <prato>
      <laranja/>
    </prato>
    <prato>
      <laranja class="small"/>
    </prato>`
  },
  {
    doThis : "Selecionar as laranjas pequenas nos marmitas",
    selector : "marmita laranja.small",
    syntax: "Coloque seu esforço nisso!",
    helpTitle: "Você consegue...",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver este!',
    boardMarkup : `
    <marmita>
      <laranja/>
    </marmita>
    <laranja class="small"/>
    <marmita>
      <laranja class="small"/>
    </marmita>
    <marmita>
      <maca class="small"/>
    </marmita>
    <marmita>
      <laranja class="small"/>
    </marmita>
    `
  },
  {
    doThis : "Selecionar todos os pratos e marmitas",
    selector : "prato,marmita",
    selectorName : "Combinador de Vírgula",
    helpTitle: "Combine, seletores, com... vírgulas!",
    syntax : "A, B",
    help : 'Graças à tecnologia Shatner, isso seleciona todos os elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar quaisquer seletores dessa maneira, e pode especificar mais de dois.',
    examples: [
    '<strong>p, .fun</strong> seleciona todos os elementos <tag>p</tag> e também todos os elementos com <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> seleciona todos os elementos <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <prato>
      <pickle/>
    </prato>
    <marmita>
      <pickle/>
    </marmita>
    <prato>
      <pickle/>
    </prato>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Selecionar todas as coisas!",
    selector : "*",
    selectorName:  "O Seletor Universal",
    helpTitle: "Você pode selecionar tudo!",
    syntax : "*",
    help : 'Você pode selecionar todos os elementos com o seletor universal! ',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de todos os elementos <tag>p</tag>.',
    ],
    boardMarkup : `
    <maca/>
    <prato>
      <laranja class="small" />
    </prato>
    <marmita/>
    <marmita>
      <laranja/>
    </marmita>
    <prato id="elegante"/>
    `
  },
  {
    "title": "Agrupar Seletores: o Melhor dos Dois Mundos",
    "introduction": "Quando você combina múltiplos seletores juntos, você pode selecionar exatamente o que você quer, sem qualquer confusão. Lembre-se, a ordem é importante. <br><br>Encontre mais exemplos do Agrupamento de Seletores em https://example.com",
    "examples": [
      {
        "doThis": "Selecione tudo em um prato",
        "selector": "prato *",
        "syntax": "A&nbsp;&nbsp;*",
        "helpTitle": "Combine o Seletor Universal",
        "help": "Isso seleciona todos os elementos dentro de <strong>A</strong>.",
        "exemplos": [
          "<strong>p *</strong> seleciona todos os elementos dentro de todos os elementos <tag>p</tag>.",
          "<strong>ul.elegante *</strong> seleciona todos os elementos dentro de todos os elementos <tag>ul class=\"elegante\"</tag>."
        ],
        "boardMarkup": "<prato id=\"elegante\">\n  <laranja class=\"small\"/>\n</prato>\n<prato>\n  <pickle/>\n</prato>\n<maca class=\"small\"/>\n<prato>\n  <maca/>\n</prato>"
      },
      {
        "doThis": "Selecione cada maçã que está ao lado de um prato",
        "selector": "prato + maca",
        "helpTitle": "Selecione um elemento que segue diretamente outro elemento",
        "selectorName": "Seletor de Irmãos Adjacentes",
        "syntax": "A + B",
        "help": "Isso seleciona todos os elementos <strong>B</strong> que seguem diretamente <strong>A</strong>. Elementos que seguem um ao outro são chamados de irmãos. Eles estão no mesmo nível ou profundidade. <br/><br/>No marcado HTML para este nível, elementos com a mesma endentação são irmãos.",
        "exemplos": [
          "<strong>p + .intro</strong> seleciona todos os elementos com <strong>class=\"intro\"</strong> que seguem diretamente um <tag>p</tag>",
          "<strong>div + a</strong> seleciona todos os elementos <tag>a</tag> que seguem diretamente um <tag>div</tag>"
        ],
        "boardMarkup": "<marmita>\n  <maca class=\"small\"/>\n</marmita>\n<prato/>\n<maca class=\"small\"/>\n<prato/>\n<maca/>\n<maca class=\"small\"/>\n<maca class=\"small\"/>"
      },
      {
        "selectorName": "Seletor de Irmãos Gerais",
        "helpTitle": "Selecione elementos que seguem outro elemento",
        "syntax": "A ~ B",
        "doThis": "Selecione os picles ao lado do marmita",
        "selector": "marmita ~ pickle",
        "help": "Você pode selecionar todos os irmãos de um elemento que o seguem. Isso é como o Seletor Adjacente (A + B), exceto que ele pega todos os elementos seguintes em vez de um.",
        "exemplos": [
          "<strong>A ~ B</strong> seleciona todos os <strong>B</strong> que seguem um <strong>A</strong>"
        ],
        "boardMarkup": "<pickle/>\n<marmita>\n  <laranja class=\"small\"/>\n</marmita>\n<pickle class=\"small\"/>\n<pickle/>\n<prato>\n  <pickle/>\n</prato>\n<prato>\n  <pickle class=\"small\"/>\n</prato>"
      },
      {
        "selectorName": "Seletor de Filho",
        "syntax": "A > B&nbsp;",
        "doThis": "Selecione a maçã diretamente em um prato",
        "selector": "prato > maca",
        "helpTitle": "Selecione filhos diretos de um elemento",
        "help": "Você pode selecionar elementos que são filhos diretos de outros elementos. Um elemento filho é qualquer elemento que está aninhado diretamente em outro elemento. <br><br>Elementos que são aninhados mais profundamente do que isso são chamados de elementos descendentes.",
        "exemplos": [
          "<strong>A > B</strong> seleciona todos os <strong>B</strong> que são filhos diretos de <strong>A</strong>"
        ],
        "boardMarkup": "<prato>\n  <marmita>\n    <maca/>\n  </marmita>\n</prato>\n<prato>\n  <maca/>\n</prato>\n<prato/>\n<maca/>\n<maca class=\"small\"/>"
      },
      {
        "selectorName": "Pseudo-seletor do Primeiro Filho",
        "helpTitle": "Selecione um elemento de primeiro filho dentro de outro elemento",
        "doThis": "Selecione a laranja superior",
        "selector": "prato :first-child",
        "syntax": ":first-child",
        "help": "Você pode selecionar o primeiro elemento filho. Um elemento filho é qualquer elemento que está diretamente aninhado em outro elemento. Você pode combinar este pseudo-seletor com outros seletores.",
        "exemplos": [
          "<strong>:first-child</strong> seleciona todos os elementos de primeiro filho.",
          "<strong>p:first-child</strong> seleciona todos os elementos de primeiro filho <tag>p</tag>.",
          "<strong>div p:first-child</strong> seleciona todos os elementos de primeiro filho <tag>p</tag> que estão em um <tag>div</tag>."
        ],
        "boardMarkup": "<marmita/>\n<prato/>\n<prato>\n  <laranja/>\n  <laranja/>\n  <laranja/>\n</prato>\n<pickle class=\"small\"/>"
      },
      {
        "selectorName": "Pseudo-seletor do Único Filho",
        "helpTitle": "Selecione um elemento que é o único elemento dentro de outro",
        "doThis": "Selecione a maçã e o picle nos pratos",
        "selector": "prato :only-child",
        "syntax": ":only-child",
        "help": "Você pode selecionar qualquer elemento que seja o único elemento dentro de outro.",
        "exemplos": [
          "<strong>span:only-child</strong> seleciona os elementos <tag>span</tag> que são o único filho de algum outro elemento.",
          "<strong>ul li:only-child</strong> seleciona o único <tag>li</tag> que está em um <tag>ul</tag>."
        ],
        "boardMarkup": "<prato>\n  <maca/>\n</prato>\n<prato>\n  <pickle/>\n</prato>\n<marmita>\n  <pickle/>\n</marmita>\n<prato>\n  <laranja class=\"small\"/>\n  <laranja/>\n</prato>\n<pickle class=\"small\"/>"
      },
      {
        "selectorName": "Pseudo-seletor do Último Filho",
        "helpTitle": "Selecione o último elemento dentro de outro elemento",
        "doThis": "Selecione a maçã pequena e o picle",
        "selector": ".small:last-child",
        "syntax": ":last-child",
        "help": "Você pode usar este seletor para selecionar um elemento que é o último elemento filho dentro de outro elemento. <br><br>Pro Dica &rarr; Em casos onde há apenas um elemento, esse elemento conta como primeiro filho, único filho e último filho!",
        "exemplos": [
          "<strong>:last-child</strong> seleciona todos os elementos de último filho.",
          "<strong>span:last-child</strong> seleciona todos os elementos de último filho <tag>span</tag>.",
          "<strong>ul li:last-child</strong> seleciona os últimos elementos <tag>li</tag> dentro de qualquer <tag>ul</tag>."
        ],
        "boardMarkup": "<prato id=\"elegante\">\n  <maca class=\"small\"/>\n</prato>\n<prato/>\n<prato>\n  <laranja class=\"small\"/>\n  <laranja>\n</prato>\n<pickle class=\"small\"/>"
      }
    ]
  },  
  {
    "selectorName": "Nth Child Pseudo-selector",
    "helpTitle": "Selecionar um elemento pela sua ordem dentro de outro elemento",
    "doThis": "Selecionar o 3º prato",
    "selector": ":nth-child(3)",
    "syntax": ":nth-child(A)",
    "help": "Seleciona o <strong>ésimo</strong> (Ex: 1º, 3º, 12º etc.) elemento filho em outro elemento.",
    "examples": [
      "<strong>:nth-child(8)</strong> seleciona todo elemento que é o 8º filho de outro elemento.",
      "<strong>div p:nth-child(2)</strong> seleciona o segundo <strong>p</strong> em cada <strong>div</strong>"
    ],
    "boardMarkup": `
    <prato/>
    <prato/>
    <prato/>
    <prato id="elegante"/>
    `
  },
  {
    "selectorName": "Nth Last Child Selector",
    "helpTitle": "Selecionar um elemento pela sua ordem dentro de outro elemento, contando de trás para frente",
    "doThis": "Selecionar o 1º marmita",
    "selector": "marmita:nth-last-child(3)",
    "syntax": ":nth-last-child(A)",
    "help": "Seleciona os filhos a partir do fundo do pai. Isso é como nth-child, mas contando de trás para frente!",
    "examples": [
      "<strong>:nth-last-child(2)</strong> seleciona todos os elementos que são o penúltimo filho."
    ],
    "boardMarkup": `
    <prato/>
    <marmita/>
    <prato>
      <laranja/>
      <laranja/>
      <laranja/>
    </prato>
    <marmita/>
    `
  },
  {
    "selectorName": "First of Type Selector",
    "helpTitle": "Selecionar o primeiro elemento de um tipo específico",
    "doThis": "Selecionar a primeira maçã",
    "selector": "maca:first-of-type",
    "syntax": ":first-of-type",
    "help": "Seleciona o primeiro elemento desse tipo dentro de outro elemento.",
    "examples": [
      "<strong>span:first-of-type</strong> seleciona o primeiro <tag>span</tag> em qualquer elemento."
    ],
    "boardMarkup": `
    <laranja class="small"/>
    <maca/>
    <maca class="small"/>
    <maca/>
    <maca class="small"/>
    <prato>
      <laranja class="small"/>
      <laranja/>
    </prato>
    `
  },
  {
    "selectorName": "Nth of Type Selector",
    "doThis": "Selecionar todos os pratos pares",
    "selector": "prato:nth-of-type(even)",
    "syntax": ":nth-of-type(A)",
    "help": "Seleciona um elemento específico com base em seu tipo e ordem em outro elemento - ou instâncias pares ou ímpares desse elemento.",
    "examples": [
      "<strong>div:nth-of-type(2)</strong> seleciona a segunda instância de um div.",
      "<strong>.example:nth-of-type(odd)</strong> seleciona todas as instâncias ímpares de uma classe de exemplo."
    ],
    "boardMarkup": `
    <prato/>
    <prato/>
    <prato/>
    <prato/>
    <prato id="elegante"/>
    <prato/>
    `
  },
  {
    "selectorName": "Nth-of-type Selector with Formula",
    "doThis": "Selecionar todos os 2º pratos, começando pelo 3º",
    "selector": "prato:nth-of-type(2n+3)",
    "syntax": ":nth-of-type(An+B)",
    "help": "A fórmula nth-of-type seleciona cada enésimo elemento, iniciando a contagem em uma instância específica desse elemento.",
    "examples": [
      "<strong>span:nth-of-type(6n+2)</strong> seleciona cada 6ª instância de um <tag>span</tag>, começando (e incluindo) a segunda instância."
    ],
    "boardMarkup": `
    <prato/>
    <prato>
      <pickle class="small" />
    </prato>
    <prato>
      <maca class="small" />
    </prato>
    <prato/>
    <prato>
      <maca />
    </prato>
    <prato/>
    `
  },
  {
    "selectorName": "Only of Type Selector",
    "helpTitle": "Selecionar elementos que são os únicos do seu tipo dentro do elemento pai",
    "selector": "maca:only-of-type",
    "syntax": ":only-of-type",
    "doThis": "Selecionar a maçã no meio do prato",
    "help": "Seleciona o único elemento desse tipo dentro de outro elemento.",
    "examples": [
      "<strong>p span:only-of-type</strong> seleciona um <tag>span</tag> dentro de qualquer <tag>p</tag> se for o único <tag>span</tag> ali."
    ],
    "boardMarkup": `
    <prato id="elegante">
      <maca class="small" />
      <maca />
    </prato>
    <prato>
      <maca class="small" />
    </prato>
    <prato>
      <pickle />
    </prato>
    `
  },
  {
    "selectorName": "Last of Type Selector",
    "helpTitle": "Selecionar o último elemento de um tipo específico",
    "doThis": "Selecionar a última maçã e laranja",
    "selector": ".small:last-of-type",
    "syntax": ":last-of-type",
    "help": "Seleciona cada último elemento desse tipo dentro de outro elemento. Lembre-se que o tipo refere-se ao tipo de tag, então <tag>p</tag> e <tag>span</tag> são tipos diferentes. <br><br> Eu me pergunto se foi assim que o último dinossauro foi selecionado antes de se extinguir.",
    "examples": [
      "<strong>div:last-of-type</strong> seleciona o último <tag>div</tag> em cada elemento.",
      "<strong>p span:last-of-type</strong> seleciona o último <tag>span</tag> em cada <tag>p</tag>."
    ],
    "boardMarkup": `
    <laranja class="small"/>
    <laranja class="small" />
    <pickle />
    <pickle />
    <maca class="small" />
    <maca class="small" />
    `
  },
  {
    "selectorName": "Empty Selector",
    "helpTitle": "Selecionar elementos que não têm filhos",
    "doThis": "Selecionar os marmitas vazios",
    "selector": "marmita:empty",
    "syntax": ":empty",
    "help": "Seleciona elementos que não têm outros elementos dentro deles.",
    "examples": [
      "<strong>div:empty</strong> seleciona todos os elementos <tag>div</tag> vazios."
    ],
    "boardMarkup":`
    <marmita/>
    <marmita>
      <pickle class="small"/>
    </marmita>
    <prato/>
    <marmita/>`
  },
  {
    "selectorName": "Negation Pseudo-class",
    "helpTitle": "Selecionar todos os elementos que não correspondem ao seletor de negação",
    "doThis": "Selecionar as maçãs grandes",
    "selector": "maca:not(.small)",
    "syntax": ":not(X)",
    "help": 'Você pode usar isso para selecionar todos os elementos que não correspondem ao seletor <strong>"X"</strong>.',
    "examples": [
      '<strong>:not(#elegante)</strong> seleciona todos os elementos que não têm <strong>id="elegante"</strong>.',
      '<strong>div:not(:first-child)</strong> seleciona todos os <tag>div</tag> que não são o primeiro filho.',
      '<strong>:not(.big, .medium)</strong> seleciona todos os elementos que não têm <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    "boardMarkup": `
    <prato id="elegante">
      <maca class="small" />
    </prato>
    <prato>
      <maca />
    </prato>
    <maca />
    <prato>
      <laranja class="small" />
    </prato>
    <pickle class="small" />
    `
  },{
    "selectorName": "Attribute Selector",
    "helpTitle": "Selecionar todos os elementos que têm um atributo específico",
    "doThis": "Selecionar os itens para alguém",
    "selector": "[for]",
    "syntax": "[attribute]",
    "help": 'Atributos aparecem dentro da tag de abertura de um elemento, assim: <tag>span attribute="value"</tag>. Um atributo nem sempre tem um valor, pode estar em branco!',
    "examples": [
      '<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que têm um atributo <strong>href="qualquer coisa"</strong>.',
      '<strong>[type]</strong> seleciona todos os elementos que têm um atributo <strong>type="qualquer coisa"</strong>.'
    ],
    "boardMarkup": `
    <marmita><maca class="small"/></marmita>
    <maca for="Ethan"/>
    <prato for="Alice"><pickle/></prato>
    <marmita for="Clara"><laranja/></marmita>
    <pickle/>`
  },
  {
    "selectorName": "Attribute Selector",
    "helpTitle": "Selecionar todos os elementos que têm um atributo específico",
    "doThis": "Selecionar os pratos para alguém",
    "selector": "prato[for]",
    "syntax": "A[attribute]",
    "help": "Combine o seletor de atributo com outro seletor (como o seletor de nome da tag) adicionando-o no final.",
    "examples": [
      '<strong>[value]</strong> seleciona todos os elementos que têm um atributo <strong>value="qualquer coisa"</strong>.',
      '<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que têm um atributo <strong>href="qualquer coisa"</strong>.',
      '<strong>input[disabled]</strong> seleciona todos os elementos <tag>input</tag> com o atributo <strong>disabled</strong>.'
    ],
    "boardMarkup": `
    <prato for="Sarah"><pickle/></prato>
    <prato for="Luke"><maca/></prato>
    <prato/>
    <marmita for="Steve"><laranja/></marmita>
    `
  },
  {
    "selectorName": "Attribute Value Selector",
    "helpTitle": "Selecionar todos os elementos que têm um valor específico para um atributo",
    "doThis": "Selecionar a refeição de Vitaly",
    "selector": "[for=Vitaly]",
    "syntax": '[attribute="value"]',
    "help": "Seletores de atributo são sensíveis a maiúsculas e minúsculas, cada caractere deve corresponder exatamente.",
    "examples": [
      '<strong>input[type="checkbox"]</strong> seleciona todos os elementos de input do tipo checkbox.'
    ],
    "boardMarkup": `
    <maca for="Alexei" />
    <marmita for="Albina"><maca /></marmita>
    <marmita for="Vitaly"><laranja/></marmita>
    <pickle/>
    `
  },
  {
    "selectorName": "Attribute Starts With Selector",
    "helpTitle": "Selecionar todos os elementos com um valor de atributo que começa com caracteres específicos",
    "doThis": "Selecionar os itens para nomes que começam com 'Sa'",
    "selector": '[for^="Sa"]',
    "syntax": '[attribute^="value"]',
    "examples": [
      '<strong>.toy[category^="Swim"]</strong> seleciona elementos com a classe <strong>toy</strong> e com <strong>category="Swimwear"</strong> ou <strong>category="Swimming"</strong>.'
    ],
    "boardMarkup": `
    <prato for="Sam"><pickle/></prato>
    <marmita for="Sarah"><maca class="small"/></marmita>
    <marmita for="Mary"><laranja/></marmita>
    `
  },
  {
    "selectorName": "Attribute Ends With Selector",
    "helpTitle": "Selecionar todos os elementos com um valor de atributo que termina com caracteres específicos",
    "doThis": "Selecionar os itens para nomes que terminam com 'ato'",
    "selector": '[for$="ato"]',
    "syntax": '[attribute$="value"]',
    "examples": [
      '<strong>img[src$=".jpg"]</strong> seleciona todas as imagens que exibem uma imagem <strong>.jpg</strong>.',
    ],
    "boardMarkup": `
    <maca class="small"/>
    <marmita for="Hayato"><pickle/></marmita>
    <maca for="Ryota"></maca>
    <prato for="Minato"><laranja/></prato>
    <pickle class="small"/>
    `
  },
  {
    "selectorName": "Attribute Wildcard Selector",
    "helpTitle": "Selecionar todos os elementos com um valor de atributo que contenha caracteres específicos em qualquer lugar",
    "syntax": '[attribute*="value"]',
    "doThis": "Selecionar as refeições para nomes que contêm 'obb'",
    "selector": '[for*="obb"]',
    "help": 'Um seletor útil se você puder identificar um padrão comum em coisas como <strong>class</strong>, <strong>href</strong> ou atributos <strong>src</strong>.',
    "examples": [
      '<strong>img[src*="/thumbnails/"]</strong> seleciona todos os elementos de imagem que mostram imagens da pasta "thumbnails".',
      '<strong>[class*="heading"]</strong> seleciona todos os elementos com "heading" em sua classe, como <strong>class="main-heading"</strong> e <strong>class="sub-heading"</strong>'
    ],
    "boardMarkup": `
    <marmita for="Robbie"><maca /></marmita>
    <marmita for="Timmy"><pickle /></marmita>
    <marmita for="Bobby"><laranja /></marmita>
    `
  }  
];
