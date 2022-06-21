import React,{useEffect, useState} from "react";
import './Usage.css'

function Usage(params){
   const arr = useState(0)
   const[value,setValue] = arr
   const[color,setColor]=useState('white')
   const[boom,setBoom]=useState(false)

//    useEffect(()=>{
//       console.log('Inside use effect' +value+''+color) 
//    },[value,color])
    useEffect(()=>{
        setBoom(false)
        const id = setTimeout(() => {
            setBoom(true)
        }, value*1000);
        return ()=>{
            clearTimeout(id)
        }
    },[value]);
    return(
        <div>
        <div className="usage">
            <div className="usage-item"style={{background:color}}>
            <button onClick={()=>{
                setValue((state)=>{
                    return state+1
                })
            }}>Increement</button>
            <label className="usage-item-label">{value}</label>
            <button onClick={()=>{
                setValue(value-1)
            }}>Decreement</button>
        </div>
        <button onClick={()=>{
            setColor('green')
        }}>Green</button>
        <button onClick={()=>{
            setColor('blue')
        }}>Blue</button>
        </div>
       {
           boom && value ? (
            <div className="boom">
            <span>
                BOOM
            </span>
        </div>
           ) : null
       }
        </div>
    )
}
export default Usage;