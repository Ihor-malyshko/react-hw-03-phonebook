import React, { Component } from 'react';
import Section from './Section';
import PhoneList from './PhoneList';
// import ContactEditor from './ContactEditor';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';

const defContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class Phonebook extends Component {
  state = {
    contacts: [{ id: '', name: '', number: '' }],
    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts === null) {
      localStorage.setItem('contacts', JSON.stringify(defContacts));
    }
    this.setState({ contacts: JSON.parse(localContacts) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    this.setState(prevState => {
      if (this.state.contacts.some(el => el.name === name)) {
        console.log(`${name}, already exist in contacts`);
      } else {
        const newContact = { id: uuidv4(), name, number };
        return { contacts: [newContact, ...prevState.contacts] };
      }
    });
  };

  getSearchContacs = () => {
    const { filter, contacts } = this.state;
    const normalizeSearch = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeSearch),
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  inputFilterChannge = e => {
    return this.setState({
      filter: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h2>hw 03</h2>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />
          {/* <ContactEditor onAddContact={this.addContact} /> */}
        </Section>

        <Section title="Contacts">
          <Filter onSearch={this.inputFilterChannge} />
          <PhoneList
            contacts={this.getSearchContacs()}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

function App() {
  return <Phonebook />;
}

export default App;
