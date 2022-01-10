import { useState } from 'react';

function Field(props) {
  const [temp, setTemp] = useState(props.temp)

  return (
    <fieldset>
       <legend>Enter temperature in {props.unitName}:</legend>
       <input value = {temp}></input>
    </fieldset>
  )
}

export default Field;