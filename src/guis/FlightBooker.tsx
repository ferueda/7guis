import * as React from 'react';
import { DateTime } from 'luxon';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import Modal from '../components/shared/Modal';

function isDateValid(input: string): boolean {
  const date = DateTime.fromFormat(input, 'dd.MM.yyyy');
  if (input === '') return true;
  if (!date.isValid) return false;
  return true;
}

function dateBafterA(inputA: string, inputB: string): boolean {
  const dateA = DateTime.fromFormat(inputA, 'dd.MM.yyyy');
  const dateB = DateTime.fromFormat(inputB, 'dd.MM.yyyy');

  return dateB.toMillis() >= dateA.toMillis();
}

const FlightBooker: React.FC = () => {
  const [start, setStart] = React.useState<string>(DateTime.local().toFormat('dd.MM.yyyy'));
  const [end, setEnd] = React.useState<string>('');
  const [flightType, setFlightType] = React.useState<string>('one-way');
  const [isModal, setIsModal] = React.useState<boolean>(false);

  const isButtonDisabled: boolean =
    flightType === 'one-way'
      ? start === '' || !isDateValid(start)
      : start === '' ||
        end === '' ||
        !isDateValid(start) ||
        !isDateValid(end) ||
        !dateBafterA(start, end);

  const lastEndDate = React.useRef<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const date = e.target.value;

    if (e.target.name === 'start') {
      setStart(date);
    }

    if (e.target.name === 'end') {
      setEnd(date);
      lastEndDate.current = date;
    }
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const type = e.target.value;

    if (type === 'one-way') {
      setEnd('');
    }

    if (type === 'round-trip') {
      setEnd(lastEndDate.current);
    }

    setFlightType(type);
  };

  const handleBooking = (): void => setIsModal(true);

  const handleModalClose = (): void => setIsModal(false);

  return (
    <Window>
      <Header>Flight Booker</Header>
      <Body>
        <div className="flex flex-col w-40">
          <select
            onChange={handleOptionChange}
            value={flightType}
            className="rounded-md bg-white border border-gray-200 text-sm shadow py-1 pl-1 mb-4"
          >
            <option value="one-way">One Way</option>
            <option value="round-trip">Round Trip</option>
          </select>

          <div className="mb-2">
            <Input
              id="start"
              name="start"
              value={start}
              onChange={handleDateChange}
              isValid={isDateValid(start)}
            />
          </div>

          <div className="mb-4">
            <Input
              id="end"
              name="end"
              value={end}
              onChange={handleDateChange}
              isValid={
                isDateValid(end) &&
                (flightType === 'one-way' || end === '' || dateBafterA(start, end))
              }
              isDisabled={flightType === 'one-way'}
            />
          </div>

          <Button isDisabled={isButtonDisabled} onClick={handleBooking}>
            Book Flight
          </Button>
        </div>

        {isModal ? (
          <Modal onClose={handleModalClose}>
            <h2 className="mb-4">Booking Confirmed</h2>
            <p className="text-sm text-gray-500 mb-4">
              You have successfully booked a {flightType} flight{' '}
              {flightType === 'one-way'
                ? `for ${start.replace(/ /g, '')}`
                : `from ${start.replace(/ /g, '')} to ${end.replace(/ /g, '')}`}
            </p>
          </Modal>
        ) : null}
      </Body>
    </Window>
  );
};

export default FlightBooker;
