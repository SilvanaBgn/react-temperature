export const SCALE_CONVERSION = {
    CF : (celsius) => {return (celsius * 9 / 5) + 32},
    FC : (fahrenheit) => {return (fahrenheit - 32) * 5 / 9}
  };

export const  BOIL_TEMPERATURE = {
    C: 100,
    F: 212
  }
