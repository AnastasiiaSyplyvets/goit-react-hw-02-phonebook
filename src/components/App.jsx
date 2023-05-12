import React, { Component } from 'react';
import Form from './ContactForm';
import { Filter } from './Filter';
import { Contact } from './ContactList';
import { nanoid } from 'nanoid';

const id = nanoid();

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    console.log(data);

    const newContact = {
      ...data,
      // id: nanoid(),
    };

    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert('Such contact exists!');
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
        name: newContact.name,
        number: newContact.number,
      }));
    }

    console.log(newContact.name);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.filterContacts();
    // console.log(this.state.contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.createContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} filter={filter} />
        <ul>
          {visibleContacts.map(contact => {
            return (
              <Contact key={id} name={contact.name} number={contact.number} />
            );
          })}
        </ul>
      </div>
    );
  }
}
