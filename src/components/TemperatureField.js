import { SCALE_CONVERSION } from '../utils/TempUnits';

function TemperatureField(props) {
  console.log(props.scaleName, 'render');

  function handleInputChange(e) {
    console.log('handleInput')
    props.handleTemp(e.target.value, props.scaleLetter);
  }

  function getValue(stateTemp) {
    const stateScale = stateTemp.scale,
          myScale = props.scaleLetter,
          stateValue = stateTemp.value;
    if(stateScale !== myScale) {
      return SCALE_CONVERSION[`${stateScale}${myScale}`](stateValue);
    }
    return stateValue;
  }

  return (
    <fieldset>
       <legend>Enter temperature in {props.scaleName}:</legend>
       <input value={getValue(props.tempState)}
              type="number"
              onChange={handleInputChange} ></input>
    </fieldset>
  )
}

export default TemperatureField;