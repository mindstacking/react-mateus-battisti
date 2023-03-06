import { useState } from "react"

const Student = () => {

    const [students, setStudents] = useState([
        {id: 1, name: "Roger", serie: "7ª", escola: "Caetano Mieli"},
        {id: 2, name: "Roger", serie: "4ª", escola: "Anna Pontes"},
        {id: 3, name: "Brito", serie: "3º", escola: "Maria Augusta"},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setStudents((prevStudents) => {
            return prevStudents.filter((students) => randomNumber !== students.id)
        })
    }

    return (
        <>
            <ul style={{padding: 0, margin: 0, listStyleType: "square"}}>
                {students.map((s, i) => (
                    <li key={s.id}>{i + 1} - {s.name} estuda na escola {s.escola} - {s.serie} série/ano</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </>
    )
}

export default Student