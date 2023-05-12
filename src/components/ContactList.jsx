import React, { Component } from 'react';

export const Contact = props => {
  const { name, number } = props;

  return (
    <li name="name">
      <p>
        {name} : {number}
      </p>
    </li>
  );
};
