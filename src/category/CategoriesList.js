import React, { Component } from 'react';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/categories')
      .then(response => response.json())
      .then(data => this.setState({ Categories: data }));
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        <ul>
          {this.state.Categories.map(category => (
            <li key={category.id}>
              <h2>{category.title}</h2>
               {/* <p>{category.description}</p> */}
             </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;