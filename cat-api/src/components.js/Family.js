import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";  
import data from "./data";
import Badge from "./Badge";
import family from "../images/family.jpg"
import Footer from "./Footer";

export default function Family(){
    const [familyCat, setFamilyCat] = useState([])

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&breeds=birm&api_key=api_key=live_LDRYX6ER5c95YvGJ8RQAYUA5Sb9O4jYypnUJq1EU5q9mSdIXyQA88ILpayjNELA2")
        .then( res => {
            console.log(res)
            setFamilyCat(res.data)
        })
        .catch(err => console.log(err))
}, [])
    // const getFamilyCat = familyCat.map((thing, index) =>{
    //     return(<img className="third-img" key={index} src={thing.url}></img>)
    // })
    const getFamilyCat = familyCat.map((cat, index) => {
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


    return(
        <div>
              <Badge {...data[2]} image={family}/>

              <div className="p-1">
                         <div className="about1-1">
                                     <span className="per-1">Personality</span>
                                     <p className="message1">While an active cat, the Abyssinian is an easy cat to have in your home. 
                                     The Birman is a more private breed and tends to attach herself to one person. 
                                     Some Birmans can show a bit of jealousy if their parent does not pay attention to them. 
                                     While they are territorial, they are not aggressive..</p>
                         </div>
                         <div className="about1-2">
                                     <span className="life-1">Life @ Home</span>
                                     <p className="message1-2">Abyssinians are active cats and generally will keep their weight under control
                                      with compensating exercise. Being a larger cat and somewhat stocky to begin with, 
                                      Birmans can become overweight. Daily exercise can help keep her in good physical condition.In addition, 
                                      groom your Birman daily to prevent matting of the fine fur.</p>
                         </div>
                     </div> 
               

            <div className="picture-1">
                {getFamilyCat}
                </div>
                <Footer/>
        </div>
    )
}