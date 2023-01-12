import React from "react";


export default function Colors(props){

  
return(
    <div className="border">
        
        <div>{props.value}</div>
        {props.children}
        
        
    </div>
)
}

