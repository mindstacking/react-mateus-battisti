const Container = ({children, myValue}) => {
    return (
        <div>
            <h2>Título do container</h2>
            {children}
            <p>My value is {myValue}</p>
        </div>
    )
}

export default Container;