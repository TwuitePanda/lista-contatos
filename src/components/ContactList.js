import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/actions';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const ListContainer = styled.div`
    margin: 20px;
`;

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    return (
        <ListContainer>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onRemove={() => dispatch(removeContact(contact.id))}
                />
            ))}
        </ListContainer>
    );
};

export default ContactList;