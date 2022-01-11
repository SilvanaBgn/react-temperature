function TemperatureField(props) {

  function handleInputChange(e) {
    console.log('handleInput')
    props.handleTemp(e.target.value);
  }
  console.log(props.scaleName, 'render');
  return (
    <fieldset>
       <legend>Enter temperature in {props.scaleName}:</legend>
       <input value = {props.tempValue}
              onChange = {handleInputChange} ></input>
    </fieldset>
  )
}

export default TemperatureField;