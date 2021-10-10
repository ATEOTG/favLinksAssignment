import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {name: "", URL: ""};
    }

    handleChange = event => {
        // updates values everytime name field or URL field is changed
       event.preventDefault();
       if (event.target.id == "name") {
           this.state.name = event.target.value;
           
       }
       else if (event.target.id == "URL"){
           this.state.URL = event.target.value;
           
       }
    }

    submitForm = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        // add values to a list so I can take 0 element to be name
        // and 1th element to be URL
        let list1 = [this.state.name, this.state.URL];

        return (
            
            this.props.handleSubmit(list1),
            document.getElementById("myform").reset(),
            this.state.URL = "",
            this.state.name = ""
        );
    }

    render() {
        // field boxes for user to type name and URL
        
        return(
            <form id = "myform">
                <h4> Name </h4>
                <input type = "text" id ="name" name = "name"  onChange ={this.handleChange}
                 />
                <br></br>
                <h4> URL </h4> 
                <input type = "text" id = "URL" name = "URL"  onChange ={this.handleChange}
                />
                <br></br>
                <button onClick = {this.submitForm}> Submit </button>
            </form>
        )
    
    }
}

export default Form;
