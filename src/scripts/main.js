document.addEventListener('DOMContentLoaded', () => {

  function changeDescription(name, text) {
    let description = document.querySelector('#knowledgeText')

    document.querySelector(name).addEventListener('mouseover', () => {
      description.innerHTML = text
    })

    document.querySelector(name).addEventListener('mouseout', () => {
      description.innerHTML = '"Passe o mouse sobre um dos icones!"'
    })
  }

  changeDescription(
    "#html",
    "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
  )
  changeDescription(
    "#css",
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
  )
  changeDescription(
    "#js",
    "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
  )
  changeDescription(
    "#sass",
    "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
  )
  changeDescription(
    "#react",
    "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
  )
  changeDescription(
    "#styled",
    "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
  )
  changeDescription(
    "#ts",
    "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
  )
  changeDescription(
    "#bs",
    "Bootstrap é um framework front-end de código aberto que facilita o desenvolvimento de sites e aplicações responsivos e modernos."
  )
  changeDescription(
    "#jest",
    "Jest é um framework de testes em JavaScript desenvolvido pelo Facebook, projetado para facilitar a criação e execução de testes automatizados."
  )
  changeDescription(
    "#npm",
    "npm é o gerenciador de pacotes para o Node.js, que permite instalar, atualizar e gerenciar pacotes e dependências de projetos JavaScript."
  )
})