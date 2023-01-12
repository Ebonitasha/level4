import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";      
import Badge from "./Badge"; 
import data from "./data";     
import animal from "../images/animal.jpg" 
import Footer from "./Footer";

export default function Animal(){
    const [cats, setCats] = useState([])
    // const [post, setPost] = useState ([])



    useEffect(() =>{
        axios.get(" https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=abys&api_key=api_key=live_LDRYX6ER5c95YvGJ8RQAYUA5Sb9O4jYypnUJq1EU5q9mSdIXyQA88ILpayjNELA2")
        .then(res => {
            console.log(res.data)
            setCats(res.data)
        })
        .catch(err => console.log(err))
}, [])

    // const getData = cats.map((cat,index) => <img className="firstImg" key={index} src={cat.url}></img>)

    const postRendered = cats.map((cat, index) => {
       return(
        <div className="body-img">  
            <div>
           <img className="firstImg" key={cat.index} src={cat.url}></img>
           </div>
           <div className="extra">
            <h4>Height:{cat.height}</h4>
             <h4>Width{cat.width}</h4>
             </div>
         </div>
       )
    })
        
    
    const content = <div><pre>{JSON.stringify(cats, null , 2 )}</pre> </div>




        return(
        <div>
            <Badge {...data[0]} image={animal}/>
       
                     <div className="p-1">
                         <div className="about1-1">
                                     <span className="per-1">Personality</span>
                                     <p className="message1">While an active cat, the Abyssinian is an easy cat to have in your home. 
                                         They love people and other animals. 
                                         They will play with their own toys for hours but also enjoy a good period of time 
                                         of interactive play with their parents. They will talk to you in a soft, quiet voice. 
                                         The Abyssinian is loving and affectionate, and loves to spend time with her parent.
                                         While the Abyssinian coat is easy to care for, the Abyssinian likes being combed or rubbed with a 
                                         chamois cloth. She will reward you with a loving purr.</p>
                         </div>
                         <div className="about1-2">
                                     <span className="life-1">Life @ Home</span>
                                     <p className="message1-2">Abyssinians are active cats and generally will keep their weight under control with compensating exercise. 
                                         They should have some high perches and cat trees available to them so they can jump and climb.
                                         Abyssinians are social cats and like to have some company. 
                                         This company can be provided by having another cat or pet around when human companions are not at home.</p>
                         </div>
                     </div> 
                

                <div className="cat-section">
                    
                  {postRendered}
                </div>

                
                <Footer/>
        </div>
    )
}