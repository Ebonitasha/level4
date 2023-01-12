import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

import ChangeTheme from './themeContext'
import Footer from './Footer';


export default function App(props) {

    const[color, setColor] = useState("aqua")

    const toggleTheme = ()=>{
        setColor(prevColor => prevColor === "aqua" ? "red" : "aqua") 
    }
  return (
    <>
        <ChangeTheme.Provider value={{
          color: color,
          toggleTheme: toggleTheme
        }}>
            <Header/>
            <Body/>
            <Footer/>
        </ChangeTheme.Provider>
    
    </>
  );
}

 
