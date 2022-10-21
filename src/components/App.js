import Accordion from './Accordion'

const itens = [
  {
      titulo: "Java",
      conteudo:"Linguagem compilada e interpretada"
  },
  {
      titulo: "Python",
      conteudo:"Linguagem interpretada e dinamincamente tipada"
  },
  {
      titulo: "Javascript",
      conteudo:"Interpretado. Executa do lado do cliente e do lado do servidor também"
  }
]

const App = () => {
  return (
    <div>
      <Accordion itens={itens} />
    </div>
  )
}

export default App