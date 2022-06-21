import React from "react";
import ListItem from '../list/ListItem'
import Tools from "../components/Tools";



class Homepage extends React.Component {
constructor(props){
    super(props);

    this.state={
        data:[],
        activeState:'all',
        message:''
    };
}   
    componentDidMount(){
        console.log('componentDidMount')
        fetch('/data.json')
        .then((data)=>{
           return data.json()
        })
        .then((data)=>{ 
            this.setState({
                data:data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.message !== this.state.message){
            this.setState({
                message:'Message'
            })
            console.log('componentDidUpdate ')
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    onListChange=(event)=>{
        const value = event.target.value;
        this.setState({
            activeState:value
        })
    }
    // Delete
    handleDelete=(item)=>{
        console.log('delete',item)
        const newList=this.state.data.filter((element)=> element.id !== item.id)
        
        this.setState({
            data:newList
        })
    }
    //
    
  render() {
      const{data,activeState}=this.state;
      const newList = data.filter((item)=>{
        if(activeState === 'all'){
            return true
        }
        if(activeState === 'active'){
            return item.isActive === true
        }
        if(activeState === 'non-active'){
            return item.isActive === false
        }
        return false
    })
    console.log(newList)
    return (
        <Tools onAction={this.onListChange}>
      <div className="app-list">
          {newList.map((obj)=>{
           return <ListItem  key={obj.id} 
           title={obj.title}
            descr={obj.descr}
             isActive={obj.isActive}
             onDelete={()=>{
                 this.handleDelete(obj)
             }}
                 
            />
          })}

      </div>
      </Tools>
    );
  }
}
export default Homepage;
