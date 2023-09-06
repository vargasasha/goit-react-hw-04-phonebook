import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageKey = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {

    const storageContacts = localStorage.getItem(localStorageKey);

    if (storageContacts !== null) {

      const savedContacts = JSON.parse(localStorage.getItem(localStorageKey));

      setContacts(savedContacts);

    } else {

      localStorage.setItem('contacts', JSON.stringify(initialContacts));
      setContacts(initialContacts);
    }

  }, [])
  

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <ContactForm onAdd={this.onAddContact} /> */}

      <h2>Contacts </h2>
      {/* <Filter filter={this.state.filter} onFilter={this.onFilterName} /> */}
      <ContactList contacts={contacts} onDelete={this.onDeleteContact} />
    </div>
  );
};
