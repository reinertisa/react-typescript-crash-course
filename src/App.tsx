import './App.css'
import Greet from "./components/Greet.tsx";
import Person from "./components/Person.tsx";

function App() {
    const name = {
        first: 'Isa',
        last: 'Reinert'
    };

  return (
      <div>
          <Greet name="Isa Reinert" messageCount={10} isLoggedIn={true} />
          <Person name={name} />
      </div>
  )
}

export default App
