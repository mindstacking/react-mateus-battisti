import { useState } from "react"

const Lists = () => {

    const [numbers, setNumbers] = useState([
        {id: 1, name: "Roger", serie: "7ª", escola: "Caetano Mieli"},
        {id: 2, name: "Roger", serie: "4ª", escola: "Anna Pontes"},
        {id: 3, name: "Brito", serie: "3º", escola: "Maria Augusta"},
    ]);

    const handleDeleteNumbers = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setNumbers((prevNumbers) => {
            return prevNumbers.filter((numbers) => randomNumber !== numbers.id)
        })
    }    

    return (
        <>
            <ul>
                {numbers.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={handleDeleteNumbers}>Delete a random item</button>
        </>
    )
}

export default Lists;