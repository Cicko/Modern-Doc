import $ from 'jquery'
import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, Dropdown, Message} from 'semantic-ui-react'
import {createDoc} from '../../lib/GitbookSetupManager'


const types = ['Book','API','FAQ','Other']

const deploys = [
  {
    text:'Heroku',
    value:"heroku",
    image: { avatar: true, src: 'src/img/heroku.jpg' },
  },
  {
    text:'Github pages ',
    value:"gh-pages",
    image: { avatar: true, src: 'src/img/github.png'}
  },
  {
    text:'Gitbook',
    value:'gitbook',
    image: { avatar: true, src: 'src/img/gitbook.png'}
  }
]


class Creator extends Component {
  state = {
    type: types[0],
    isPrivate: false,
    currentDeploys: ''
  };


  handleChange = (e, {value}) =>  {
    this.setState({type: value})
    if (value == types[3])
      $('.template').removeClass('disabled')
    else
      $('.template').addClass('disabled')
  }

  handleInputChange = (event) => {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }


  handlePrivate = (e, {checked}) => {
    this.setState({isPrivate: checked});
    if (checked)
      $('.private').removeClass('disabled')
    else
      $('.private').addClass('disabled')
  }


/*  handleDeployAddition = (e, { value }) => {
      this.setState({
        currentDeploys: [{ text: value, value }, ...this.state.currentDeploys],
      })
  }


  handleDeployRemove = (e, removed) => {
    console.log(removed);
  }
  */

  handleDeploys = (e, { value }) => this.setState({ currentDeploys: value })

  handleSubmit = e => {

    if (this.state.author == null) this.state.author = ""

    console.log(this.state);
    createDoc(this.state, (path) => {
      console.log("Path is: " + path);
      this.setState({path : path});
      $('.ui.success.create.message.hidden').removeClass('hidden');
      setTimeout(() => {
        $('.ui.success.create.message').transition('fade');
      },5000);
    });
  }

  render() {
    const { type, currentDeploys } = this.state;
    return (
      <div>
      <div className="ui dimmer create">
        <div className="ui big indeterminate text loader">Creating book</div>
      </div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field required control={Input} name="title" label='Book title' placeholder='Sample Doc' onChange={this.handleInputChange}/>
          <Form.Field control={Input} name="author" label='Author' placeholder='Jackie Chan' onChange={this.handleInputChange}/>
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label={types[0]} value={types[0]} checked={type === types[0]} onChange={this.handleChange} />
          <Form.Field control={Radio} label={types[1]} value={types[1]} checked={type === types[1]} onChange={this.handleChange} />
          <Form.Field control={Radio} label={types[2]} value={types[2]} checked={type === types[2]} onChange={this.handleChange} />
          <Form.Field control={Radio} label={types[3]} value={types[3]} checked={type === types[3]} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={Input} className="template disabled" name="template" label='Template name' placeholder='template' onChange={this.handleInputChange}/>
        <Form.Field control={Dropdown} search selection fluid multiple label='Deployments' value={currentDeploys} options={deploys} placeholder='Select deployments. You can add IP addresses or server domains' onChange={this.handleDeploys}/>
        <Form.Field control={Checkbox} label='Is Private' onChange={this.handlePrivate}/>
        <Form.Field control={Input} className="private disabled" name="organization" label="Github's Organization name" placeholder='organization' onChange={this.handleInputChange}/>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      <Message
        className="ui success create message hidden"
        success
        header={'Your document ' + this.state.title + ' was created successfully at ' + this.state.path}
        content='Now you can go to the docs tab for following options.'
      />
      </div>
    )
  }
}

export default Creator
