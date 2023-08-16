import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// PAGES
import Home from './pages/Home';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MessageBar from './components/MessageBar/MessageBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const userLanguage = navigator.language.substring(0, 2);
        i18n.changeLanguage(userLanguage);
    }, [i18n]);
    
    
    return (
        <NavBarProvider>
            <BrowserRouter>
                <MessageBar/>
                <NavBar/>
                <Routes>
                    <Route path={`/:lang?`} element={ <Home /> }/>
                    <Route path={`/:lang?/:id`} element={ <ItemDetailContainer t={t}/> }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;