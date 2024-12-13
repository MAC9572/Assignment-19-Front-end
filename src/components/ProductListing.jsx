import '../style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './products';
import { Col, Container, Row } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';

function ProductListing() {

 const [products, setProducts] =useState([]);
 
 useEffect(()=>{
   axios.get('https://fakestoreapi.com/products')
   .then(res=>{
    setProducts(res.data);
   })
 },[])

 
  return (
    <Container>
    <h1 className="ProductTitle">Products</h1>
    <div className="product-list">
      <Row>
        {
        products.map((product, index)=>{
          return(
        <Col xs ={12} sm ={6} md ={4} lg ={3} xxl={3} key={index}>
         <Products ProductData ={product}/>
        </Col>
          )
        })}
     </Row>
    </div>
    </Container>
     
  
  );
}

export default ProductListing;
