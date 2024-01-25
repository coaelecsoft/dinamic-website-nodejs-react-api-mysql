import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer(props){
    return(
        <>
        <footer style={{minHeight:'145px', boxShadow: '-1px -3px 5px 2px #777'}}  className="footer bg-dark text-white">
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <b style={{color:'#63aae7', fontSize:'1.3rem'}}>{props.title}</b>
                </Col>


               
            </Row>
        
       
        </Container>
        </footer>
        </>
    )
}

export default Footer;