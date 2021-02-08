import contactsReducers from "./contacts/contactsReducers";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        contacts: contactsReducers
    }
});

export default store;


