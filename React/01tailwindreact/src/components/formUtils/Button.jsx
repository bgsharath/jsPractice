import React from 'react'

const Button = ({type,children,onClick}) => {
  return (
    <button type={type} onClick={onClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4">{children}</button>
  )
}

export default Button;
