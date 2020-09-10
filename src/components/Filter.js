import React from 'react';

const Filter = ({ onSearch }) => {
  return (
    <label>
      Name Search <input type="text" name="filter" onChange={onSearch} />
    </label>
  );
};

export default Filter;
