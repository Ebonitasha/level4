import React, {useContext} from 'react';
import ChangeContext from './themeContext';

export default function Footer(props){

    const context = useContext(ChangeContext)

    return(
        <footer className= {`${context.color}-theme`}>
            <div className='end'>
                <h2 className='info'>Contact info 8328459126</h2>
                <h2>PLEASE BOOK ALL APPOINTMENT ONLINE </h2>
            </div>
        </footer>
    )
}