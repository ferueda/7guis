import { useState } from 'react';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Input from '../components/shared/Input';

function fromCelsiusToFahrenheit(temp) {
  return Math.round(temp * (9 / 5) + 32);
}

function fromFahrenheitToCelsius(temp) {
  return Math.round((temp - 32) * (5 / 9));
}

function isNum(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isValid(value) {
  return isNum(value) || value === '';
}

function TempConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleTempChange = ({ target }) => {
    const temp = target.value;

    if (target.name === 'celsius') {
      setCelsius(temp);
      setFahrenheit(isNum(temp) ? fromCelsiusToFahrenheit(temp) : '');
    }

    if (target.name === 'fahrenheit') {
      setFahrenheit(temp);
      setCelsius(isNum(temp) ? fromFahrenheitToCelsius(temp) : '');
    }
  };

  return (
    <Window>
      <Header>Temperature Converter</Header>
      <Body>
        <div className="flex items-center justify-center">
          <Input
            id="celsius"
            name="celsius"
            onChange={handleTempChange}
            value={celsius}
            isValid={isValid(celsius)}
          />
          <label htmlFor="celsius" className="text-sm text-gray-800 mx-2">
            Celsius
          </label>

          <Input
            id="fahrenheit"
            name="fahrenheit"
            onChange={handleTempChange}
            value={fahrenheit}
            isValid={isValid(fahrenheit)}
          />
          <label htmlFor="fahrenheit" className="text-sm text-gray-800 ml-2">
            Fahrenheit
          </label>
        </div>
      </Body>
    </Window>
  );
}

export default TempConverter;
