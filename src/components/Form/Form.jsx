import { nanoid } from 'nanoid';
import { Component } from 'react'

class Form extends Component {

  state = {
    contacts: [],
    name: ''
  }




  render() {
    const nameId = nanoid();
    return (
      <>
        <form>
          <label htmlFor={nameId}>
            Name
          </label>
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2></h2>
      </>
    )
  }
}

export default Form;