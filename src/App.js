import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import styled from 'styled-components';

const AppContainer = styled.div`
    max-width: 600px;
    margin: auto;
    text-align: center;
`;

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer>
                <h1>Lista de Contatos</h1>
                <ContactForm />
                <ContactList />
            </AppContainer>
        </Provider>
    );
};

export default App;
