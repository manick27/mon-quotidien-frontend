import React, { Component } from 'react';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description
    };
    fetch('http://localhost:8000/api/categories', {
      method: 'post',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <h1>Add Category</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <label>Description</label>
          <input
            type='text'
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddCategory;