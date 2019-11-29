import React, { Component } from "react";
class ProductList extends Component {
  render() {
    const { products, pagesProducts } = this.props;
    console.log(products);
    // url(" + product.imageArr[0] + ")"
    //<img
    //              src={product.imageArr[0]}
    //              className="productImage"
    //              style={{
    //                width: 100,
    //                height: 100
    //              }}
    //            ></img>
    return (
      <section className="product-list-section">
        <div className="parent">
          {pagesProducts.map(product => (
            <div className="child">
              <div className="product-cont">
                <div
                  className="productImage"
                  style={{
                    backgroundImage: "url(" + product.imageArr[0] + ")"
                  }}
                ></div>
                <h4 className="header4">{product.name}</h4>
                <p className="p1">{product.breifDescription}</p>
                <p className="p1">£{product.price}</p>
                <button className="btn cta_dark">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ProductList;
