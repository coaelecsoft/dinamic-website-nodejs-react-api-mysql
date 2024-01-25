import React from 'react';
//import { Col, Container, Figure, Image, Row} from 'react-bootstrap';
//import { motion } from "framer-motion"
//import Button from 'react-bootstrap/Button';
import Slider from './components/Slider';
import PageHeader from './components/PageHeader';
import PageArticles from './components/PageArticles';
import * as Icon from 'react-bootstrap-icons';
import Maps from './components/Maps';

function Home(props) {
  




    return(
        <>   
        <PageHeader title={props.title} text={props.text} />
        
        <Slider  allData={props.allData} />             
        <PageArticles allData={props.allData} />  
     
       <Maps latMap={props.lat} longMap={props.long} title={props.title} text={props.text} icon={props.icon} image={props.image} />
        
                       
      </> 
    )
}

export default Home;
/// 