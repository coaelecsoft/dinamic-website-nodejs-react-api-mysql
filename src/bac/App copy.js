
//App.js

import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.scss";
import NotFound from './PageNotFound';
import Menu from "./components/Menu";
import { Container } from "react-bootstrap";
import Home from "./Home";

import Page from "./components/Page";

//import { Suspense, lazy } from "react";

/*
const Home = lazy(() =>
    import("./Home.js"  webpackPrefetch: true )
);


const LoadingScreen = () => {
  return <div>Loading...</div>
}
*/
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
        <Menu icon menulist={data} />
      </header>
      <div>
        <Icon.ArrowLeft color="blue" size={64} />
        <Icon.Alexa color='red' size={64} />
        <Icon.Tools color='orange' size={64} />
        <Icon.DeviceHdd color='purple' size={64} />
        <Icon.Cpu color='yellow' size={64} />
        <Icon.Globe2 color='blue' size={64} />
        <Icon.Screwdriver color='blue' size={64} />
        <Icon.Modem color='blue' size={64} />
        <Icon.Pc color='red' size={64} />
        <Icon.Laptop color="brown" size={64} />
        </div>
      <main>
      <Routes>
        {data.filter(item => item.menu_option === '1').map(item => (
          <Route
          key={item.id+'home'}
          path={`${'/' + item.link_sr_latn}`}
          element={item.link_sr_latn === "" ? (
            <Home
              key={item.id}
              allData={data}
              title={item.heading_sr_latn}
              text={item.text_sr_latn}
              image={item.image}
              icon={item.icon}
              urlPage={item.link_sr_latn}
              slaveData={item.slave_data}
               />
          ) : (
            <Page
              allData={data}
              title={item.heading_sr_latn}
              text={item.text_sr_latn}
              image={item.image}
              icon={item.icon}
              urlPage={item.link_sr_latn}
              slaveData={item.slave_data}
            />
          )}
        />

          
            ))}
          <Route key={13131313} path="*" element={<NotFound />} />
      </Routes>
      </main>
      <footer  style={{minHeight:'145px', boxShadow: '-1px -3px 5px 2px #777'}}  className="footer bg-dark text-white">
        <Container>
        <hr></hr>
        <h3>coAElecSoft</h3>
        </Container>
        <Container>
       
        </Container>
        
      </footer>
    </>
  );
}

export default App;
