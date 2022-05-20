import { nanoid } from 'nanoid';
import { Component } from 'react';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {});
  };

  render() {
    const { contacts, name } = this.state;
    const elements = contacts.map(item => (
      <li key={nanoid()}>
        <p>{item.name}</p>
      </li>
    ));
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>{elements}</ul>
      </>
    );
  }
}

export default Form;
