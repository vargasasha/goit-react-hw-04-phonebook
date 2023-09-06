import { StyledItem, StyledList } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
 
      {contacts.map(contact => (
        <StyledItem key={contact.id}>
          {contact.name}: {contact.number}
          <button key={contact.id} onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </StyledItem>
      ))}
    </StyledList>
  );
};
