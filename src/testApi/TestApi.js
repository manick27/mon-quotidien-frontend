import React, { Component } from 'react';

class TestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <h2>{post.user.name}</h2>
              <h2>{post.user.email}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestApi;