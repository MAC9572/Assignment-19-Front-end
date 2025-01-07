import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

function Root() {

  const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fetch all products on component mount
      useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error("Error fetching products:", error));
      }, []);
    
      // Filter products based on search term
      const handleSearch = () => {
        const results = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
      };
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <Cart3 className="icon" size={20} color="green" /> e-Cart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="" className="nav-link">
                Cart
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                type="search"
                placeholder="Search Products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="me-2"
                aria-label="Search"
              />
              <Button as = {Link} to ={'/product-search'} onClick={handleSearch} variant="outline-success">
                Search
              </Button >
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {filteredProducts.length > 0 ? (
          <ol>
             <p className="searchKey">Products Found Matching "{searchTerm}".</p>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <img
                  className="image"
                  src={product.image}
                  alt={product.title}
                />
                <h5>{product.title}</h5>
                <p className="product-desc">{product.description}</p>
                <strong id="price">${product.price}</strong>
              </li>
            ))}
          </ol>
        ) : (
          searchTerm && <></>
        )}
      </Container>
      <Outlet />
    </>
  );
}

export default Root;