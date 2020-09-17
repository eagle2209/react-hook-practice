import React, { useState } from 'react';
import MyAccordion from './components/MyAccordion';
import Search from './components/Search';
import DropDownWidget from './components/DropDownWidget';
import Translate from './components/Translate';

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
  return (
    <div>
      <Translate />
    </div>
  );
};
