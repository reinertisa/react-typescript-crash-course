import React from "react";

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input1({value, handleChange}: InputProps) {

    return (
        <input type="text" onChange={handleChange} value={value} />
    )

}