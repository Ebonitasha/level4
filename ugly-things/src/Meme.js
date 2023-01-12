import './App.css';
import React, { useContext, useState } from 'react';
import axios from 'axios'
// import {UglyContext} from './UglyContextProvider'
import {UglyContext} from './Context.js'
import Thing from './Thing'


export default function Meme() {
  const [meme, setMeme] = useState({
    Img: "",
    Title: "",
    Description: ""
  })

  const {list, postUglyThing, putUglyThing, deleteUglyThing} = useContext(UglyContext)


  function handleChange(e){
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme, 
      [name]: value, 
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      title: meme.Title,
      description: meme.Description,
      imgUrl:meme.Img
    }
    postUglyThing(newItem)

    putUglyThing()

    deleteUglyThing(newItem)
  }


  return (
    <div className="first">
        <form className='memeForm' onSubmit={handleSubmit}>

            <input
            type="text"
            placeholder="Title"
            name="Title"
            value={meme.Title}
            className="memetitle"
            onChange={handleChange}
            
            /> 
            <input
             type="text"
             placeholder="Description"
             name="Description"
             value={meme.Description}
             className="memedesc"
             onChange={handleChange}

            />
            <input
             type="text"
             placeholder="Img Url"
             name="Img"
             value={meme.Img}
             className="memeimg"
             onChange={handleChange}
             />

            <button className='memeButton'>Submit</button>   

            {/* <img src={meme.Img } alt="" className="memeImage" /> */}
            
        </form>   

        

      <div className="listed-items">
        {list.map(thing => (
         <Thing {...thing}
         key={thing._id}
         />
         
        ))}
        
      </div>
      <hr />

    </div>
  );
}