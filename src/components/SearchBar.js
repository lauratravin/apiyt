import React from "react";




class SearchBar extends React.Component{

    state= {
        term: ''
    }
    
    onInputChange = (e) => {
        this.setState({term: e.target.value})
    };
    onFormSubmit = (e) => {
        
        this.props.onFormSubmit(this.state.term) //call back the parent to launch axios
    
        e.preventDefault();
    }

     render(){
         return (
         <div className="ui segment">
             <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Videos Search</label>
                        <input type="text" 
                        placeholder="cats"
                        value={this.state.term} 
                        onChange={ this.onInputChange}/>
                    </div>
             </form>
         </div>
         )
     }


}
export default SearchBar;