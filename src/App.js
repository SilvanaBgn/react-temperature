import { useState } from 'react';
import Field from './components/Field';
import BoilingStatus from './components/BoilingStatus';
import { useEffect } from 'react/cjs/react.development';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function App() {
  console.log('App');

  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(32);

  function changeTemperature(newTemp) {
    setTempC(newTemp);
    console.log('newTemp', newTemp);
    console.log('this', this);
  }

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>Lifting up the children state with Hooks</i></p>
      <Field unitName = "Celsius" temp = {tempC} changeTemperature = {changeTemperature} />
      {/* <Field unitName = "Fahrenheit" temp = {toFahrenheit(tempC)} changeTemperature /> */}
      <BoilingStatus celsiusTemperature = {tempC}/>
    </section>
  );
}

export default App;
