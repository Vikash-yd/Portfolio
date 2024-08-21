import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/img/Vikash_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.png";

import { useEffect, useState } from 'react';

export default function NavBar(){
    const [activeLink, setActiveLink]=useState("Home");
    const [scroll,setScroll]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
        if(window.scrollY>50){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    }
        window.addEventListener("scroll", onScroll);
        return()=>window.addEventListener("scroll", onScroll);
    
    },[])
    const onUpdate=(Value)=>{
        setActiveLink(Value)
    }
    return(
       

    <Navbar expand="lg" className={scroll?"scroll":""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="image"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?"active navbar-link":"navbar-link"} onClick={()=>onUpdate("Home")}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink==='Skills'?"active navbar-link":"navbar-link"} onClick={()=>onUpdate("Skills")}>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink==='Projects'?"active navbar-link":"navbar-link"} onClick={()=>onUpdate("Projects")}>Projects</Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
                <a href="#">
                    <img src={navIcon1} alt=""/>
                </a>
                <a href="#">
                    <img src={navIcon2} alt=""/>
                </a>
                <a href="#">
                    <img src={navIcon3} alt=""/>
                </a>
            </div>
            <button className="vvd" onClick={()=>console.log("lets connect")}><span>Let's connect <i class="bi bi-arrow-right-circle-fill"></i></span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 



    )
}