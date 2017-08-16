import $ from 'jquery'
import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'


const types = ['Book','API','FAQ','Other']


class Creator extends Component {
  state = {
    type: types[0]
  };

  handleChange = (e, {value}) =>  {
    this.setState({type: value})
  }

  handleSubmit = e => {
    const { title, author, }
  }

  render() {
    const { type } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field required control={Input} name="title" label='Book title' placeholder='Sample Doc' />
          <Form.Field control={Input} name="author" label='Author' placeholder='Jackie Chan' />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label={types[0]} value={types[0]} checked={type === types[0]} onChange={this.handleChange} />
          <Form.Field control={Radio} label={types[1]} value={types[1]} checked={type === types[1]} onChange={this.handleChange} />
          <Form.Field control={Radio} label={types[2]} value={types[2]} checked={type === types[2]} onChange={this.handleChange} />
          <Form.Field control={Radio} label={types[3]} value={types[3]} checked={type === types[3]} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default Creator
