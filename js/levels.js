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
    doThis : "Selecione as marmitas",
    selector : "marmita",
    syntax : "A",
    helpTitle : "Selecione elementos pelo tipo",
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
    <marmita/>
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
    <marmita/>
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
    <marmita>
    <laranja/>
    </marmita>
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
    <marmita>
      <laranja class="pequeno"/>
    </marmita>
    <prato>
      <laranja/>
    </prato>
    <prato>
      <laranja class="pequeno"/>
    </prato>`
  },
  {
    doThis : "Selecione as laranjas pequenas nas marmitas",
    selector : "marmita laranja.pequeno",
    syntax: "BORAA! Você dá conta!",
    helpTitle: "Você consegue...",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver este!',
    boardMarkup : `
    <marmita>
      <laranja/>
    </marmita>
    <laranja class="pequeno"/>
    <marmita>
      <laranja class="pequeno"/>
    </marmita>
    <marmita>
      <maca class="pequeno"/>
    </marmita>
    <marmita>
      <laranja class="pequeno"/>
    </marmita>
    `
  },
  {
    doThis : "Selecione todos os pratos e marmitas",
    selector : "prato,marmita",
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
    <marmita>
      <picles/>
    </marmita>
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
    "helpTitle": "Você pode selecionar tudo!",
    "syntax": "*",
    "help": "Você pode selecionar todos os elementos com o seletor universal!",
    "examples": [
      "<strong>p *</strong> seleciona qualquer elemento dentro de todos os elementos <tag>p</tag>.",
    ],
    "boardMarkup": "\n<maca/>\n<prato>\n  <laranja class=\"pequeno\" />\n</prato>\n<marmita/>\n<marmita>\n  <laranja/>\n</marmita>\n<prato id=\"elegante\"/>\n"
  },  
  {
    "doThis": "Selecionar tudo em um prato",
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
    "doThis": "Selecionar todas as maçãs que estão ao lado de um prato",
    "selector": "prato + maca",
    "helpTitle": "Selecionar um elemento que segue diretamente outro elemento",
    "selectorName": "Seletor de Irmão Adjacente",
    "syntax": "A + B",
    "help": "Isso seleciona todos os elementos <strong>B</strong> que seguem diretamente <strong>A</strong>. Elementos que seguem um ao outro são chamados de irmãos. Eles estão no mesmo nível, ou profundidade. <br/><br/>No markup HTML deste nível, elementos com a mesma indentação são irmãos.",
    "examples": [
      "<strong>p + .intro</strong> seleciona todos os elementos com <strong>class=\"intro\"</strong> que seguem diretamente um <tag>p</tag>",
      "<strong>div + a</strong> seleciona todos os elementos <tag>a</tag> que seguem diretamente um <tag>div</tag>"
    ],
    "boardMarkup": "\n<marmita>\n  <maca class=\"pequeno\"/>\n</marmita>\n<prato />\n<maca class=\"pequeno\"/>\n<prato />\n<maca/>\n<maca class=\"pequeno\"/>\n<maca class=\"pequeno\"/>\n"
  },
  {
    "selectorName": "Seletor de Irmão Geral",
    "helpTitle": "Selecionar elementos que seguem outro elemento",
    "syntax": "A ~ B",
    "doThis": "Selecionar os picles ao lado do marmita",
    "selector": "marmita ~ picles",
    "help": "Você pode selecionar todos os irmãos de um elemento que o seguem. Isso é semelhante ao Seletor Adjacente (A + B), exceto que ele obtém todos os elementos seguintes em vez de apenas um.",
    "examples": [
      "<strong>A ~ B</strong> seleciona todos os <strong>B</strong> que seguem um <strong>A</strong>"
    ],
    "boardMarkup": "\n<picles/>\n<marmita>\n  <laranja class=\"pequeno\"/>\n</marmita>\n<picles class=\"pequeno\"/>\n<picles/>\n<prato>\n  <picles/>\n</prato>\n<prato>\n  <picles class=\"pequeno\"/>\n</prato>\n"
  },
  {
    "selectorName": "Seletor de Filho",
    "syntax": "A > B&nbsp;",
    "doThis": "Selecionar a maçã diretamente em um prato",
    "selector": "prato > maca",
    "helpTitle": "Selecionar filhos diretos de um elemento",
    "help": "Você pode selecionar elementos que são filhos diretos de outros elementos. Um elemento filho é qualquer elemento que está diretamente aninhado em outro elemento. <br><br>Elementos que são aninhados mais profundamente são chamados de elementos descendentes.",
    "examples": [
      "<strong>A > B</strong> seleciona todos os <strong>B</strong> que são filhos diretos de <strong>A</strong>"
    ],
    "boardMarkup": "\n<prato>\n  <marmita>\n    <maca/>\n  </marmita>\n</prato>\n<prato>\n  <maca/>\n</prato>\n<prato/>\n<maca/>\n<maca class=\"pequeno\"/>\n"
  },
  {
    "selectorName": "Pseudo-seletor Primeiro Filho",
    "helpTitle": "Selecionar um elemento primeiro filho dentro de outro elemento",
    "doThis": "Selecionar a laranja superior",
    "selector": "prato :first-child",
    "syntax": ":first-child",
  
    "help": "Você pode selecionar o primeiro elemento filho. Um elemento filho é qualquer elemento que está diretamente aninhado em outro elemento. Você pode combinar este pseudo-seletor com outros seletores.",
    "examples": [
      "<strong>:first-child</strong> seleciona todos os elementos primeiro filho.",
      "<strong>p:first-child</strong> seleciona todos os elementos primeiro filho <tag>p</tag>.",
      "<strong>div p:first-child</strong> seleciona todos os elementos primeiro filho <tag>p</tag> que estão em um <tag>div</tag>."
    ],
    "boardMarkup": "\n<marmita/>\n<prato />\n<prato>\n  <laranja />\n  <laranja />\n  <laranja />\n</prato>\n<picles class=\"pequeno\" />\n"
  },
  {
    "selectorName": "Pseudo-seletor Único Filho",
    "helpTitle": "Selecionar um elemento que é o único elemento dentro de outro.",
    "doThis": "Selecionar a maçã e o picles nos pratos",
    "selector": "prato :only-child",
    "syntax": ":only-child",
    "help": "Você pode selecionar qualquer elemento que seja o único elemento dentro de outro.",
    "examples": [
      "<strong>span:only-child</strong> seleciona os elementos <tag>span</tag> que são o único filho de algum outro elemento.",
      "<strong>ul li:only-child</strong> seleciona o único elemento <tag>li</tag> que está em um <tag>ul</tag>."
    ],
    "boardMarkup": "\n<prato>\n  <maca/>\n</prato>\n<prato>\n  <picles />\n</prato>\n<marmita>\n  <picles />\n</marmita>\n<prato>\n  <laranja class=\"pequeno\"/>\n  <laranja/>\n</prato>\n<picles class=\"pequeno\"/>\n"
  },
  {
    "selectorName": "Pseudo-seletor Último Filho",
    "helpTitle": "Selecionar o último elemento dentro de outro elemento",
    "doThis": "Selecionar a maçã pequena e o picles",
    "selector": ".pequeno:last-child",
    "syntax": ":last-child",
    "help": "Você pode usar este seletor para selecionar um elemento que é o último filho dentro de outro elemento. <br><br>Dica Pro &rarr; Em casos onde há apenas um elemento, aquele elemento conta como o primeiro filho, único filho e último filho!",
    "examples": [
      "<strong>:last-child</strong> seleciona todos os elementos último filho.",
      "<strong>span:last-child</strong> seleciona todos os elementos último filho <tag>span</tag>.",
      "<strong>ul li:last-child</strong> seleciona os últimos elementos <tag>li</tag> dentro de qualquer <tag>ul</tag>."
    ],
    "boardMarkup": "\n<prato id=\"elegante\">\n  <maca class=\"pequeno\"/>\n</prato>\n<prato/>\n<prato>\n  <laranja class=\"pequeno\"/>\n  <laranja>\n</prato>\n<picles class=\"pequeno\"/>"
  }  
];
