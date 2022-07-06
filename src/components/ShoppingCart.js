import React,{useState} from "react";
import { Button, Card, Col, Layout, Row} from 'antd';
import { BookOutlined,ShoppingCartOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import Login from "./Login";
const { Header, Content, Footer } = Layout;


const { Meta } = Card;

const PRODUCTS = 'products';
const CART = 'cart';
const LOGIN ='login'

const ShoppingCart = () => {
const [cart, setCart] = useState([]);
const [page, setPage] = useState(PRODUCTS)




const addToCart = (product) => {

    console.log('add to cart')
    setCart([...cart, {...product}])

};

const removeBooks = (productRemove) => {

setCart(cart.filter((product) => product !== productRemove));
console.log(cart)
};


const navigateTo = (nextPage) => {
    setPage(nextPage);
}


const renderCart = () => (
    <>
    <Layout>
    <Header style={{backgroundColor:"#F0F2F5"}}></Header>
     <Content style={{ padding: '0 50px' }}>
    <Row gutter={16} >
      {cart.map((product) => (
      <Col className="gutter-row" span={4}>
    
           <Card
           hoverable
           style={{
           }}
           cover={<img alt="example" src={product.image}/>}
           >
           <Meta style={{marginLeft:"17px"}} title={product.title} description={product.price} /><br/>
           <Button onClick={() => removeBooks(product) }>Remove</Button>
         </Card>
      </Col>
          ))}
      </Row>
      </Content>
      <Footer style={{ textAlign: 'center',  marginTop:"30px"}}>Copyright © Strand 1999 - 2022</Footer>
      </Layout>
    </>
    );


    return (
    <>
    <Row className="rowStyle">
      <Col span={8}></Col>
      <Col span={8}>< BookOutlined style={{fontSize:"27px", color:"#1cc7c4"}}/><h1>BookStore Strand</h1></Col>
      
        
        <Col span={8} style={{marginTop:"23px"}}>
      <ShoppingCartOutlined  onClick={() => navigateTo(CART)} style={{fontSize:"27px", color:"#1cc7c4", display:"inline-block",marginRight:"10px"}} >
        ({cart.length})
      </ShoppingCartOutlined>

      <Button ghost onClick={() => navigateTo(PRODUCTS)} style={{color:"black", marginTop:"9px", display:"inline-block", border:"solid black",marginLeft:"10px"}}>
        <b>View books</b>
      </Button>
      <Button ghost onClick={() => navigateTo(LOGIN)} style={{color:"black", width:"110px",marginTop:"9px", display:"inline-block", border:"solid black", marginLeft:"10px"}}>
       <b> Log out</b>
      </Button>
      </Col>
    </Row>

  <br/><br/><br/>

{page === PRODUCTS && <Products addToCart={ addToCart}/>}
{page === CART &&  renderCart()}
{page === LOGIN && <Login/>}

</>

    );
}


export default ShoppingCart;