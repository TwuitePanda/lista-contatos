import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
`;

const ContactItem = ({ contact, onRemove }) => {
    return (
        <ItemContainer>
            <div>
                <h4>{contact.name}</h4>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
            <button onClick={onRemove}>Remove</button>
        </ItemContainer>
    );
};

export default ContactItem;