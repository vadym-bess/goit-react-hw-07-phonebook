import { nanoid } from 'nanoid';
//import { ListBtn, ListItem, ListWrapper } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunk';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ul>
      {filterContacts.map(contact => {
        return (
          <li key={nanoid()}>
            <p>
              {contact.name}: {contact.phone}
            </p>
            <button
              type="button"
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
