import React, { useState, useEffect } from 'react';
import { Col, Container, Figure, Image, Row} from 'react-bootstrap';
import { motion } from "framer-motion"
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Slider from './components/Slider';


function Home(props) {
    const allSlides = props.allData.filter(item => item.menu_option === '0' && item.page_option === '3').length;
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

   // const slides = 5; // Replace with your actual slides value
    const [distance, setDistance] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    
    const slides = allSlides - 1;
    const timerSlides = slides * 2000;

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDistance((prevDistance) => prevDistance + 100);
        setCurrentSlide((prevSlide) => prevSlide + 1);
  
        if (currentSlide > slides) {
          clearInterval(intervalId);
          setDistance(0); // Reset distance after all slides
          setCurrentSlide(1); // Reset currentSlide for potential reuse
        }
      }, timerSlides); // Adjust interval duration as needed
  
      return () => clearInterval(intervalId); // Clean up interval on unmount
    }, [slides, currentSlide]);




    return(
        <>
        <header style={{background:'transparent'}}>
            <Container>
                <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
               
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
                
            </Container>
        </header>
        
        <div style={{height:'80vh', background: 'lightgrey',overflow: 'hidden'}} >
        <div id={'myMove'} style={{width:`calc( ${allSlides * 100}vw)`, display: 'flex', marginLeft:`-${distance}vw`, transition:'all 1s'}}
      
         >
        {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option === '3').map((item, index) => (
                      <Slider title={item.title_sr_latn} text={item.text_sr_latn} image={item.image} />                     
                ))}
        
        </div>
        </div>
        <Container /* style={{background:'rgba(124,124, 124, .5)'}} */>
       
            </Container>
            <Container /* style={{background:'rgba(124,124, 124, .5)'}} */>
                {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option !== '3').map((item, index) => (
                
                    <Row style={{paddingTop:'16px'}} className='myPanel' key={item.link}>
                       
                 
                        <Col className='myText' md={item.image ? 6: 12} id={item.id}>
                          <motion.div style={{}}

                                  transition={{
                                    duration: 1,
                                    delay: 0.3,
                                    
                                  }}
                                  initial={{ opacity: 0.6, scale: 0.9 }}
                                    whileInView={{ scale: 1, opacity: 1 }} >
                          <h2
                            
                            dangerouslySetInnerHTML={{ __html: item.title_sr_latn }} 
                          />
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />
                          </div>
                          </motion.div>
                        </Col>
                        {item.image && (
                          <Col style={{overflow:'hidden'}} className='myImage'  md={6}>
                            <motion.Figure style={{}}
                                           initial={{ opacity: 0, padding:40 }}
                                           transition={{
                                            duration: 2,
                                            delay: 0.3,
                                            ease: [0.5, 0.71, 1, 1.5],
                                          }}
                                           whileInView={{opacity: 1, padding:0}}
                                           
                                            whileHover={{ opacity: 0.9 }}

                                      >
                              <Image
                              
                              style={{ width: "100%", height: "100%", objectFit: "cover",transition: 'all 1s' }}
                              
                                src={`https://24.awd.rs/frontend/web/uploads/master/${item.image}`}
                              />
                            </motion.Figure>
                          </Col>
                        )}
                  </Row>
                   
                ))}
            </Container>
            <Container>
            <h2>{allSlides + '= ' +currentSlide + ' ++ ' + distance}</h2>
        <Button onClick={toggleOpen} variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button onClick={toggleOpen} variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button  onClick={toggleOpen} variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button onClick={toggleOpen} variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
          <div style={{height: '36px'}}>
        <MDBBtn onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn>
        </div>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </Container>
      </> 
    )
}

export default Home;