import React, { useContext } from 'react';
import ChangeContext from './themeContext';

export default function Header(props){

    const context=useContext(ChangeContext)
    console.log('hi')
    console.log(context)

    return(
        <nav className='navBar'>

            <div className={`${context.color}-theme`}>
                <h1 className='title'>Ebonieye"z Lash Bar</h1>
            </div>
        <div className= {`${context.color}-theme`}>
            <ol className='list'>
                <h3 className='view'>VIEW LASH-STYLES</h3>
                <h3 className='book'>BOOK APPOINTMENT</h3>
                <h3 className='account'>VIEW ACCOUNT</h3>
            </ol>
        </div>
        </nav>
    
    )
}