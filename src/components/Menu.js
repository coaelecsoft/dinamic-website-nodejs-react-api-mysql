//import { useState } from "react";
import {useLocation } from "react-router-dom";
import "./Menu.scss";
//import Logo from "../logo.svg"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';

function Menu(props){
  const location = useLocation();



    return(
        <> 
          <Navbar  bg="dark" className="navbar-dark fixed-top MyNavBar" expand="lg">
            <Container>
              <Navbar.Brand href="/">   
                  <img height={45} width={90} alt={'logo'}  src={`${'https://24.awd.rs/frontend/web/uploads/master/1704668084_logo.svg' /* + props.icon*/}` }/>          
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse bg="dark" id="basic-navbar-nav">
                <Nav className="me-auto" > 
                {props.menulist.filter(item => item.menu_option === '1').map(item => (  

                        <Nav.Link 
                          key={'link'+item.id}
                          style={{margin:'3px', padding:'12px 45px' /*, boxShadow: '0px 1px 3px 0px #63aae7', textShadow:'#63aae7 1px 0px'*/}}
                          href={`${'/' + item.link_sr_latn }` } 
                          ///onClick={handleLinkClick} // Add onClick handler here                 
                          className={`btn btn-secondary ${location.pathname === `/${item.link_sr_latn}` ? 'active' : ''}`}
                          >
                        {item.menu_title_sr_latn}
                        </Nav.Link>                        
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Container> 
          </Navbar>       
        </>
    )
}

export default Menu;