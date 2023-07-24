import React from 'react';
import Form from './Form/Form';
import ContactList from './Contact-list/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { SectionContainer } from './Phonebook.styled';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    this.setState({ contacts: [...this.state.contacts, data] });
  };

  contactRemoving = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterContacts = this.filteredContacts();
    return (
      <SectionContainer>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            changeFilter={this.changeFilter}
          ></Filter>

          {this.state.contacts.length > 0 ? (
            <ContactList
              data={filterContacts}
              contactRemoving={this.contactRemoving}
            ></ContactList>
          ) : (
            <Notification message="There is no contacts"></Notification>
          )}
        </Section>
      </SectionContainer>
    );
  }
}

export default Phonebook;
