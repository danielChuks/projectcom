import React from "react";
// import './Navbar.css';
import { Nav,
         NavLink, 
         Bars, 
         NavMenu, 
         NavBtn, 
         NavBtnLink} from "./NavbarElement";

const Navbar = () => {
    return(
            <Nav>
                <NavLink to="/" >
                    <h3> ILONS </h3>
                </NavLink>
                <Bars />
                <NavMenu>
                   <NavLink to="/about" activestyle> About  </NavLink> 
                   <NavLink to="/contact" activestyle> Contact Us </NavLink> 
                   <NavLink to="/our-services" activestyle> Our Values </NavLink> 
                   <NavLink to="/signin" activestyle> Sign In </NavLink> 
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup' activestyle>Sign Up </NavBtnLink>
                </NavBtn>
            </Nav>
    )
}


export default Navbar;