import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";
import Logo from "../logo.svg"
import { Navbar, Nav, Container } from 'react-bootstrap';



function Menu(props){
  const location = useLocation();

  const [isOpened, setIsOpened] = useState(false);

  function toggleMenu() {
    setIsOpened(!isOpened);
  }
  function handleLinkClick() {
    setIsOpened(false); // Close the menu when any link is clicked
  }
    return(
        <> 
                <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          
            <img height={45} width={90} alt={'logo'}  src={Logo}/>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {props.menulist.filter(item => item.menu_option === '1').map(item => (              
         
                  <Nav.Link 
                    key={item.id}
                    href={`${'/' + item.link_sr_latn }` } 
                    onClick={handleLinkClick} // Add onClick handler here                 
                    className={`${location.pathname === `/${item.link_sr_latn}` ? 'Active' : ''}`}
                    >{item.menu_title_sr_latn}
                  </Nav.Link>   

            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <nav className={`MainMenu ${isOpened ? 'OpenedMenu' : ''}`}>
        <div className="ControlBtn">
          <Link to={'/'}> 
            <figure>
            <img alt={'logo'} src={Logo}/>
            </figure>
          </Link>
          <Link 
          onClick={toggleMenu}>
            <figure>
            <img alt={'logo'}  src={Logo}/>
            </figure>
          </Link>
        </div> 





        <ul className="MenuList">
        
          
            {props.menulist.filter(item => item.menu_option === '1').map(item => (              
                <li key={item.id}>
                  <Link 
                  to={`${'/' + item.link_sr_latn }` } 
                  onClick={handleLinkClick} // Add onClick handler here                 
                  className={`${location.pathname === `/${item.link_sr_latn}` ? 'Active' : ''}`}
                  >{item.menu_title_sr_latn}</Link>   

                </li> 
            ))}
        </ul>     
      </nav>
        </>
    )
}

export default Menu;