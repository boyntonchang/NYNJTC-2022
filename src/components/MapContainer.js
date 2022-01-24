import React from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({trail}) => {

    const mapStyles = {
      height: "100vh",
      width: "100%",
      marginTop:'1rem',
    };

    const locationValue = trail.GPS.split(",").map((item) => +item); 
    // console.log(locationValue);
    //const { lat, lng } = locationValue;
  return (
    <LoadScript googleMapsApiKey="AIzaSyAIchOFiGdGwJ-xQnD3d-GK5CURm_Wn1NA">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={{ lat: locationValue[0], lng: locationValue[1] }}
      >
        <Marker position={{ lat: locationValue[0], lng: locationValue[1] }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
