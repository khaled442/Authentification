import React, { useEffect } from "react";
import { getProducts } from "../../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import "./product.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products)

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <h1 id="products_heading">Latest Products</h1>
        {products.products.map(product=>
          <div className="card">
          <img
            className="movie__image"
            style={{ width: "250px", height: "250px" }}
            src= {product.images.url}
            alt= ""
          ></img>
          <div className="flex__card">
            <h3 className="heading">{product.price}</h3>
            <p className="paragraph">{product.description}</p>
            <h3 className="heading">{product.rating}</h3>
  
          </div>
          <buton className="buton">
            Details
          </buton>
          </div>
          
          )}
      

     
    </div>
  );
};

export default Products;
