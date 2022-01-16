import { useState } from 'react';
import Field from './components/TemperatureField';
import BoilingStatus from './components/BoilingStatus';

function App() {
  console.log('App');
  const [temp, setTemp] = useState({ value: 0, scale: 'C'});

  function handleTemp(pNewTemp, pScale) {
    setTemp((prevTemp) => {
      if(prevTemp.value !== pNewTemp) {
        return {
          value: pNewTemp,
          scale: pScale
        }
      }
    });
  }

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>Lifting up the children state with Hooks</i></p>
      <Field scaleName="Celsius" tempState={temp} scaleLetter='C' handleTemp = {handleTemp} />
      <Field scaleName="Fahrenheit" tempState={temp} scaleLetter='F' handleTemp = {handleTemp} />
      <BoilingStatus tempState={temp}/>
    </section>
  );
}

export default App;
