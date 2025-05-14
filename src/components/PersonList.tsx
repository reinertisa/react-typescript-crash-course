import Person from "./Person.tsx";
import type {Name} from "./Person.types.ts";

type PersonListProps = {
    names: Name[]
}
export default function PersonList(props: PersonListProps) {
    return (
        <div>
            {props.names.map(name => <Person key={name.first} name={name} />)}
        </div>
    )
}