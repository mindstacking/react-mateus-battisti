import { useState } from "react";

const ConditionalRender = () => {

    const [x, setX] = useState(false);
    const [name] = useState("Santos")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Isso tb aparece.</p>}
            {x === false ? <p>deu ruim!</p> : null}
            {name === "Santos" ? (<p>Santos</p>) : (<p>Não é o Santos. É o {name}</p>)}
            <button onClick={() => {
                if(x === true){
                    setX(false);
                } else {
                    setX(true);
                }
            }}>Change 'x'</button>
        </div>
    )
};

export default ConditionalRender;
