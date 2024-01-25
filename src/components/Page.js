import React from 'react';
//import React, { useEffect, useState } from "react";
import { Col, Container, Figure, Image, Row} from 'react-bootstrap';
import { Link } from 'react-bootstrap-icons';
import PageHeader from './PageHeader';
//import { FigureCaption } from "react-bootstrap";
import { motion } from "framer-motion";
import Article from '../Article';

function Page(props) {
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
              <PageHeader title={props.title} text={props.text} />
              <Container>
               
                {props.slaveData && JSON.parse(props.slaveData).map((item, index) => (
                    <Article key={item.id} title={item.title} text={item.text} image={item.image} urlmain={props.urlPage} link={item.link} subart={item.subslaves} />
                ))}
              </Container>
              
          </>
)}
export default Page;