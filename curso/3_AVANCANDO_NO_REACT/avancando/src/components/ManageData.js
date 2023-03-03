import { useState } from 'react'

const ManageData = () => {

    let number = 16;

    const [someData, setSomeData] = useState(10);

    console.log(someData);

  return (
    <div>
        <p>Number: {number}</p>
      <p>Valor: {someData}</p>
      <button onClick={() => {
        number = 50;
        setSomeData(30);
        console.log(number)   
      }}>Click here to change value of someData</button>
      <p>Number: {number}</p>
    </div>
  );
};

export default ManageData;
