import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import {NavLink,Link} from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';



const Header = () => {


  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Shopify','E-commerce'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);




  const[auth, setAuth]=useAuth()
  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
    toast.success("Logout Successfully")
   
  }
  
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand">
      <FaShopify /> <span ref={el} className="text"></span></Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link">Category</NavLink>
        </li>
        
        {
          !auth.user?(<>
            <li className="nav-item">
          <NavLink to="/register" className="nav-link" >signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" >Login</NavLink>
        </li>

          </>) : (<>
     
              {/* {auth?.user?.name} */}
              <li className="nav-item">
                  <NavLink to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`}
                     className="nav-link">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={handleLogout} to="/login" className="nav-link" >Logout</NavLink>
                </li>
              
           
  
            
          </>)
        }
       
       <li className="nav-item">
          <NavLink to="/cart" className="nav-link">Cart(0)</NavLink>
        </li>
      </ul>
     
    </div>
    </div>
    </nav>
    </>
  )
}

export default Header
