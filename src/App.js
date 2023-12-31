import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavBarProvider } from './context/NavBarContext';
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MessageBar from './components/MessageBar/MessageBar';
import Visit from './pages/Visit';
import LoadingHero from './components/Loading/LoadingHero';

const App = () => {
    const { t, i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { lang } = useParams();

    useEffect(() => {
        const userLanguage = navigator.language.substring(0, 2);
        const storedLanguage = localStorage.getItem("i18nextLng");
        const selectedLanguage = lang || storedLanguage || userLanguage;
        i18n.changeLanguage(selectedLanguage);
    }, [i18n, lang]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
        navigate(`/${newLang}`);
        localStorage.setItem("i18nextLng", newLang);
    }

    return (
        <NavBarProvider>
            <AnimatePresence mode="wait" >
                {isLoading ? (
                    <LoadingHero i18n={i18n} />
                ) : (
                    <>
                        <MessageBar
                            textPrimary={'Teatro Colón Fábrica'}
                            textSecondary={i18n.t('global.visit_info')}
                            textButton={i18n.t('global.visit')}
                            linkButton={`/${i18n.language}/visit`}
                        />
                        <NavBar onLanguageChange={changeLanguage} />
                        <ScrollToTop/>
                        <Routes>
                            <Route path={`/:lang?`} exact element={ <Home /> }/>
                            <Route path="/:lang/about" element={<About />} />
                            <Route path="/:lang/sobre" element={<About />} />
                            <Route path="/:lang/visit" element={<Visit />} />
                            <Route path="/:lang/visitar" element={<Visit />} />
                            <Route path={`/:lang?/:id`} element={ <ItemDetailContainer t={t}/> }/>
                        </Routes>
                        <Footer/>
                    </>
                )}
            </AnimatePresence>
        </NavBarProvider>
    );
}

export default App;