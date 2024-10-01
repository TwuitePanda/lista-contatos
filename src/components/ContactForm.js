import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 20px;
`;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: Date.now(),
            name,
            email,
            phone,
        };
        dispatch(addContact(newContact));
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <button type="submit">Adicionar</button>
            </form>
        </FormContainer>
    );
};

export default ContactForm;