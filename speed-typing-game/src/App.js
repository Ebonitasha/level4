import React, {useRef} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
const START_TIME= 5
const textBoxRef = useRef(null)
  const [text, setText] = useState("")
  const [timer, setTimer] = useState(START_TIME)
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
 
  
  function handleChange(event){           
    setText(event.target.value)
  }
 
  function wordCountCalculator(){
    const wordsArr = text.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  function startGame(){
    setIsGameRunning(true)
    setTimer(START_TIME)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame(){
    setIsGameRunning(false)
      const numWords = wordCountCalculator(text)
      setWordCount(numWords)
  }

  useEffect(() => {
    if(isGameRunning && timer > 0){
    setTimeout(() =>{
      setTimer(time => time - 1)
      }, 1000)
    }  else if(timer === 0){
      endGame()
    } 
  }, [timer, isGameRunning])
  // function button(event){
  // event.preventDefault()
  // setIsGameRunning(true)
  // }
  return (
    <div className="App">
            <h1>HOW FAST CAN YOU TYPE??</h1>
            <textarea className='textarea'  
            ref={textBoxRef}
            value={text}
            onChange={handleChange}
            placeholder="'START TRYING HERE'"
            disabled={!isGameRunning}
            
            />
            <h4>Time Remaining: {timer}</h4>
            <button 
            onClick={startGame}
            disabled={isGameRunning}
            >
              Click to start typing
            </button>
            <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
