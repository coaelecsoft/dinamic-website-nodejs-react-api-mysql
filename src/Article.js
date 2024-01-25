import React from 'react';
import { Col, Container, Figure, Row, Image } from 'react-bootstrap';
import { motion } from "framer-motion";
import { proposalSyntaxPlugins } from '@babel/preset-env/lib/shipped-proposals';
function Article(props){
    return(
        <>
            <Row style={{paddingTop:'26px'}} className='myPanel' >
            <Col className='myText' md={props.image ? 6: 12}>
            <motion.div style={{paddingBottom:'25px'}}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{ scale: [0.9, 1], opacity: [0,1] }} 
            >
            <h2
                style={{textShadow:'1px 1px white, #63aae7 1px 2px'}}
                dangerouslySetInnerHTML={{ __html: props.title }} 
            />
            <div>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
                <div>
                   
                </div>
               

               <p>{props.subart && (
                <a  className='btn btn-secondary' href={`${'/' +props.urlmain + '/' + props.link }` }
                style={{margin:'3px', padding:'12px 45px'}} >
            {props.title}
            </a>
               )}</p> 
                
                
            </div>
            </motion.div>
            </Col>
            {props.image && (
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
                
                    src={`https://24.awd.rs/frontend/web/uploads/master/${props.image}`}
                />
                </Figure>
                </motion.div>
            </Col>
            )}
            </Row>


           
        </>
    )
}

export default Article;