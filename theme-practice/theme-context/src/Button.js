import React, {useContext} from 'react';
import {ChangeContext} from './themeContext';

function Button(props) {

    const context= useContext(ChangeContext)

    return (
        <button onClick={context.toggleTheme} className={`${context.color}-theme`}>Click to change theme</button>
    );
}

export default Button;