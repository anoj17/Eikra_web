import React from 'react'

const Button = ({label,className,...props}) => {
  return <>
            
        <button {...props} className={`${className} uppercase px-3 py-3 rounded-md bg-yellow hover:brightness-75 font-bold hover:text-blue-600`}>{label}</button>

  </>
}

export default Button