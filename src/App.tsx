import './App.css'
import Greet from "./components/Greet.tsx";

function App() {
  return (
      <div>
          <Greet name="Isa Reinert" messageCount={10} isLoggedIn={true} />
      </div>
  )
}

export default App
