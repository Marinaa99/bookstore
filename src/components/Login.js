import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import "./style.css"




const Login =() => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [page, setPage] = useState()
  

    const SHOPPINGCART = 'shoppingcart'
    
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
     
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      const userData = database.find((user) => user.username === uname.value);
  
  
      if (userData) {
        if (userData.password !== pass.value) {
        
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }
  
   
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
   
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" onClick={() => navigateTo(SHOPPINGCART)} style={{backgroundColor:"#595658", borderRadius:"20px"}} />
          </div>
        </form>
      </div>
    );
    
    return (
        <div className="app">
          {isSubmitted ? page === SHOPPINGCART && <ShoppingCart/>: renderForm}
     
        </div>
        
      
    );
  }


  export default Login;