import { Dropdown } from '@fluentui/react-northstar';
import React from 'react';

const DropDownWidget = ({ options, selected, onSelectedChange }) => {
  const items = options.map((el) => el.label);

  const renderedOptions = options.map((el) => {
    return (
      <div key={el.value} className='item' onClick={() => onSelectedChange(el)}>
        {el.label}
      </div>
    );
  });
  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select a color</label>
        <div className='ui selection dropdown visible active'>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className='menu visible transition'>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDownWidget;
