const ChangeNumberState = ({ handle }) => {

    const messages = ["oi", "olá", "oi, tudo bem?"];

    return (
        <div>
            <h1>ChangeNumberState</h1>
            <button onClick={() => handle([messages[0]])}>Change 1!</button>
            <button onClick={() => handle([messages[1]])}>Change 2!</button>
            <button onClick={() => handle([messages[2]])}>Change 3!</button>
        </div>
    );
};

export default ChangeNumberState;
