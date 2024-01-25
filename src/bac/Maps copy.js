import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, MarkerF, InfoWindow, InfoWindowF } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 44.813669, // default latitude
  lng: 20.513108, // default longitude
};

const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position:  {
        lat: 44.843569, // default latitude
        lng: 20.573108, // default longitude
      }
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position:  {
        lat: 44.813619, // default latitude
        lng: 20.513108, // default longitude
      }
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position:  {
        lat: 44.842669, // default latitude
        lng: 20.525208, // default longitude
      }
    },
    {
      id: 4,
      name: "New York, New York",
      position: {
        lat: 44.713669, // default latitude
        lng: 20.533308, // default longitude
      }
    }
  ];


function Maps(){
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);

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
        <div style={{width:'100%', overflow:'hidden'}}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
          >

{markers.map(({ id, name, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div style={{minHeight:'76px'}}>{name}</div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
          </GoogleMap>
        </div>
      );
}
export default  Maps;