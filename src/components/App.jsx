// import { render } from '@testing-library/react';
import { nanoid } from 'nanoid';
import { Component } from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import s from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  deleteBook = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterToLover = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const result = name.toLowerCase().includes(filterToLover);
      return result;
    });
    return filteredContacts;
  };

  addContactBySubmit = props => {
    const { contacts } = this.state;
    const duplicate = contacts.find(contact => contact.name === props.name);
    if (duplicate) {
      alert(`${props.name} is already in books list`);
      return;
    }

    this.setState(prevState => {
      const { contacts } = prevState;
      const { name, number } = props;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContactBySubmit={this.addContactBySubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter} />
        <ContactList contacts={contacts} deleteBook={this.deleteBook} />
      </div>
    );
  }
}

export default App;
