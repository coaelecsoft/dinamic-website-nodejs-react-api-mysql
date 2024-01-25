import React from 'react';
import { Col, Container, Figure, Image, Row} from 'react-bootstrap';
import { motion } from "framer-motion"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

function Home(props) {
    
    return(
        <>
        <header style={{background:'transparent'}}>
            <Container>
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
            </Container>
        </header>

            <Container style={{background:'rgba(124,124, 124, .5)'}}>
                {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option !== '3').map((item, index) => (
                    <Row key={item.link}>
                    {index % 2 === 0 ? (
                      <>
                        <Col style={{padding:0}} md={6}>
                          <Figure>
                            <Image
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              src={`https://auto-savke.com/frontend/web/uploads/master/${item.image}`}
                            />
                          </Figure>
                        </Col>
                        <Col md={6} id={item.id}>
                          <h2 dangerouslySetInnerHTML={{ __html: item.title_sr_latn }} />
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />
                          </div>
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col md={item.image ? 6: 12} id={item.id}>
                          <h2 dangerouslySetInnerHTML={{ __html: item.title_sr_latn }} />
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />
                          </div>
                        </Col>
                        {item.image && (
                          <Col style={{padding:0}} md={6}>
                            <Figure>
                              <Image
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                src={`https://auto-savke.com/frontend/web/uploads/master/${item.image}`}
                              />
                            </Figure>
                          </Col>
                        )}
                      </>
                    )}
                  </Row>
                ))}
            </Container>
      
      </> 
    )
}

export default Home;