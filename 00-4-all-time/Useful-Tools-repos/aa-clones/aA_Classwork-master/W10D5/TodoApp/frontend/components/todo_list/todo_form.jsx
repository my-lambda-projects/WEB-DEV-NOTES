import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      title: '',
      body: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: Math.floor(Math.random()*10000) + 1,
      title: this.state.title,
      body: this.state.body
    }

    this.props.receiveTodo(todo);
  }



  render() {
    return (
      <div>
        <h3>Create New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" onChange={this.updateTitle} value={this.state.title}/>
          </label>
          <br/>
          <label>Body:
            <input type="text" onChange={this.updateBody} value={this.state.body}/>
          </label>
          <br/>
          <input type="submit" value="Add To-Do"/>

        </form>


      </div>
    )

  }
}

export default TodoForm