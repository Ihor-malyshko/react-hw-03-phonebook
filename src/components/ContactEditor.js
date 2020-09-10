import React from 'react';

const ContactEditor = ({ onAddContact }) => {
  return (
    <div>
      <button type="button" onClick={onAddContact}>
        Add Contact
      </button>
    </div>
  );
};

export default ContactEditor;
