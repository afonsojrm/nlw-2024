let participantes = [
  {
    nome: "Afonso",
    email: "user@gmail.com",
    dataInscricao: new Date (2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Aj",
    email: "user2444@gmail.com",
    dataInscricao: new Date (2024, 1, 23, 14, 20),
    dataCheckIn: null
  },
  {
    nome: "Bianca",
    email: "bianca@example.com",
    dataInscricao: new Date (2024, 0, 15, 10, 45),
    dataCheckIn: null
  },
  {
    nome: "Carlos",
    email: "carlos123@gmail.com",
    dataInscricao: new Date (2024, 1, 5, 16, 10),
    dataCheckIn: new Date(2024, 3, 2, 14, 15)
  },
  {
    nome: "Diana",
    email: "diana_doe@example.com",
    dataInscricao: new Date (2024, 1, 28, 8, 30),
    dataCheckIn: new Date(2024, 3, 4, 10, 20)
  },
  {
    nome: "Eduardo",
    email: "eduardo_e@example.com",
    dataInscricao: new Date (2024, 0, 10, 12, 0),
    dataCheckIn: new Date(2024, 2, 12, 15, 45)
  },
  {
    nome: "Fernanda",
    email: "fernanda_f@example.com",
    dataInscricao: new Date (2024, 2, 8, 9, 15),
    dataCheckIn: new Date(2024, 3, 6, 17, 30)
  },
  {
    nome: "Gustavo",
    email: "gus_gus@example.com",
    dataInscricao: new Date (2024, 1, 14, 17, 50),
    dataCheckIn: new Date(2024, 3, 12, 12, 10)
  },
  {
    nome: "Helena",
    email: "helena_h@example.com",
    dataInscricao: new Date (2024, 0, 30, 15, 20),
    dataCheckIn: new Date(2024, 2, 29, 9, 45)
  },
  {
    nome: "Isaac",
    email: "isaac_i@example.com",
    dataInscricao: new Date (2024, 2, 3, 11, 30),
    dataCheckIn: new Date(2024, 3, 5, 19, 20)
  }
];


const criarnovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to
  (participante.dataInscricao)

  let dataCheckIn = dayjs (Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null){
    dataCheckIn = `
    <button
      data-email = "${participante.email}"
      onclick = "fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `
  }

  return `
    <tr>
      <td>
        <strong>
          ${participante.nome}        
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
`
}

const atualizarLista = (participantes) => {
  let output =""
  for(let participante of participantes ){
    output = output + criarnovoParticipante(participante)
  }
  
  document
    .querySelector('tbody')
    .innerHTML = output
}

atualizarLista(participantes)
const adicionarParticipante =(event)=>{

  event.preventDefault()

  const formData = new FormData(event.target)
  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao : new Date(),
    dataCheckIn: null
  }
  const participanteExiste = participantes.find(
    (p) => p.email = participante.email
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante,...participantes]
  atualizarLista(participantes) 

  event.target.querySelector('[name = "nome"]').value = ""
  event.target.querySelector('[name ="email"]').value = ""
}

const fazerCheckIn = (event) => {
  const mensagemConfirmacao = ('Tem certeza que quer fazer o check-in?')
  if(confirm(mensagemConfirmacao) ==false ){
    return
  } 
  
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email)
  participante.dataCheckIn = new Date()
  atualizarLista(participantes)
}
