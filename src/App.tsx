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
import Box from "./components/context/Box.tsx";
import ThemeContextProvider from "./components/context/ThemeContext.tsx";
import UserContextProvider from "./components/context/UserContext.tsx";
import User3 from "./components/context/User3.tsx";
import DomRef from "./components/useref/DomRef.tsx";
import MutableRef from "./components/useref/MutableRef.tsx";
import Private from "./components/auth/Private.tsx";
import Profile from "./components/auth/Profile.tsx";
import List1 from "./components/generics/List1.tsx";
import List2 from "./components/generics/List2.tsx";
import RandomNumber from "./components/restriction/RandomNumber.tsx";
import Toast from "./components/templateliterals/Toast.tsx";
import CustomButton from "./components/html/Button.tsx";
import CustomInput from "./components/html/Input.tsx";
import CustomComponent from "./components/html/CustomComponent.tsx";


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
          <ThemeContextProvider>
              <Box />
          </ThemeContextProvider>
          <UserContextProvider>
              <User3 />
          </UserContextProvider>
          <DomRef />
          <MutableRef />
          <Private isLoggedIn={true} component={Profile} />
          <List1 items={['Isa', 'Sade', 'Krist']} onClick={(item) => console.log(item)} />
          <List1 items={[1, 2, 3]} onClick={(item) => console.log(item)} />
          <List2
              items={[
                  {id: 1, name: 'Isa'},
                  {id: 2, name: 'Sade'},
              ]}
              onClick={(item) => console.log(item)}
          />
          <RandomNumber value={10} isPositive={true} />
          <Toast position="center" />
          <CustomButton variant='primary' onClick={() => console.log('clicked')}>
              Primary button
          </CustomButton>
          <CustomInput />
          <CustomComponent name={'isa'} isLoggedIn={false} />
      </div>
  )
}

export default App
