import React, { Component } from 'react'




export default function Badge(props){
   console.log(props)
   return(
    <div className="section-1">
    <div className="box-1">
        <img className="first-photo" src={props.image} alt="" />
       
        <div className="info">
            <span className="header">Breed:{props.breed}</span>
                <div className="weight">Weight
                    <ul className="male-1">male:{props.male}</ul>
                    <ul className="female-1">female:{props.female}</ul>
                </div>
                <div className="eye-1">Eye Color
                    <ul className="eyes-1">{props.eyeColor}</ul>
                </div>
                <div className="expect-1">Expectations
                    <ul className="yrs-1">life-expectancy:{props.life}</ul>
                    <ul className="social-1">social/attention needs:{props.attention}</ul>
                    <ul className="shed-1">shedding:{props.shed}</ul>
                </div>
              <div><h2 className="h2-1">{props.about}</h2></div>  
        </div>
    </div> 
</div>    
   ) 
}
