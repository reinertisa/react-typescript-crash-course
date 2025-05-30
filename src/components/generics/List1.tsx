
type List1Props<T> = {
    items: T[]
    onClick: (value: T) => void
}

export default function List1<T extends string | number>({items, onClick}: List1Props<T>) {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => (
                <div key={index} onClick={() => onClick(item)}>{item}</div>
            ))}
        </div>
    )
}