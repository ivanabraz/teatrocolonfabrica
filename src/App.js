import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    );
}

export default App;