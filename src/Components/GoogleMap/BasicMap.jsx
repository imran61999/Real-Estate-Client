
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const BasicMap = () => {
    const position = [51.505, -0.09]
    const mapStyle = {
        width: '100%',
        height: '400px' // Set the height to 400px
      };


    return (
       <div style={mapStyle}>
         <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
       </div>
    );
};

export default BasicMap;