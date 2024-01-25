import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer(props){
    return(
        <>
        <footer style={{minHeight:'145px', boxShadow: '-1px -3px 5px 2px #777'}}  className="footer bg-dark text-white">
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <b  style={{color:'#63aae7', fontSize:'1.3rem'}}>{props.title}</b>
                </Col>


                <Col  sm={6} md={6} lg={3}>
                    <ul style={{ borderLeft: '1px #63aae7 solid'}}>
                        <li>Izrada web sajtova</li>
                        <li>Web razvoj, dizajn i programiranje</li>
                        <li>Razvoj modernih i inovatinvih sistema</li>
                    </ul>
                </Col>
                <Col  sm={6} md={6} lg={3}>
                <ul style={{borderLeft: '1px #63aae7 solid'}}>
                        <li>Napredne web tehnologije></li>
                        <li>HTML, CSS, SCSS, Bootstrap..</li>
                        <li>Php, C#, JavaScript, Node.js, React.js</li>
                    </ul>
                </Col>
                <Col  sm={6} md={6} lg={3}>
                <ul style={{borderLeft: '1px #63aae7 solid'}}>
                        <li>SEO optimizacija</li>
                        <li>On-Page SEO optimizacija</li>
                        <li>Pisanje SEO tekstova</li>
                    </ul>
                </Col>
                <Col  sm={6} md={6} lg={3}>
                <ul style={{borderLeft: '1px #63aae7 solid'}}>
                        <li>Internet Reklamiranje</li>
                        <li>Upravljanje i vođenje servisa</li>
                       
                    </ul>
                </Col>
            </Row>
        
       
        </Container>
        </footer>
        </>
    )
}

export default Footer;