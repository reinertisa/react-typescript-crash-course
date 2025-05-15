import './App.css'
import Greet from "./components/Greet.tsx";
import Person from "./components/Person.tsx";
import PersonList from "./components/PersonList.tsx";
import Status from "./components/Status.tsx";
import Heading from "./components/Heading.tsx";
import Oscar from "./components/Oscar.tsx";
import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import Input1 from "./components/Input1.tsx";
import LoggedIn from "./components/LoggedIn.tsx";
import User from "./components/User.tsx";
import User1 from "./components/User1.tsx";
import Counter from "./components/state/Counter.tsx";
import Counter2 from "./components/state/Counter2.tsx";

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
          <Button handleClick={(event, id) => console.log('clicked', event, id)} />
          <Input value="" handleChange={event => console.log(event)} />
          <Container styles={{border: '1px solid red', padding: '1rem'}} />
          <Input1 value="" handleChange={event => console.log(event)} />
          <LoggedIn />
          <User />
          <User1 />
          <Counter />
          <Counter2 />
      </div>
  )
}

export default App
