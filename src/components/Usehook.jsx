import React, { useState } from 'react'

const Usehook = () => {
    const [items, setItems] = useState([])

    const clickBtn = () =>{
        setItems([...items,{}])
        console.log(items)
    }
  return (
    <div>
      <button onClick={clickBtn}>click</button>
      <div>
        {items.map((item)=>(
            <div>hello</div>
        ))}
      </div>
    </div>
  )
}

export default Usehook