import React from 'react'

function InputForm(props) {
  return (
    <div className="form">
    <input
      type="text"
      placeholder="Enter ingredients (e.g. tomato, pasta)"
      value={props.ingredients}
      onChange={(e) => props.setIngredients(e.target.value)}
    />
    <button onClick={props.onSearch}>Search</button>
  </div>
  )
}

export default InputForm