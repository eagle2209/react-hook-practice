import React, { useState } from 'react';
import MyAccordion from './components/MyAccordion';
import Search from './components/Search';
import DropDownWidget from './components/DropDownWidget';

const panels = [
  {
    key: '1',
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    key: '2',
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    key: '3',
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Shape of Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <DropDownWidget
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
