import './App.css'
import Greet from "./components/Greet.tsx";
import Person from "./components/Person.tsx";
import PersonList from "./components/PersonList.tsx";
import Status from "./components/Status.tsx";
import Heading from "./components/Heading.tsx";
import Oscar from "./components/Oscar.tsx";
import Input from "./components/Input.tsx";

function App() {
    const name = {
        first: 'Isa',
        last: 'Reinert'
    };

    const personList = [
        {
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            first: 'Clark',
            last: 'Kent'
        },
        {
            first: 'Princess',
            last: 'Diana'
        }
    ]

  return (
      <div>
          <Greet name="Isa Reinert" messageCount={10} isLoggedIn={true} />
          <Person name={name} />
          <PersonList names={personList} />
          <Status status='error' />
          <Heading>Placeholder text</Heading>
          <Oscar>
              <Heading>Oscar goes to Leonardo Dicaprio</Heading>
          </Oscar>
          <Greet name="Sade Miller" isLoggedIn={false} />
          <Button hanldeClick={(event, id) => console.log('clicked', event, id)} />
          <Input value="" handleChange={event => console.log(event)} />
      </div>
  )
}

export default App
