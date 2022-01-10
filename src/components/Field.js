import { useState, useEffect } from 'react';

function Field(props) {
  const [temp, setTemp] = useState(props.temp);
  const changeTemperature = props.changeTemperature;
  console.log('changeTemperature', changeTemperature)


  function handleInputChange(e) {
    const newTemp = e.target.value;
    setTemp(newTemp);
    changeTemperature(newTemp);
  }

  return (
    <fieldset>
       <legend>Enter temperature in {props.unitName}:</legend>
       <input value = {temp}
              onChange = {handleInputChange} ></input>
    </fieldset>
  )
}

export default Field;