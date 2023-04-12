import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputComponent } from './atoms/Input'
import { DatePickerInput } from './atoms/DatePickerInput'
import { SelectInput } from './atoms/SelectInput'

function App() {
  const [value, setValue] = useState('')
  const [date, setDate] = useState<any>('')
  const [select, setSelect] = useState<any>('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <InputComponent
          value={value}
          onChange={setValue}
          placeholder={"Input Type"}
        />

        <DatePickerInput
          handleTimeChange={(value) => setDate(value)}
          time={date}
        />

        <SelectInput
          optionList={
            [
              { value: "blues", label: "Blues" },
              { value: "rock", label: "Rock" },
              { value: "jazz", label: "Jazz" },
              { value: "orchestra", label: "Orchestra" },
            ]
          }
          value={select}
          onChange={(value: string) => setSelect(value)}
        />
      </header>
    </div>
  );
}

export default App;
