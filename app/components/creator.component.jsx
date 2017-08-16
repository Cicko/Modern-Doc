import $ from 'jquery'
import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'


const types = ['Book','API','FAQ','Other']


class Creator extends Component {
  state = {
    type: types[0],
    isPrivate: false
  };


  handleChange = (e, {value}) =>  {
    this.setState({type: value})
    if (value == types[3])
      $('.template').removeClass('disabled')
    else
      $('.template').addClass('disabled')
  }

  handlePrivate = (e, {checked}) => {
    this.setState({isPrivate: checked});
    if (checked)
      $('.private').removeClass('disabled')
    else
      $('.private').addClass('disabled')
  }

  handleSubmit = e => {
    //const { title, author }
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
        <Form.Field control={Input} className="template disabled" name="template" label='Template name' placeholder='template' />
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='Is Private' onChange={this.handlePrivate}/>
        <Form.Field control={Input} className="private disabled" name="organization" label="Github's Organization name" placeholder='organization'/>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default Creator
