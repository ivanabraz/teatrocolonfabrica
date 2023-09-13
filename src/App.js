import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavBarProvider } from './context/NavBarContext';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MessageBar from './components/MessageBar/MessageBar';

const App = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const userLanguage = navigator.language.substring(0, 2);
        i18n.changeLanguage(userLanguage);
    }, [i18n]);
    
    return (
        <NavBarProvider>
            <BrowserRouter>
                <MessageBar textPrimary={"Teatro Colón Fábrica"} textSecondary={"Join us in Denver from June 7 – 9 to see what’s coming next."} textButton={"Lorem ipsum"}/>
                <NavBar/>
                <ScrollToTop/>
                <Routes>
                    <Route path={`/:lang?`} exact element={ <Home /> }/>
                    <Route path="/:lang/about" element={<About />} />
                    <Route path="/:lang/sobre" element={<About />} />
                    <Route path={`/:lang?/:id`} element={ <ItemDetailContainer t={t}/> }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
