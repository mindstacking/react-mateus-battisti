const Events = () => {

    const handleMyEvent = (e) => {
        const x = e.screenX;
        const y = e.screenY;
        const body = document.body;
        const block = document.createElement("div");
        block.style.width = "30px";
        block.style.height = "30px";
        block.style.backgroundColor = "red";
        block.style.position = "absolute";
        block.style.left = x + "px";
        block.style.top = y + "px";
        block.style.boxShadow = "rgb(114 114 114) 4px 4px 5px 1px"
        body.appendChild(block);
    }

    const handleClick = () => console.log("foi sim!")

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderiza meu título! {x}</h1>
        } else {
            return <h1>Renderiza outro título!</h1>
        }
    };

    const renderTitle = () => {
        return (
            <h1>Meu título aqui</h1>
        )
    }

    const renderSubTitle = () => {
        return (
            <h2>Subtítulo</h2>
        )
    }

    const renderButton = (label) => {
        if(label){
            return <button>{label}</button>
        } else {
            return <button>Qualquer coisa</button>
        }
    }

    const renderLines = () => {
        return (
            <>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nostrum repellendus labore et modi molestias! Vitae distinctio voluptate, doloribus deleniti nobis molestias consequuntur rerum delectus fuga praesentium perspiciatis quam placeat.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nostrum repellendus labore et modi molestias! Vitae distinctio voluptate, doloribus deleniti nobis molestias consequuntur rerum delectus fuga praesentium perspiciatis quam placeat.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nostrum repellendus labore et modi molestias! Vitae distinctio voluptate, doloribus deleniti nobis molestias consequuntur rerum delectus fuga praesentium perspiciatis quam placeat.</p>
            </>
        )
    }

    return (
        <div onClick={handleMyEvent}>
            <div>
                Click on the screen!
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Click here</button>
            </div>
            <div>
                <button onClick={() => {
                    if(10 > 3){
                        console.log("Dez é maior que três.");
                    }
                }}>Click here, pls!</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderTitle()}
                {renderSubTitle()}
                {renderLines()}
                {renderButton("Enviar informações")}
                {renderButton()}
            </div>
        </div>
    )
}

export default Events;