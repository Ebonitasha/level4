import React, {useContext} from 'react';
import ChangeContext from './themeContext';

export default function Body(){

    const context = useContext(ChangeContext)

    return(
        <main className='main'>
            <button style={{
                height: '10vh',
                width:' 20vw',
                position: 'relative',
                top: '360px',
                left: '690px',
                fontSize: '30px'
            }}
            onClick={context.toggleTheme} className={`${context.color}-theme`}>Click to switch themes</button>
        </main> 
        
    )
}