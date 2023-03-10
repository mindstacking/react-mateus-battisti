const Container = ({children, myValue, handleMessage}) => {
    return (
        <div>
            <h2>Título do container</h2>
            {children}
            <p>My value is {myValue}</p>
            <button onClick={handleMessage}>Click here!</button>
        </div>
    )
}

export default Container;