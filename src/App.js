import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import React from "react";
import {Works} from "./works/Works";
import {Conditions} from "./conditions/Сonditions";
import {ContactForm} from "./contactForm/ContactForm";
import {Footer} from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Conditions />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
