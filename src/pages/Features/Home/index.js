import React, { useState, useEffect } from 'react';
import HeroBanner from '../../../components/HeroBanner';
import product1 from '../../../assets/images/product1.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice'
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/products`).then(e => e.json())
    .then(
      e => {
        setProducts(e.data)
      }
    )
  }, []);
  const handleAddProduct = (e, id) => {
    e.preventDefault();
    dispatch(addToCart(id));
  }
  return(
    <>
      <HeroBanner />
      <section className="section-product">
        <div className="container">
          <h2 className="section-title">List Product</h2>
          <ul className="product-list">
            {
              products.map(e => (
                <li className="product-item col-3" key={e.id}>
                  <div className="product-wrap">
                    <Link to="/product/e.id" className="product-image">
                      <img src={product1}/>
                    </Link>
                    <div className="product-card">
                      <h4 className="product-name">{e.name}</h4>
                      <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna</p>
                    </div>
                    <button onClick={(event)=>handleAddProduct(event, e.id)} className="product-btn"><i className="fas fa-cart-plus"></i></button>
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
