import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contact.slice';
import { filterSlice } from './contacts/filter.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
