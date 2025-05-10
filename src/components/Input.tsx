import * as React from "react";

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={props.handleChange}/>
            <input type="text" onChange={handleInputChange}/>
        </div>
    )
}