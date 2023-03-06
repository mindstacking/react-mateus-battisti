import { useState } from 'react'

const Fruits = () => {

    const [fruits] = useState(["banana", "maça", "pera", "uva"]);

    return (
        <ul>
            {fruits.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    )
}

export default Fruits