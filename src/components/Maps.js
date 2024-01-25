import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, MarkerF, InfoWindow, InfoWindowF } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '50vh',
};





function Maps(props){
   // const [lat, setLat]=useState(props.latMap);
    //const [long, setLong]=useState(props.longMap);
    //const laton = props.latMap;
    const center = {
        lat: Number(props.latMap), // default latitude
        lng: Number(props.longMap), // default longitude
      };
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);
    const id = 'marker';
    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };


    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBoV4ehpbFW1wb5EvZC34F89VLlczsBjgU',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
      
      return (
        <div style={{width:'100%', overflow:'hidden', paddingTop: '30px'}}>
            
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <MarkerF
          key={id}
          position={center}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div style={{minHeight:'56px'}}>
              <img width={34} height={34} src={`https://24.awd.rs/frontend/web/uploads/master/${props.icon}`} />
                <h2 dangerouslySetInnerHTML={{ __html: props.title }} />
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
                <img width={134} height={134} src={`https://24.awd.rs/frontend/web/uploads/master/${props.image}`} />
                </div>
            </InfoWindowF>
          ) : null}
        </MarkerF>


          </GoogleMap>
        </div>
      );
}
export default  Maps;
/*
{markers.map(({ id, name, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div style={{minHeight:'56px'}}>{name}</div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
      */