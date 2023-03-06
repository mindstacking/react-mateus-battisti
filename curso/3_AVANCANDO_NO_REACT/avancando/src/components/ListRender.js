import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Pedro", "Thiago", "João"]);

    const [users] = useState([
      {id: 1, name: "Roger", age: 40},
      {id: 3, name: "Brito", age: 25},
      {id: 7, name: "Santos", age: 90},
    ])

  return (
    <>
      <ul>
          {list.map((item, i) => (
              <li key={i}>{item}</li>
          ))}
      </ul>
      <ul>
          {users.map((item) => (
            <li key={item.id}>{item.name} tem {item.age} anos.</li>
          ))}
      </ul>
    </>
  )
}

export default ListRender