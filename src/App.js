import { useState } from 'react';
import Field from './components/TemperatureField';
import BoilingStatus from './components/BoilingStatus';
import {toCelsius, toFahrenheit} from './utils/TempUnits'


// function tryConvert(temperature, convertFunction) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convertFunction(input);
//   const rounded = Math.trunc(output * 1000) / 1000;
//   return rounded.toString();
// }

function App() {
  console.log('App');
  const [temp, setTemp] = useState({ value: 0, scale: 'c'});

  function updateTemp(pNewTemp, pScale) {
    setTemp((prevTemp) => {
      if(prevTemp.value !== pNewTemp) {
        return {
          value: pNewTemp,
          scale: pScale
        }
      }
    });
  }

  function handleTempCelsius(newTempC) {
    console.log('Celsius newTemp', newTempC);
    updateTemp(newTempC, 'c');
  }
  function handleTempFahrenheit(newTempF) {
    console.log('Fahrenheit newTemp', newTempF);
    updateTemp(newTempF, 'f');
  }

  let celsius, fahrenheit;
  if(temp.scale === 'c') {
    celsius = temp.value;
    fahrenheit = toFahrenheit(temp.value);
  } else {
    fahrenheit = temp.value;
    celsius = toCelsius(temp.value);
  }
  // const celsius = temp.scale === 'c' ? temp.value : toCelsius(temp.value);
  // const fahrenheit = temp.scale === 'f' ? temp.value : toFahrenheit(temp.value);

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>Lifting up the children state with Hooks</i></p>
      <Field scaleName = "Celsius" tempValue = {celsius} handleTemp = {handleTempCelsius} />
      <Field scaleName = "Fahrenheit" tempValue = {fahrenheit} handleTemp = {handleTempFahrenheit} />
      <BoilingStatus celsiusTemperature = {celsius}/>
    </section>
  );
}

export default App;
