import React, { Component} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class Search extends Component {
  
  state = {
   query: ""
  }

  noSubmit = (event) => {
    event.preventDefault();
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();
    this.props.callback(this.search.value);
  }
  
  render(){
    return (
      <Form onSubmit={this.noSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Search for..." ref={input => this.search = input} onChange={this.handleOnSubmit} />
      </Form.Group>
    </Form>
    )
  }
}


export default Search