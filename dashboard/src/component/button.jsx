import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button;








// build up
// styling
// file/folder structure
// settings
// sidebar
// navbar
// back to file/folder structure


// SIDE BAR COMPONENT
// CONTEXT AP