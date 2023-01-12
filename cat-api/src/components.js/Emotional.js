import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";   
import data from "./data";
import Badge from "./Badge";
import emotional from "../images/emotional.jpg"
import Footer from "./Footer";

export default function Emotional(){
    const [emotionalCat, setEmotionalCat] = useState([])

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&breeds=bure&api_key=api_key=live_LDRYX6ER5c95YvGJ8RQAYUA5Sb9O4jYypnUJq1EU5q9mSdIXyQA88ILpayjNELA2")
        .then(res => {
            console.log(res.data)
            setEmotionalCat(res.data)
        })
        .catch(err => console.log(err))
}, [])

    // const getEmotional = emotionalCat.map((item, index) =>{
    //   return(
    //   <img className="second-img" key={index} src={item.url}></img>
    //   )
    // })
    const getEmotional = emotionalCat.map((cat, index) => {
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

    // const picks = data.map(pick => {
    //     return(
    //         <Badge
    //         key= {pick.id}
    //         {...pick}
    //         />
    //     )
    // })

    return(
        <div>
            <Badge {...data[1]} image={emotional}/>

            <div className="p-1">
                         <div className="about1-1">
                                     <span className="per-1">Personality</span>
                                     <p className="message1">While an active cat, the Abyssinian is an easy cat to have in your home. 
                                     Younger Burmese are active, curious cats, and adapt easily to changes. However as they get older, 
                                     some Burmese can become a bit too placid, preferring to watch rather to get involved in activities. 
                                     At any age, they love to look at the world around them and their favorite place may often turn out to be 
                                     a window where they can observe the world outside. Burmese cats are very comfortable with other Burmese, 
                                     but they may not get along as well with other breeds.</p>
                         </div>
                         <div className="about1-2">
                                     <span className="life-1">Life @ Home</span>
                                     <p className="message1-2">Abyssinians are active cats and generally will keep their weight under control 
                                     with compensating exercise. Burmese are good climbers and jumpers and should have cat trees and perches. 
                                     The Burmese is a sturdy, stocky cat and her nutrition should be watched to prevent obesity, particularly 
                                     if the cat does not get enough exercise. While adult Burmese are placid cats, 
                                     they also tend to be very kittenish and love their daily playtime. They love being adored by their parent, 
                                     and love having their stomach rubbed and being petted. A daily petting session is a must for any Burmese.</p>
                         </div>
                     </div> 
           
          

           <div className="picture-1">
            {getEmotional}
           </div>
           <Footer/>
        </div>

    )
}

