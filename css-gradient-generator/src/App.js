import React from 'react';
import './App.css';
import Colors from './Colors';

export default function App() {
  const [backgroundColor, setBackgroundColor] = React.useState ({
    Color1 :"#FFFF00", 
    Color2 : '#000000'
  })

  const [data, setData] = React.useState(
    `background: linear-gradient(50deg, #FFFF00 , #000000); 
    -moz-background: linear-gradient(50deg, #FFFF00 , #000000); 
    -webkit: linear-gradient(50deg, #FFFF00 , #000000)`
  )

  function handleChange(event){
    // setBackgroundColor(event.target)
    const {name, value} = event.target
   setBackgroundColor(prevState =>({
      ...prevState, 
      [name]:value
    }))
  }

 
return(
    <div>
      <header className='header'>CSS GRADIENT GENERATOR</header>
      <div class="container">
       
        <div class='box'>
          <div className='options'>
          
          <Colors>
          <p>Color1</p>
          <p>{backgroundColor.Color1}</p>
          <input 
          type='color' 
          onChange={handleChange}  
          name="Color1"
          value={backgroundColor.Color1}
        />
          </Colors>
         
          <Colors>
          <p>{backgroundColor.Color2}</p>
          <p>Color2</p>
          <input 
          type='color' 
          onChange={handleChange}  
          name="Color2"
          value={backgroundColor.Color2}
        />
          
          </Colors> 

        <br>
        </br>
         Angle <input className='number'
          type='number'/>

          </div>
        </div>

      <input style={{
        height: "200px",
        width: "80vw",
      }}
      type="textarea"
      value={data}
      />

      </div>
    </div> 
  );
}


