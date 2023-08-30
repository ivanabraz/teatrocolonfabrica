import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavBarProvider } from './context/NavBarContext';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MessageBar from './components/MessageBar/MessageBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
                <ScrollToTop/>
                <Routes>
                    <Route path={`/:lang?`} element={ <Home /> }/>
                    <Route path={`/:lang/sobre`} element={ <Sobre /> }/>
                    <Route path={`/:lang?/:id`} element={ <ItemDetailContainer t={t}/> }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
