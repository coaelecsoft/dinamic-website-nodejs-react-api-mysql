import React, { useEffect, useState } from "react";
import { Container, Figure } from "react-bootstrap";
//import { FigureCaption } from "react-bootstrap";

function Page(props) {

  const [isUrlEmpty, setIsUrlEmpty] = useState(true);
  const [subData, setSubData] = useState();

  useEffect(() => {
    setIsUrlEmpty(props.urlPage === "");
   // setSubData(props.slaveData);
  }, [props.urlPage]);


  return (
    <>
      <Container>
      
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.text }} />  
        <hr></hr>
        
        
      </Container>
      <Container>
      {isUrlEmpty && (
          // Render funkcija ako je props.urlPage === ""
          <section>
            {props.allData && props.allData.filter(item => item.menu_option === '0').map(item => (
              <>
              <div id={item.link_sr_latn} key={item.link}>
              <h2 key={item.id}>{item.title_sr_latn}</h2>
              <div>
              <div dangerouslySetInnerHTML={{ __html: item.text_sr_latn }} />  </div>
              </div>
              </>
            ))}
          </section>  
            )}
        {!isUrlEmpty && (
          // Render funkcija ako je props.urlPage različit od ""
        <div>
          {props.slaveData && JSON.parse(props.slaveData).map(item => (
            <>
            <div key={item.id}>
              <h2 >{item.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            
            {item.image &&(
                <Figure>
                <img src={`${'https://auto-savke.com/frontend/web/uploads/master/' + item.image }` }   alt={item.title} title={item.title} />
                </Figure>  
            )}
            </div>
            </>
          ))}
        </div>  
        )}  
      </Container>
    </>
  )
}
export default Page;