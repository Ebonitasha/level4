import React, {useState, useContext} from 'react';
import {UglyContext} from './Context.js'
import Meme from './Meme.js';



export default function Thing(props){
    const {title, imgUrl, description, _id} = props

    const [input, setInput] = useState({
        title: '',
        description: '',
        img: ''
    })

    // const [toEdit, setToEdit] = React.useState('false')

    // function toggle(){
    //     setToEdit(prevEdit => !prevEdit)
    

const {putUglyThing, deleteUglyThing} = useContext(UglyContext)

    function handleEdit(e){
        const {name, value} = e.target
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // function editThing(e){
    //  e.preventDefault()
    //  const update = {
    //     title: input.title,
    //     description: input.description,
    //     img: input.img 
    //     }
    // }

    return(
    <main className='main'>
        <h2 className="main-title">{title}</h2>
        <img className='main-img' src={imgUrl} alt=""></img>
        <h2 className="main-description">{description}</h2>
        
        <button key={_id} onClick={() => deleteUglyThing(_id)} className="main-deleteItem" >Delete Item</button>
        
        
        <div className='addedThings'>
            <form className='thingForm' onSubmit={(e) => { 
                e.preventDefault()
                putUglyThing(_id, input)
            }}>

                <input 
                type="text"
                placeholder="title"
                name="title"
                value={input.title}
                className=""
                onChange={handleEdit}
                />

                <input 
                type="text"
                placeholder="description"
                name="description"
                value={input.description}
                className=""
                onChange={handleEdit}
                />

                <input 
                type="text"
                placeholder=""
                name="img"
                value={input.img}
                className=""
                onChange={handleEdit}
                />

                <button key={_id} >Update Description</button>
                <hr />
                

            </form>
        </div>
</main>
    )
}