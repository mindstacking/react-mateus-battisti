import { useState } from "react"

const Double = () => {

    const [n] = useState([4, 2, 8, 7, 5, 14, 6]);

    return (
        <ul>
            {n.map((item, i) => (
                <li key={i}>{item * 2}</li>
            ))}
        </ul>
    )
}

export default Double;