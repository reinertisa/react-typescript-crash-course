import React from "react";
import type Greet from "../Greet.tsx";

export default function CustomComponent(props: React.ComponentProps<typeof Greet>) {
    return (
        <div>
            {props.name}
        </div>
    )
}