
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
import Subpage from "./components/Subpage";
import Footer from "./components/Footer";
import SubSubpage from "./components/SubSubpage";
import Maps from "./components/Maps";

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
    //const[icon, setIcon] = useState();
    //const[title, setTitle] = useState();
    
    //const icon = 'icon.svg';
    useEffect(() => {

        axios.get('https://js.awd.rs/api')
            .then(response => {
                setData(response.data);
                //setIcon(response.data.find((item) => item.id === 1).icon);
                //setTitle(response.data.find((item) => item.id === 1).title_sr_latn);
            })
            .catch(error => {
                console.error(error);
            });
            //setIcon(props.podaci.find((item) => item.id === 1).icon);
            //setTitle(props.podaci.find((item) => item.id === 1).title_sr_latn);
    }, []);

  return (
    < >     
         {/* data su podaci za klient-rect App. props.podaci su podaci koji se salju sa servera.*/}
        <Menu  menulist={props.podaci} />

      <main>
        
      <Routes>
        {props.podaci.filter(item => item.page_active === '1').map(item => (
                    <React.Fragment key={`item-${item.id}`}>
                        <Route
                            key={item.id+'home'}
                            path={`${'/' + item.link_sr_latn}`}
                            element={item.link_sr_latn === "" ? (
                              <Home
                                key={item.id}
                                allData={props.podaci}
                                title={item.heading_sr_latn}
                                text={item.text_sr_latn}
                                image={item.image}
                                icon={item.icon}
                                urlPage={item.link_sr_latn}
                                lat={item.lat}
                                long={item.long}
                                />
                            ) : (
                              <Page
                                //allData={data}
                                title={item.heading_sr_latn}
                                text={item.text_sr_latn}
                                image={item.image}
                                icon={item.icon}
                                urlPage={item.link_sr_latn}
                                slaveData={item.slave_data}
                              />
                            )}
                          />
                        {JSON.parse(item.slave_data).map(slave => (
                             <React.Fragment key={`slave-${item.id}`}>
                           
                                <Route
                                    key={`route-${item.id}-${slave.id}`}
                                    path={`/${item.link_sr_latn}/${slave.link}`}
                                    element={
                                    <Subpage 
                                      title={slave.title} 
                                      text={slave.basic} 
                                      image={slave.image}
                                      mainMenuTitle={item.menu_title_sr_latn}
                                      mainTitle={item.title_sr_latn}
                                      urlMain={item.link_sr_latn} 
                                      urlPage={slave.link}  
                                      slaveData={slave.subslaves} 
                                    />}
                                />


                              {JSON.parse(slave.subslaves)?.map(subslave => (
                                  <Route
                                  key={`route-${item.id}-${slave.id}-${subslave.id}`}
                                  path={`/${item.link_sr_latn}/${slave.link}/${subslave.link}`}
                                  element={
                                  <SubSubpage
                                    title={subslave.title} 
                                    text={subslave.text} 
                                    image={subslave.image}
                                    urlPage={subslave.link} 
                                    mainMenuTitle={item.menu_title_sr_latn}
                                    mainTitle={item.title_sr_latn}
                                    urlMain={item.link_sr_latn} 
                                    slaveTitle={slave.title}
                                    urlSlave={slave.link}
                                    slaveData={subslave.ssslaves} 
                                  />}
                              />
                              ))}
                               
                           </React.Fragment>


                        ))}

                    </React.Fragment>
                ))}
          <Route key={13131313} path="*" element={<NotFound />} />
      </Routes>
      </main>
     
    <Footer title={'Izrada web sajtova i SEO optimizacije za uspešno internet poslovanje'} />
                               

    
    </>
  );
}

export default App;
