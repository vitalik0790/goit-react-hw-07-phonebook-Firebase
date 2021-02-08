import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const removeContactRequest = createAction('contacts/removeRequest');
const removeContactSuccess = createAction('contacts/removeSuccess');
const removeContactError = createAction('contacts/removeError');

const onHandleFilter = createAction("contacts/handleFilter");

// const addToLocalStorage = createAction("contacts/addToLocalStorage");

export default {
    onHandleFilter,
    // addToLocalStorage,

    addContactRequest,
    addContactSuccess,
    addContactError,

    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,

    removeContactRequest,
    removeContactSuccess,
    removeContactError,
}

// const addContact = ({ name, number }) => ({
//     type: actionTypes.ADD,
//     payload: {
//         contact: {
//             id: uuidv4(),
//             name,
//             number,
//         }
//     }
// })


// const deleteContact = (id) => ({
//     type: actionTypes.REMOVE,
//     payload: {
//         id,
//     }
// })

// const onHandleFilter = (filter) => ({
//     type: actionTypes.VALUE,
//     payload: {
//         filter,
//     }
// })

