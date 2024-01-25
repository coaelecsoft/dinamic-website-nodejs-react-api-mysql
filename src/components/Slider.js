import React, { useState, useEffect } from 'react';
//import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import * as Icon from 'react-bootstrap-icons';
import './myslider.scss';

function Slider(props){
    const allSlides = props.allData.filter(item => item.menu_option === '0' && item.page_option === '3').length;
    const [distance, setDistance] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const slides = allSlides - 1;
    const timerSlides = allSlides * 3000;

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
        <div className="MySlider">

            <motion.div className="LeftArrow">
              <motion.div className="LeftArrowIcon"
                whileHover={{scale:[1.2, 0.9, 1.2, 1.2], rotateZ: ['0deg','30deg', '-30deg', '0deg'] }}
              >
               <Icon.ArrowLeft color="white" size={64} />
             </motion.div>
            </motion.div>

            <motion.div className="RightArrow">
              <motion.div className="RightArrowIcon"
                whileHover={{scale:[1.2, 0.9, 1.2, 1.2], rotateZ: ['0deg','30deg', '-30deg', '0deg'] }}
              >
               <Icon.ArrowRight color="white" size={64} />
             </motion.div>
            </motion.div>

   


          <div style={{height:'80vh',overflow: 'hidden',gridColumn:'1/7', gridRow:'1/7'}} >
            <div id={'myMove'} style={{width:`calc( ${allSlides * 100}vw)`, display: 'flex', marginLeft:`-${distance}vw`, transition:'all 1s'}}>
            
            {props.allData && props.allData.filter(item => item.menu_option === '0' && item.page_option === '3').map((item, index) => (
                            <div key={item.id} className="post-style-1">
                            <div className="container text" style={{}} >
                                <h2 style={{textShadow:'1px 1px white, #63aae7 1px 2px'}} dangerouslySetInnerHTML={{ __html: item.title_sr_latn }} />
                                <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />
                            </div>
                            <motion.figure className="image"
                            style={{transition:'all 1s'}}
                            transition={{
                              duration: 1,
                              
                            }}
                              
                              whileInView={{ scale: [0.9, 1], opacity: [0,1] }} >
                          
                              <img src={`https://24.awd.rs/frontend/web/uploads/master/${item.image}`} className='d-block w-100' alt='...' />        
                            </motion.figure>
                            </div>
                                          
                    ))}
            
            </div>
          </div>
          
          </div>

    
    
   
)
}

export default Slider;