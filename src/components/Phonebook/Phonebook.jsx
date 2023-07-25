import { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './Contact-list/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { SectionContainer } from './Phonebook.styled';

function Phonebook() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []; 
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandle = data => {
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, data]);
  };

  const contactRemoving = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value.trim());
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = filteredContacts();
  return (
    <SectionContainer>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandle} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} changeFilter={changeFilter}></Filter>

        {contacts.length > 0 ? (
          <ContactList
            data={filterContacts}
            contactRemoving={contactRemoving}
          ></ContactList>
        ) : (
          <Notification message="There is no contacts"></Notification>
        )}
      </Section>
    </SectionContainer>
  );
}

export default Phonebook;
