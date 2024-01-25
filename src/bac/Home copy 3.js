import React from 'react';
import { Col, Container, Figure, Image, Row} from 'react-bootstrap';
import { motion } from "framer-motion"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

function Home(props) {
    
    return(
        <>
        <header style={{background:'transparent'}}>
            <Container>
                <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
                
            </Container>
        </header>
        <h2>{props.allData.filter(item => item.menu_option === '0' && item.page_option === '3').length}</h2>
        <MDBCarousel showIndicators showControls fade>
        
        {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option === '3').map((item, index) => (

                    <MDBCarouselItem itemId={item.link}>
                    <img src={`https://24.awd.rs/frontend/web/uploads/master/${item.image}`} className='d-block w-100' alt='...' />
                    <MDBCarouselCaption style={{}}>
                    <h2 dangerouslySetInnerHTML={{ __html: item.title_sr_latn }} />
                    <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />
                    </MDBCarouselCaption>
                    </MDBCarouselItem>

                ))}
        </MDBCarousel>

        <Container /* style={{background:'rgba(124,124, 124, .5)'}} */>
               
            </Container>
            <Container /* style={{background:'rgba(124,124, 124, .5)'}} */>
                {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option !== '3').map((item, index) => (
                    <Row className='myPanel' key={item.link}>
                        <Col className='myText' md={item.image ? 6: 12} id={item.id}>
                          <h2 dangerouslySetInnerHTML={{ __html: item.title_sr_latn }} />
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />
                          </div>
                        </Col>
                        {item.image && (
                          <Col className='myImage' style={{padding:0}} md={6}>
                            <Figure>
                              <Image
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                src={`https://24.awd.rs/frontend/web/uploads/master/${item.image}`}
                              />
                            </Figure>
                          </Col>
                        )}
                  </Row>
                ))}
            </Container>
      
      </> 
    )
}

export default Home;