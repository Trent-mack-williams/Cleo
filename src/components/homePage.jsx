import React, { Component } from "react";
import { getProducts } from "../services/productService";
import { Link } from "react-router-dom";
import headerVideo from "../assets/header-video3.mp4";
import incense from "../assets/incense.jfif";
import ProductList from "./productList";
import { paginate } from "../utils/paginate.js";
import Pagination from "./common/pagination";

class HomePage extends Component {
  state = {
    products: [],
    pageSize: 8,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ products: getProducts() });
  }

  //PAGINATION: This updates current page
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    //PAGINATION:
    //we use descturcting to fetch the length property from the following obj
    const { length: itemCount } = this.state.products;
    //further destructing of props
    const { products, pageSize, currentPage } = this.state;
    const pagesProducts = paginate(products, currentPage, pageSize);

    //Background image setting
    var giftSetStyle = {
      backgroundImage: `url(${incense})`
    };

    return (
      <div>
        <section>
          <div className="video-cont">
            <video
              className="video header-video"
              autoPlay
              loop
              src={headerVideo}
              type="video/mp4"
            />
          </div>
          <div className="header-text-cont">
            <h3 className="header3">THE TRADITION OF SHARING</h3>
            <h2 className="headline">THE RITUALS OF SELF CARE</h2>
            <p className="p1">
              Discover the ancient way with the new Milk and Honey range
            </p>
            <Link to="/Milk-and-Honey" className="btn cta_light">
              SEE THE COLLECTION
            </Link>
          </div>
        </section>
        <section className="offering-cont">
          <h4 className="header4">AT YOUR SERVICE</h4>
          <h3 className="header3">Free deliveries over £30</h3>
        </section>
        <section className="giftset-cont" style={giftSetStyle}>
          <div className="giftset-text">
            <h3 className="header1">Tailored gift sets</h3>
            <h2 className="header3">
              and we will beautifully wrap it and deliver it with a hand written
              note of your choice for the perfect gift
            </h2>
          </div>
        </section>
        <ProductList
          products={this.state.products}
          pagesProducts={pagesProducts}
        />
        <Pagination
          //when filtering is running change itemCount to filtered
          itemCount={itemCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}
//<div className="header-text-cont">
//          <h2>INDULGE IN MILK AND HONEY</h2>
//          <Link to="/Milk-and-Honey" className="btn">
//            See the collection
//          </Link>
//        </div>

//        <video
//          className="video header-video"
//          autoPlay
//          loop
//          src={headerVideo}
//          type="video/mp4"
//        />
export default HomePage;
