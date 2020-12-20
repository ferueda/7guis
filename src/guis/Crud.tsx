import * as React from 'react';
import { v4 as uuid } from 'uuid';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';

const initialList: Record[] = [
  {
    id: uuid(),
    surname: 'Emils',
    name: 'Hans',
  },
  {
    id: uuid(),
    surname: 'Mustermann',
    name: 'Max',
  },
  {
    id: uuid(),
    surname: 'Tisch',
    name: 'Roman',
  },
];

interface Record {
  id: string;
  surname: string;
  name: string;
}

function sortRecordsAlphabetically(list: Record[]): Record[] {
  return list.sort((a, b) => {
    const surnameA = a.surname.toLowerCase();
    const surnameB = b.surname.toLowerCase();

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (surnameA > surnameB) return 1;
    if (surnameA < surnameB) return -1;

    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });
}

const Crud: React.FC = () => {
  const [prefixInput, setPrefixInput] = React.useState<string>('');
  const [nameInput, setNameInput] = React.useState<string>('');
  const [surnameInput, setSurnameInput] = React.useState<string>('');

  const [list, setList] = React.useState<Record[]>(initialList);

  const listToShow: Record[] = React.useMemo(
    () =>
      sortRecordsAlphabetically(
        list.filter((record) => {
          const formattedPrefix = prefixInput.toLowerCase();
          const formattedName = record.name.toLowerCase();
          const formattedSurname = record.surname.toLowerCase();

          return (
            formattedName.startsWith(formattedPrefix) ||
            formattedSurname.startsWith(formattedPrefix)
          );
        }),
      ),
    [list, prefixInput],
  );

  const [selectedRecord, setSelectedRecord] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setSelectedRecord(sortRecordsAlphabetically(listToShow)[0]?.id || undefined);
  }, [listToShow]);

  React.useEffect(() => {
    setNameInput(list.find((record) => record.id === selectedRecord)?.name || '');
    setSurnameInput(list.find((record) => record.id === selectedRecord)?.surname || '');
  }, [list, selectedRecord]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputName = e.target.name;

    if (inputName === 'name') {
      setNameInput(e.target.value);
    }
    if (inputName === 'surname') {
      setSurnameInput(e.target.value);
    }
    if (inputName === 'prefix') {
      setPrefixInput(e.target.value);
    }
  };

  const addRecord = (): void => {
    if (
      nameInput === '' ||
      surnameInput === '' ||
      list.findIndex(({ name, surname }) => name === nameInput && surname === surnameInput) > -1
    ) {
      return;
    }

    const newRecord: Record = {
      id: uuid(),
      surname: surnameInput,
      name: nameInput,
    };

    setList((prev) => [...prev, newRecord]);
  };

  const removeRecord = (): void => {
    setList((prev) => prev.filter(({ id }) => id !== selectedRecord));
  };

  const selectRecord = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedRecord(e.target.value);
  };

  const updateRecord = (): void => {
    if (nameInput === '' || surnameInput === '') {
      return;
    }

    const oldRecord: Record | undefined = list.find((record) => record.id === selectedRecord);

    if (!oldRecord) return;

    const updatedRecord: Record = {
      ...oldRecord,
      name: nameInput,
      surname: surnameInput,
    };

    setList((prev) => [...prev.filter(({ id }) => id !== selectedRecord), updatedRecord]);
  };

  return (
    <Window>
      <Header>CRUD</Header>
      <Body>
        <div className="grid grid-cols-2 col-rows-3 gap-2 justify-center items-center">
          <div className="flex col-start-1 col-end-1 row-start-1 row-end-1 items-center">
            <label htmlFor="prefix" className="text-sm text-gray-800 whitespace-nowrap mr-2">
              Filter Prefix:
            </label>
            <Input id="prefix" name="prefix" onChange={handleInputChange} value={prefixInput} />
          </div>

          <div className="flex flex-col col-start-1 col-end-1 row-start-2 row-end-2">
            <select
              onChange={selectRecord}
              size={5}
              value={selectedRecord}
              className="rounded-md bg-white border border-gray-200 text-sm shadow overflow-x-scroll max-w-15"
            >
              {listToShow.map(({ id, surname, name }) => (
                <option key={id} value={id}>
                  {surname}, {name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col col-start-2 col-end-2 row-start-2 row-end-2">
            <div className="flex items-center justify-between">
              <label htmlFor="name" className="text-sm text-gray-800 whitespace-nowrap mr-2">
                Name:
              </label>
              <div className="">
                <Input id="name" name="name" onChange={handleInputChange} value={nameInput} />
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <label htmlFor="surname" className="text-sm text-gray-800 whitespace-nowrap mr-2">
                Surname:
              </label>
              <div className="">
                <Input
                  id="surname"
                  name="surname"
                  onChange={handleInputChange}
                  value={surnameInput}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-2 grid-cols-3 col-span-2 row-start-3 row-end-3 justify-center">
            <Button onClick={addRecord}>Create</Button>
            <Button onClick={updateRecord}>Update</Button>
            <Button onClick={removeRecord}>Delete</Button>
          </div>
        </div>
      </Body>
    </Window>
  );
};

export default Crud;
