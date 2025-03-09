import React from 'react'

const Button = (props) => {

    const { text, func } = props
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 bg-slate-950 border-solid blueShadow duration-200 cursor-pointer'>
            <p>{text}</p>
            </button>
  )
}

export default Button