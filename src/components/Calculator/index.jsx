import { useState } from 'react'
import { evaluate } from 'mathjs';
import './index.css'

const buttonName = [
    {id:1,name:"C",classname:"red-btn"},
    {id:2,name:"⌫",classname:"blue-btn"},
    {id:3,name:"%",classname:"blue-btn"},
    {id:4,name:"÷",classname:"blue-btn"},
    {id:5,name:"7",classname:""},
    {id:6,name:"8",classname:""},
    {id:7,name:"9",classname:""},
    {id:8,name:"×",classname:"blue-btn"},
    {id:9,name:"4",classname:""},
    {id:10,name:"5",classname:""},
    {id:11,name:"6",classname:""},
    {id:12,name:"-",classname:"blue-btn"},
    {id:13,name:"1",classname:""},
    {id:14,name:"2",classname:""},
    {id:15,name:"3",classname:""},
    {id:16,name:"+",classname:"blue-btn"},
    {id:17,name:"^",classname:""},
    {id:18,name:"0",classname:""},
    {id:19,name:".",classname:""},
    {id:20,name:"=",classname:"green-btn"},
]

const Calculator = () => {
    const [input,setInput] = useState('')

    const handleButtonClick = (value) => {
        //Clear operation process
        if (value === "C") {
          setInput("");

        //Backspace operation process
        } else if (value === "⌫") {
          setInput(input.slice(0, -1));
        }

        //Controlling starting 0 input
        else if (input==="0" && value === "0") {
            setInput('0')
        }

        //Equal to operation
         else if (value === "=") {
          try {
            // Replace symbols with JS operators
            let expression = input
              .trim()
              .replace(/×/g, '*')
              .replace(/÷/g, '/')
              .replace(/\^/g, '**')
            setInput(evaluate(expression).toString())
          } catch {
            setInput("Error Occurs Try Again")
          }
        } 

        else if (value === "." && input.slice(-1) === ".") {
            return; // Do nothing
          }

        // Remaining operation process
        else {
            setInput(input + value) 
        }
      }

    return (
        <div className='calculator-container'>
            <h1 className='calculator-heading'>BASIC CALCULATOR</h1>
            <input type="text" className='display-input' placeholder='0' value={input} readOnly />  
            <div className='calculator-btn-container'>
                {buttonName.map(eachItem=>(  
                  <button 
                   type="button" 
                   className={`calculator-button ${eachItem.classname}`} 
                   key={eachItem.id}
                   onClick={() => handleButtonClick(eachItem.name)}
                  >
                    {eachItem.name}
                </button>
                ))}
            </div>
        </div>
    )
    
} 

export default Calculator