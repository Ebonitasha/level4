// import React, {useState} from "react"

// // create a react Context() and save in a variable
// const ChangeContext=React.createContext()

// function ChangeContext(props){

//     const [color, setColor]= useState("dark")

//     // create toggle to past down setcolor 
//     const toggleTheme = ()=>{
//       setColor(prevColor => prevColor === "dark" ? "purple" : "dark")
  
//     }

//     return(
//         {/* we have 2 values to expose to the provide(setcolor and toggletheme so we need to create an object to hold those values) */}
//           <ChangeContext.Provider value={{
//             color: color,
//             toggleTheme: toggleTheme
//           }}>
         
//             {props.children}
//           </ChangeContext.Provider>
        
//     )

// }

// export {ChangeContext, ChangeContextProvider}
// // ADD THE PROVIDER TO BE EXPORT AND WHEN EXPORTING MORE THEN 1 WE CAN REMOVE DEFAULT

// //  add a outter set of {} to repersent a javescript expression and the inner set repersent the object 
// //           the string indicate which class i want to use 