
type List2Props<T> = {
    items: T[]
    onClick: (value: T) => void
}

export default function List2<T extends {id: number}>({items, onClick}: List2Props<T>) {

    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => (
                <div key={index} onClick={() => onClick(item)}>{JSON.stringify(item)}</div>
            ))}
        </div>
    )
}