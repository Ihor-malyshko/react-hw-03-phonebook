import React from 'react';

const PhoneList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <p style={{ display: 'inline-block', margin: '10px' }}>
            {name} - {number}
          </p>
          <button type="button" onClick={() => onRemoveContact(id)}>
            Del
          </button>
        </li>
      );
    })}
  </ul>
);

export default PhoneList;
