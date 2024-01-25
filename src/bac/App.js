
//App.js
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.scss";
import Page from './Page';
import NotFound from './PageNotFound';
import Menu from "./components/Menu";
import { Container } from "react-bootstrap";


function App(props) {
  
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://js.awd.rs/api')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


  return (
    < >
      <header>
         {/* data su podaci za klient-rect App. props.podaci su podaci koji se salju sa servera.*/}
        <Menu menulist={data} />
      </header>

      <main>
      <Routes>
        {data.filter(item => item.menu_option === '1').map(item => (
          <Route 
            key={item.id} 
            path={`${'/' + item.link_sr_latn }`} 
            element={<Page 
                          title={item.heading_sr_latn}  
                          text={item.text_sr_latn}
                          image={item.image} />}>

          </Route>
            ))}
          <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <footer>
        <Container>
        <h2>coAElecSoft</h2>
        </Container>
        <Container>
        
        </Container>
        
      </footer>
    </>
  );
}

export default App;
