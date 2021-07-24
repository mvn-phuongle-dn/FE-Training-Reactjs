import React from 'react';
import HeroBanner from '../../../components/HeroBanner';
import product1 from '../../../assets/images/product1.jpg';

const Home = () => {
  const products = [1,2,3,4,5,6,7,8]
  return(
    <>
      <HeroBanner />
      <section className="section-product">
        <div className="container">
          <h2 className="section-title">List Product</h2>
          <ul className="product-list">
            {
              products.map(e => (
                <li className="product-item col-3">
                  <div className="product-wrap">
                    <a href="#" className="product-image">
                      <img src={product1}/>
                    </a>
                    <div className="product-card">
                      <h4 className="product-name">Neck shoulder pain</h4>
                      <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna</p>
                    </div>
                    <a href="" className="product-btn"><i className="fas fa-cart-plus"></i></a>
                  </div>
                </li>
                )
              )
            }
          </ul>
        </div>
      </section>
    </>
  );
}
export default Home;
