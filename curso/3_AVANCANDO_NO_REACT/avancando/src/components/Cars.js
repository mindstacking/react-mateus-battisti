import { useState } from "react"
import ListRender from "./ListRender"

const Cars = () => {

    const [cars] = useState(["X6", "Toro", "206", "IX35"])
    const [brands] = useState(["Audi", "BMW", "Fiat", "Land Rover"])

    return (
        <>
            <ul>
                {cars.map((item, i) => (
                    <li key={i}>{i + 1} - {item}</li>
                ))}
            </ul>
            <ul>
                {brands.map((item, i) => (
                    <li>{item}</li>
                ))}
            </ul>
            <div>
                <ListRender />
            </div>
        </>
    );
};

export default Cars;