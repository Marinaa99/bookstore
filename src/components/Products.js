import React, {useState}from "react";
import { Button, Card, Col, Layout, Row} from 'antd';
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const Products = ({addToCart}) => {

  const [products] = useState([
    {
    title:'Nebeska dvorišta',
    price: "10€",
    image:'https://www.laguna.rs/_img/korice/5546/nebeska_dvorista_v.jpg'
  },
    {
    title:'Životinjska farma',
    price: "8€",
    image:'https://www.laguna.rs/_img/korice/5208/zivotinjska_farma-dzordz_orvel_v.jpg'
  },
    {
    title:'Majstor i margarita',
    price: "13€",
    image:'https://www.laguna.rs/_img/korice/4628/majstor_i_margarita-mihail_bulgakov_v.jpg'
  },
  {
    title:'Znakovi pored puta',
    price: "9€",
    image:'https://www.laguna.rs/_img/korice/4984/znakovi_pored_puta-ivo_andric_v.jpg'
  },
  {
    title:'Slika Dorijana Greja',
    price: "7€",
    image:'https://www.laguna.rs/_img/korice/4309/slika_dorijana_greja-oskar_vajld_v.jpg',
  },
  {
    title:'Zapisi iz podzemlja',
    price: "14€",
    image:'https://www.laguna.rs/_img/korice/4558/zapisi_iz_podzemlja-fjodor_mihailovic_dostojevski_v.jpg'
  }
  
  ]);

  

return (
    <>
    <Layout>
     <Header style={{backgroundColor:"#F0F2F5"}}></Header>
    <Content style={{ padding: '0 50px' }}>
<Row gutter={8}  >
  {products.map((product) => (
  <Col className="gutter-row" span={4}>

       <Card
       hoverable
       style={{
      
      
       
       }}
       cover={<img alt="example" src={product.image} />}
       >
       <Meta style={{marginLeft:"17px"}} title={product.title} description={product.price}  /><br/>
       
       <Button onClick={() => addToCart(product)}>Add to cart</Button>
     </Card>
  </Col>
      ))}
    
  </Row>
  </Content>
  <Footer style={{ textAlign: 'center',  marginTop:"30px"}}>Copyright © Strand 1999 - 2022</Footer>
  </Layout>
</>

)
}


export default Products;