import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';


// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// PAGES
import Home from './pages/Home';


// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MessageBar from './components/MessageBar/MessageBar';

const App = () => {

    return (
        <I18nextProvider i18n={i18n}>
            <NavBarProvider>
                <BrowserRouter>
                    <MessageBar/>
                    <NavBar/>
                    <Routes>
                        <Route index element={ <Home /> }/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </NavBarProvider>
        </I18nextProvider>
    );
}

export default App;