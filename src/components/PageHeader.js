import React from 'react';
import { Container } from "react-bootstrap"


function PageHeader(props) {
return(
    <>
        <header style={{background:'transparent', paddingTop:'92px', paddingBottom:'22px', background:'transparent'} }>
            <Container >
                
                <h1 style={{textShadow:'1px 1px white, #63aae7 1px 2px'}} dangerouslySetInnerHTML={{ __html: props.title }} />               
                <div dangerouslySetInnerHTML={{ __html: props.text }} />                
            </Container>
        </header>
    </>
)

}

export default PageHeader