import { useState } from "react"
const OldData = () => {

    const [notas, setNotas] = useState([9, 8.5, 10, 8]);
    const [cloneNotas, setCloneNotas] = useState([9, 8.5, 10, 8]);
    const [total, setTotal] = useState(0);
    let media = 0;
    const handleMedia = () => {
        setNotas((soma) => {
            return soma.reduce((notas) => media += notas)
        })
        setTotal(media / 4);
    }

    return (
        <div>
            <h1>Notas</h1>
            <ul>
                {cloneNotas.map((n, i) => (
                    <li key={i}>{i + 1}ª nota - {n}</li>
                ))}
            </ul>
            <button onClick={handleMedia}>Show Media</button>
            <h2>Média de notas: {total}</h2>
        </div>
    )
}

export default OldData