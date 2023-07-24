import React from 'react';
import PropTypes from 'prop-types';
import {
  Contacts,
  Contact,
  ContactName,
  ContactBtnDelete,
} from './ContactList.styled';

class ContactList extends React.Component {
  render() {
    return (
      <Contacts>
        {this.props.data.map(contact => (
          <Contact key={contact.id}>
            <ContactName>{contact.name}:</ContactName>
            <p>{contact.number}</p>
            <ContactBtnDelete
              onClick={() => this.props.contactRemoving(contact.id)}
            >
              Delete
            </ContactBtnDelete>
          </Contact>
        ))}
      </Contacts>
    );
  }
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactRemoving: PropTypes.func.isRequired,
};

export default ContactList;
