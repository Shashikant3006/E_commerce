import React, {useState,useEffect,useRef}from 'react'
import Typed from 'typed.js'
import Layout from "../../components/Layout/layout"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import "../../Authstyle/AuthStyle.css";



const Register = () => {
  const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['SIGNUP'],
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
  
  

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
              name,
              email,
              password,
              phone,
              address,
             answer
            });
            if (res&&res.data.success) {
                toast.success(res.data&&res.data.message, {
                    position: 'top-right',
                  
                  });
          
                  setTimeout(() => {
                    navigate("/login");
                  }, 2000);
            } 
              else {
              toast.error(res.data.message,{
                position:'top-right',
              });
            }
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong",{
              position:'top-right',
            });
          }
    }
    return(
    <Layout title="Register - Ecommer App">
    <div className="form-container ">
      <form onSubmit={handleSubmit}>
        <h4 className="title"><span ref={el} className="text"></span></h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="what is your D.O.B"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          SIGNUP
        </button>
      </form>
    </div>
  </Layout>
);
};

export default Register
