import React from "react";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { useState, useEffect } from "react";



export default function Home(){
    const [cats, setCats] = useState([])



    useEffect(() =>{
        axios.get("https://api.thecatapi.com/v1/images/search?categories_names&limit=4&api_key=live_PyFSINzBS6sTZCu88ZtBg0kKcBOUYirODV6acJ0Mw2gLiCTMGJiiQwwTP0z6FSnZ")
        .then(res => {
            console.log(res.data)
            setCats(res.data)
        })
        .catch(err => console.log(err))
}, [])

const getData = cats.map((cat,index) => <img className="homecat-img" key={index} src={cat.url}></img>
     
)

    return(
        <div>
        
                 <header className="home-header">
                    <h1 className="title">Adopt the Purrr-fect Cat</h1>
                    <img className="head-img" alt="" src="https://www.valleywestvets.com/sites/default/files/interesting-cat-facts.jpg" />
                    
                        <p className="home-message">
                            When adopting a Cat, its important to consider what breed is pur-fect for your home. I've created a few catagories
                            with three different cat breeds to consider depending on your life needs.
                        </p>
                       
                </header>    
            <div className="flex-box">
                
                <div className="animal">
                    <h1 className="animal-lover">Animal-Lover</h1>
                                <h4 className="anim"> There's no secert that dogs and cats have bad blood, If you currently have a dog(s) and considering adopting a cat, this option is for you. 
                                    Everyone wants peace in their home and the selected cat breed is purr-fect to add to an animal lovers home.
                                </h4>
                
                                
                </div>
            
                <div className="emotional-sup">
                    <h1 className="support">Emotional-Support</h1>
                        <h4 className="support-para">
                            Are experiencing a mental disabilitie such as anxiety, depression and learning disabilites, chronic stress or post-traumatic stress?
                            Emotional support animals act as home healthcare for those who are struggling with a mental illness. 
                            While doctors sometimes prescribe an emotional support animal to provide the comfort the patient needs. 
                        </h4>
                </div>  

                <div className="family">
                    <h1 className="family-sup">Family-Life</h1>
                        <h4 className="family-item">
                        Cats and young children can absolutely live safely and happily together if you adopt a cat with the right temperament. 
                        The best cats for kids are gentle, friendly and patient. Click here to welcome the purr-fect cat into your home.
                        </h4>
                </div>

          
               
            </div>

            <ul className="list">
                        <h2>FUN FACTS</h2>
                    <ul>Cats are easy to house-train</ul>
                
                    <ul>Cats cost less to care for</ul>
                    
                    <ul>Cats have a long lifespan</ul>

                    <ul>Cats are good for your health</ul>
                   
                    <ul>Cats keep pests out your house</ul>

                    <p className="ador">but most importantly</p>
                    <p className="ador">they are</p>
                    <p className="ador">ADORABLE</p>
                </ul>

                <div className="data">
                    {getData}
                   
                </div>

                 <Footer/>

        </div>
    )
}