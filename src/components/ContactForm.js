import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input
            type="text"
            value={name}
            onChange={this.handleInputChange}
            name="name"
          />
        </label>
        <br />
        <label>
          number
          <input
            type="number"
            value={number}
            onChange={this.handleInputChange}
            name="number"
          />
        </label>
        <button type="submit" disabled={name === '' ? true : false}>
          Add
        </button>
      </form>
    );
  }
}
