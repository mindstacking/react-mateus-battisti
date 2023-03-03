import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Pedro", "Thiago", "João"]);

  return (
    <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
  )
}

export default ListRender