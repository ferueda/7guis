import * as React from 'react';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Input from '../components/shared/Input';
import Label from '../components/shared/Label';

function fromCelsiusToFahrenheit(temp: string): string {
  return String(Math.round(Number(temp) * (9 / 5) + 32));
}

function fromFahrenheitToCelsius(temp: string): string {
  return String(Math.round((Number(temp) - 32) * (5 / 9)));
}

function isNum(value: string): boolean {
  return !isNaN(parseFloat(value)) && isFinite(Number(value));
}

function isValid(value: string): boolean {
  return isNum(value) || value === '';
}

const TempConverter: React.FC = () => {
  const [celsius, setCelsius] = React.useState<string>('');
  const [fahrenheit, setFahrenheit] = React.useState<string>('');

  const handleTempChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const temp = e.target.value;

    if (e.target.name === 'celsius') {
      setCelsius(temp);
      setFahrenheit(isNum(temp) ? fromCelsiusToFahrenheit(temp) : '');
    }

    if (e.target.name === 'fahrenheit') {
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
          <Label isFor="celsius" margin="mx">
            Celsius
          </Label>

          <Input
            id="fahrenheit"
            name="fahrenheit"
            onChange={handleTempChange}
            value={fahrenheit}
            isValid={isValid(fahrenheit)}
          />
          <Label isFor="fahrenheit" margin="ml">
            Fahrenheit
          </Label>
        </div>
      </Body>
    </Window>
  );
};

export default TempConverter;
