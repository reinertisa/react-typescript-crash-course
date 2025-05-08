import Person from "./Person.tsx";

type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}
export default function PersonList(props: PersonListProps) {
    return (
        <div>
            {props.names.map(name => <Person key={name.first} name={name} />)}
        </div>
    )
}