import React from 'react'
import Form from './Form';
import Table from './Table';

//Bryan De Los Santos
class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    

  

   this.state = {favLinks: [["Twitter","https://twitter.com/"], ["Facebook", "https://www.facebook.com/"]
  , ["Goodreads", "https://www.goodreads.com/"]]};
  }


  removeLink = (index) => {
    
    this.setState((state) => {
    return  state.favLinks.splice(index, 1)
    })
  }


  handleSubmit = (favLinks) => {
       this.setState((state) => {
        return state.favLinks.push(favLinks)});
       

  }


  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
          <Table linkData = {this.state.favLinks} removeLink = {this.removeLink} />

        <br />

        <h3>Add New</h3>
        <Form handleSubmit = { this.handleSubmit } />
      </div>
    )
  }
}

export default LinkContainer
