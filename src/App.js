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

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <MyAccordion panels={panels} />
      <Search /> */}
      <DropDownWidget
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
