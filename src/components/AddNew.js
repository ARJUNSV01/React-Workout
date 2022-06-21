import React from "react";
//input box
//here we are updating the state whenever there is a change in the input value
class AddNew extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            titleInput:''
        }
    }
    handleChange=(event)=>{
        const value=event.target.value;
    this.setState({
        titleInput:value
    })
    }
    handleClick=()=>{
        console.log(this.state.titleInput)
    }
    render(){
        return(
            <div className="add-new">
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}
//As of now, this is not a controlled component bcs the value of input box doesn't depend upon th prop it passes
//So we cant change input's value when any other value changes
//to make it controlled:
// render(){
//     return(
//         <div className="add-new">
//             <input value="{this.state.titleInput}" onChange={this.handleChange}/>
//             <button onClick={this.handleClick}>Click here</button>
//         </div>
//     )
// }
//So,now when the state changes input's value changes thus making it controlled component
export default AddNew;