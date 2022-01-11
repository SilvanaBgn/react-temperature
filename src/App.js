import { useState } from 'react';
import Field from './components/Field';
import BoilingStatus from './components/BoilingStatus';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

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
  const [tempC, setTempC] = useState(0);

  function updateTemp(newTempC) {
    setTempC((prevTempC) => {
      if(prevTempC !== newTempC) {
        return newTempC;
      }
    });
  }

  function handleTempCelsius(newTempC) {
    console.log('Celsius newTempC', newTempC);
    updateTemp(newTempC);
  }
  function handleTempFahrenheit(newTempF) {
    console.log('Farenheit newTemp', newTempF);
    updateTemp(toCelsius(newTempF));
  }

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>Lifting up the children state with Hooks</i></p>
      <Field unitName = "Celsius" tempValue = {tempC} handleTemperature = {handleTempCelsius} />
      <Field unitName = "Fahrenheit" tempValue = {toFahrenheit(tempC)} handleTemperature = {handleTempFahrenheit} />
      <BoilingStatus celsiusTemperature = {tempC}/>
    </section>
  );
}

export default App;
