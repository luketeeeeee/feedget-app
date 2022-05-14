interface ButtonProps {
  text: String;
}

function Button(props: ButtonProps) {
  return (
    <button>{props.text}</button>
  )
}

function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Deletar" />
    </div>
  )
}

export default App
