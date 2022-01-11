function Field(props) {

  function handleInputChange(e) {
    props.handleTemperature(e.target.value);
  }

  return (
    <fieldset>
       <legend>Enter temperature in {props.unitName}:</legend>
       <input value = {props.tempValue}
              onChange = {handleInputChange} ></input>
    </fieldset>
  )
}

export default Field;