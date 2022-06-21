import React from "react";
import AddNew from './AddNew'

class Tools extends React.Component {
    render(){
        const {children,onAction}=this.props
        // return this.props.children
        return(
            <div>
                <div className="list-header">
                    <select onChange={onAction}  name="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Non Active</option>
                    </select>
                    <AddNew/>
                </div>
              {children}  
              <div className="list-footer">
                  Some Info here
              </div>
            </div>
        )
    }
}
export default Tools;