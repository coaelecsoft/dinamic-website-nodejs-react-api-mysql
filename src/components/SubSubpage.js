import React from 'react';
//import React, { useEffect, useState } from "react";
import { Col, Container, Figure, Image, Row} from 'react-bootstrap';
//import { FigureCaption } from "react-bootstrap";
import { motion } from "framer-motion";
import PageHeader from './PageHeader';
import Article from '../Article';
function SubSubpage(props) {
/*
  const [isUrlEmpty, setIsUrlEmpty] = useState(true);
  const [subData, setSubData] = useState();

  useEffect(() => {
    setIsUrlEmpty(props.urlPage === "");
   // setSubData(props.slaveData);
  }, [props.urlPage]);
*/

  return(
                <>
                <header style={{background:'transparent', paddingTop:'92px', paddingBottom:'22px', background:'transparent'} }>
                    <Container >
                    <nav style={{ paddingBottom:'22px'}}>
                    <a  className='btn btn-secondary' href={`${'/' + props.urlMain  }` }
                        style={{margin:'3px', padding:'12px 45px'}}
                        title={props.mainTitle} >
                        {props.mainMenuTitle}
                  </a>
                  <a  className='btn btn-secondary'  href={`${'/' +props.urlMain + '/' + props.urlSlave  }` } 
                        style={{margin:'3px', padding:'12px 45px'}}
                        title={props.mainTitle} >
                        {props.slaveTitle}
                  </a>
                  </nav>
                        <h1 style={{textShadow:'1px 1px white, #63aae7 1px 2px'}} dangerouslySetInnerHTML={{ __html: props.title }} />               
                        <div dangerouslySetInnerHTML={{ __html: props.text }} />                
                    </Container>
                </header>
                <Container>
                 
                  </Container>
                
                
                 <Container>
                 
                  {props.slaveData && JSON.parse(props.slaveData).map((item, index) => (
                     

                      <Row key={item.id} style={{paddingTop:'26px'}} className='myPanel' >
                      <Col className='myText' md={props.image ? 6: 12}>
                      <motion.div style={{paddingBottom:'25px'}}
                                  transition={{
                                      duration: 1,
                                  }}
                                  whileInView={{ scale: [0.9, 1], opacity: [0,1] }} 
                      >
                      <h2
                          style={{textShadow:'1px 1px white, #63aae7 1px 2px'}}
                          dangerouslySetInnerHTML={{ __html: item.title }} 
                      />
                    
                       <div dangerouslySetInnerHTML={{ __html: item.text }} />
                    
                      
                      </motion.div>
                      </Col>
                      {item.image && (
                      <Col style={{overflow:'hidden'}} className='myImage'  md={6}>
                          <motion.div style={{transition:'all 1s'}}
                                      transition={{
                                      duration: 1,
                                      
                                      }}
                                      whileHover={{scale: 1.05}}
                                      whileInView={{ scale: [0.9, 1], opacity: [0,1] }} >
                          <Figure >
                          <Image
                          
                          style={{ width: "100%", height: "100%", objectFit: "cover", transition: 'all 1s', borderRadius:'3px', boxShadow: '1px 3px 5px 2px #777' }}
                          
                              src={`https://24.awd.rs/frontend/web/uploads/master/${item.image}`}
                          />
                          </Figure>
                          </motion.div>
                      </Col>
                      )}
                      </Row>





                  ))}
                </Container>
                        
                       
                
            </>
)}
export default SubSubpage;