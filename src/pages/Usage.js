import React,{useState} from "react";
import './Usage.css'

function Usage(params){
   const arr = useState(0)
   const[value,setValue] = arr
   const[color,setColor]=useState('white')
    return(
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
    )
}
export default Usage;