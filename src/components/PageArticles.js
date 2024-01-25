
import React from 'react';
import { Col, Container, Figure, Image, Row} from 'react-bootstrap';
import { motion } from "framer-motion";

function PageArticles(props) {
return(
    <>
        <Container /* style={{background:'rgba(124,124, 124, .5)'}} */>
                {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option !== '3').map((item, index) => (
                
                    <Row style={{paddingTop:'26px'}} className='myPanel' key={item.id}>
                        <Col className='myText' md={item.image ? 6: 12} id={item.id}>
                          <motion.div style={{paddingBottom:'25px'}}
                                      transition={{
                                        duration: 1,
                                      }}
                                      whileInView={{ scale: [0.9, 1], opacity: [0,1] }} 
                          >
                          <h2
                            style={{textShadow:'1px 1px white, #63aae7 1px 2px'}}
                            dangerouslySetInnerHTML={{ __html: item.title_sr_latn }} 
                          />
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />

                            <p>{item.link_sr_latn}</p>
                            
                            
                            {JSON.parse(item.slave_data)[0].id &&(
                            <a  className='btn btn-secondary' href={`${'/' + item.link_sr_latn }` }
                                  style={{margin:'3px', padding:'12px 45px'}} >
                            {item.title_sr_latn}
                            </a>
                            )}
                          </div>
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
)

}

export default PageArticles