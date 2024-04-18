import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import './style.css';

const BasicMap = () => {
  
  return (
   
        <MapContainer className="mb-8 mt-8" center={[51.505, -0.09]} zoom={13}>
        <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]} >

</Marker>
    </MapContainer>
    
    
  );
};

export default BasicMap;