import React from 'react';
import { connect } from 'react-redux'
// import contactsActions from '../../../redux/contacts/contactsActions';
import contactsOperations from '../../../redux/contacts/contactsOperations';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {

    const onHandleDelete = (e) => {
        const id = e.target.dataset.id;
        deleteContact(id);
    }



    return (
        <div>
            <h2>Contacts</h2>
            <TransitionGroup component='ul' className={s.list}>
                {contacts.map(contact => {
                    return (
                        <CSSTransition
                            key={contact.id}
                            timeout={250}
                            classNames={s}>
                            <li className={s.listItem}>
                                <span className={s.name}>{contact.name}</span>: <span>{contact.number}</span>
                                <button className={s.button} type="button" data-id={contact.id} onClick={onHandleDelete}>Delete</button>
                            </li>
                        </CSSTransition>)
                })}
            </TransitionGroup>
        </div>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
    deleteContact: PropTypes.func,
};

const mapStateToProps = state => ({

    contacts: contactsSelectors.getVisibleContacts(state),

});


const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => {
            dispatch(contactsOperations.removeContact(id));
        },

        // getFiltredContacts: ({ contacts, filter }) => {
        //     dispatch(contactsActions.getFiltredContacts())
        // }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);