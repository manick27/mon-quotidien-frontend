import React, { Component } from 'react';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/products')
      .then(response => response.json())
      .then(data => this.setState({ Products: data }));
  }

  render() {
    // console.log(this.state.Products);
    return (
      <div>
        <h1>Produits</h1>
        <ul>
          {this.state.Products.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              {/* <img src={product.main_image} alt={product.name} /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
