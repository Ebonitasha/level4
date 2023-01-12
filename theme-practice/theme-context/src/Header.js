import React, { useContext } from 'react';
import {ChangeContext} from './themeContext';

function Header(props) {

           const context= useContext(ChangeContext)
            console.log('hi')
            console.log(context)
        //    using the useContext() import the theme and set as a variable

    return (
        <div className={`${context.color}-theme`}>
            <h2>Theme Context</h2>
            <h3>You are currently using {context.color} mode</h3>
        </div>
    );
}

export default Header;