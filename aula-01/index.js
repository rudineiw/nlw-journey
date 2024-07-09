// Aula 01
// comentários, variáveis, tipos de dados, funções

// Variáveis
//const mensagem = "Bom dia!"

// Tipos de dado
  // strings: "", '', ``
  // number: 2 1.3
// function
//alert(mensagem)

// object {}
const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-08 10:00"),
  finalizada: true
}

// lista, array, vetor []

const atividades = [
  atividade,
  {
    nome: 'Academia em grupo',
    data: new Date("2024-07-09 12:00"),
    finalizada:false
  },
  {
    nome: 'Gamming session',
    data: new Date("2024-07-09 16:00"),
    finalizada:true
  }
]

// arrow function (função simples)
const criarItemDeAtividade = (atividade) => {

  let input = '<input type="checkbox" '

  if(atividade.finalizada) {
    input += 'checked'
  }

  input += '>'

  return `
    <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${atividade.data}</time>
  </div>
  `
}

const section = document.querySelector('section')

for(let atividade of atividades) {
  section.innerHTML += criarItemDeAtividade(atividade)
}