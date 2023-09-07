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
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem(localStorageKey);

    if (storageContacts !== null) {
      const savedContacts = JSON.parse(localStorage.getItem(localStorageKey));
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

   useEffect(() => {
     localStorage.setItem(localStorageKey, JSON.stringify(contacts));
   }, [contacts]);
  
  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
  };
  
  const visibleContacts = getVisibleContacts();

  const onAddContact = newContact => {
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const onDeleteContact = oldContact => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== oldContact)
    );
  };

  const onFilterName = filterName => {
    setFilter(filterName);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onAdd={onAddContact} />

      <h2>Contacts </h2>
      <Filter filter={filter} onFilter={onFilterName} />
      <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
    </div>
  );
};
