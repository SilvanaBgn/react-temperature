import { useState } from 'react';
import Field from './components/Field';
import BoilingStatus from './components/BoilingStatus';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function App() {
  console.log('App');

  const [tempC, setTempC] = useState(0);

  function changeTemperature(newTemp) {
    setTempC(newTemp);
  }

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>Lifting up the children state with Hooks</i></p>
      <Field unitName = "Celsius" temp = {tempC}/>
      <Field unitName = "Fahrenheit" temp = {toFahrenheit(tempC)} />
      <BoilingStatus celsiusTemperature = {tempC}/>
    </section>
  );
}

export default App;
