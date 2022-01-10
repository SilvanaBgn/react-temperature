const isBoiling = (celsiusTemperature) => {
  return celsiusTemperature >= 100;
}

function BoilingStatus(props) {
  console.log('BoilingStatus');

  const boils = isBoiling(props.celsiusTemperature);
  return (
    <p><b>{ boils ? 'Water IS boiling': 'There is still no heat to boil the water' }</b></p>
  )
}

export default BoilingStatus;