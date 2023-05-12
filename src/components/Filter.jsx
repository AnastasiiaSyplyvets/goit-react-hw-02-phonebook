import React from 'react';

export const Filter = props => {
  const { filter, onChange } = props;
  //   this.props.onChange;

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange}></input>
    </label>
  );
};
