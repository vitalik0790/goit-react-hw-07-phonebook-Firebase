import contactsActions from './contactsActions';
import axios from 'axios';

// axios.defaults.baseURL = 'https://phonebook-7-default-rtdb.firebaseio.com';

const addContact = ({ name, number }) => async (dispatch) => {
    dispatch(contactsActions.addContactRequest());

    await axios
        .post(`${process.env.REACT_APP_BASE_URL}/contacts.json`, { name, number })
        .then(response => {
            // console.log(response)
            dispatch(contactsActions.addContactSuccess({ id: response.data.name, name, number }));
        })
        .catch(error => dispatch(contactsActions.addContactError(error)))
}

const fetchContacts = () => async (dispatch) => {
    dispatch(contactsActions.fetchContactsRequest());

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/contacts.json`
        );
        const contacts = Object.keys(response.data).map((key) => ({
            ...response.data[key],
            id: key,
        }));
        dispatch(contactsActions.fetchContactsSuccess(contacts));
    }
    catch (error) { dispatch(contactsActions.fetchContactsError(error)) };
}

const removeContact = id => dispatch => {
    dispatch(contactsActions.removeContactRequest());

    axios
        .delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`)
        .then(() => dispatch(contactsActions.removeContactSuccess(id)))
        .catch(error => dispatch(contactsActions.removeContactError(error)));
}

export default {
    addContact,
    fetchContacts,
    removeContact,
}