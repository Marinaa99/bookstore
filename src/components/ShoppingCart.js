import React,{useState} from "react";
import { Button, Card, Col, Row} from 'antd';
import { BookOutlined,ShoppingCartOutlined} from "@ant-design/icons";
import Products from "./Products";
import "./style.css"
const { Meta } = Card;

const PRODUCTS = 'products';
const CART = 'cart';



const ShoppingCart = () => {
const [cart, setCart] = useState([]);
const [page, setPage] = useState(PRODUCTS)


const addToCart = (product) => {

    console.log('add to cart')
    setCart([...cart, {...product}])

};

const removeBooks = (productRemove) => {

setCart(cart.filter((product) => product !== productRemove));

if(cart < 0){setCart("dkc")}
};

const navigateTo = (nextPage) => {
    setPage(nextPage);
}


const renderCart = () => (
    <>
    <Row gutter={16} style={{
      
      padding:"20px 25px 20px 25px"}}>
      {cart.map((product) => (
      <Col className="gutter-row" span={4}>
    
           <Card
           hoverable
           style={{
           }}
           cover={<img alt="example" src={product.image}/>}
           >
           <Meta style={{marginLeft:"17px"}} title={product.title} description={product.price} /><br/>
           <Button onClick={() => removeBooks(product)}>Remove</Button>
         </Card>
      </Col>
          ))}
      </Row>
    </>
    );


    return (
    <>
    <Row className="rowStyle">
      <Col flex="auto">< BookOutlined style={{fontSize:"27px", color:"#1cc7c4"}}/><h1>BookStore</h1></Col>
      <Col flex="100px">
        
        <Row className="displayRow">
      <ShoppingCartOutlined  onClick={() => navigateTo(CART)} style={{fontSize:"27px", color:"#1cc7c4", display:"inline-block",marginRight:"10px"}} >
        ({cart.length})
      </ShoppingCartOutlined>

      <Button ghost onClick={() => navigateTo(PRODUCTS)} style={{color:"black", marginTop:"9px", display:"inline-block", border:"solid black"}}>
        <b>View books</b>
      </Button>
      </Row>
      </Col>
    </Row>

  <br/><br/><br/>

{page === PRODUCTS && <Products addToCart={ addToCart}/>}

{page === CART &&  renderCart()}

</>

    );
}


export default ShoppingCart;