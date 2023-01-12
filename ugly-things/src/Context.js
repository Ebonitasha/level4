import React, {useState} from "react";
import axios from "axios";
import Meme from "./Meme";

const UglyContext = React.createContext()

function UglyContextProvider(props){
    const [list, setList] = useState([])
   
  
  React.useEffect(() => {
   axios.get("https://api.vschool.io/eboniwilliams/thing")
        .then(res => setList(res.data))
  
  },[])
      
function postUglyThing(thing){
        axios.post("https://api.vschool.io/eboniwilliams/thing", thing)
        .then(res => setList((prevList => ([...prevList, res.data]))
        ))
        .catch(error => console.log(error))  
    }

    function putUglyThing(id, input){
        console.log("put request function called")
        console.log("id: ", id)
        console.log("input: ", input)
        const update = {
            title: input.title,
            description: input.description,
            imgUrl: input.img
        }
        axios.put(`https://api.vschool.io/eboniwilliams/thing/${id}`, update)
       
        .then(res => {
            console.log("put request response: ", res.data)
            setList(prevList => prevList.map(item => item._id === id? res.data : item))
        })
        .catch (err => console.log(err))
    }
    
    function deleteUglyThing(id){
        axios.delete(`https://api.vschool.io/eboniwilliams/thing/${id}`)
        .then(setList(prevState => prevState.filter(list => list._id !== id)))
        .catch(err => console.log(err))   
    }



return(
    <UglyContext.Provider value={{
     list,
     postUglyThing,
     putUglyThing,
     deleteUglyThing,
   
    
    }}>
    {props.children}
    </UglyContext.Provider>

)

}

export {UglyContextProvider, UglyContext}