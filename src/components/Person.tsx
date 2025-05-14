import type {PersonProps} from "./Person.types.ts";


export default function Person(props: PersonProps) {
    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}