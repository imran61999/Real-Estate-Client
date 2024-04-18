import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import './style.css';
import { useLoaderData, useParams } from "react-router-dom";

const BasicMap = () => {
  const {id} = useParams();
    const estates = useLoaderData();
    const idx = parseInt(id)

    const estate = estates?.find(estate => estate.id === idx)
    const {lat, long} = estate;
    
  
  return (
   
        <MapContainer className="mb-8 mt-8" center={[lat, long]} zoom={13}>
        <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, long]} >

</Marker>
    </MapContainer>
    
    
  );
};

export default BasicMap;