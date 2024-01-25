import React from 'react';
import { Container} from 'react-bootstrap';
import { motion } from "framer-motion"

function Home(props) {
    
    return(
        <>
        <header style={{background:'rgba(224,224, 224, .5)'}}>
            <Container>
           
            <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />  
               
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <hr></hr>
            </motion.div>
               
            </Container>
            
        </header>

        <div style={{background:'transparent'}}>
            <Container style={{background:'--bs-primary'}}>
                {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option === '3').map(item => (
                    <>
                        <div id={item.link_sr_latn} key={item.link}>
                            <h2 key={item.id}>{item.title_sr_latn}</h2>
                            <div>
                            <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />  </div>
                        </div>
                    </>
                ))}
            </Container>

            
      </div>
      <div>
      <Container style={{background:'rgba(124,124, 124, .5)'}}>
                {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option !== '3').map(item => (
                    <>
                        <div id={item.link_sr_latn} key={item.link}>
                            <h2 key={item.id}>{item.title_sr_latn}</h2>
                            <div>
                            <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />  </div>
                        </div>
                    </>
                ))}
            </Container>
      </div>
      </> 
    )
}

export default Home;