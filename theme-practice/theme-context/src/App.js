import React, { useState } from "react"
import Button from './Button';
import Header from './Header';
import {ChangeContextProvider} from "./themeContext";


function App(props) {
    const greet = require("./greet1")
 
    return (
        greet()
    );
}

export default App;


{/* <ChangeContextProvider>
                <Header/>
                <Button/>
            </ChangeContextProvider> */}