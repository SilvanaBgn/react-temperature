import { useState } from 'react';
import Field from './components/Field';
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

  const celsius = temp.scale === 'c' ? temp.value : toCelsius(temp.value);
  const fahrenheit = temp.scale === 'f' ? temp.value : toFahrenheit(temp.value);

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>Lifting up the children state with Hooks</i></p>
      <Field unitName = "Celsius" tempValue = {celsius} handleTemp = {handleTempCelsius} />
      <Field unitName = "Fahrenheit" tempValue = {fahrenheit} handleTemp = {handleTempFahrenheit} />
      <BoilingStatus celsiusTemperature = {celsius}/>
    </section>
  );
}

export default App;
