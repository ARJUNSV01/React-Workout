import React from "react"
import Label from "./Label";

function ListItem(props){
    const sty={
        display:'flex',
        justifyContent:'flex-end'

    }
    return(
        <div className="list-item">
            <hr/>
            <div className="list-title">
                <h4>{props.title}</h4>
                <label onClick={props.onDelete} style={sty}>Delete</label>
            </div>
            <div className="list-desc">
                {props.descr}
            </div>
            <div className="list-label">
                <Label onAction={()=>{
                    console.log('parent clicked')
                }} isActive={props.isActive}/>
                
            </div>
        </div>
    )
}
export default ListItem;