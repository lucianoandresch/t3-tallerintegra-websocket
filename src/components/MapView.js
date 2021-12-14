import React, {useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet'

//import socket from './SocketChat';
const MapView = (argumentos) => {
    let {infocamiones} = argumentos;
    //socket.emit('TRUCKS');
    //socket.on('TRUCKS', mensaje1 => {
        //console.log(mensaje1);
    //});
    const [poly, setPoly] = useState([]);
    useEffect(() => {
        let caminoNuevo = [];
        infocamiones.forEach((element) => {
            let a = element.origin;
            let b = element.destination;
            caminoNuevo.push(a);
            caminoNuevo.push(b);
        });
        

        //console.log("LISTAMAG");
        //console.log(listamag);
        //console.log(mensaje);
        //console.log("MENSAJEFAIL:" + mensajefail.code);
        //console.log("ERROR:" + error);
        //const polyline = [
            //[-21.9, -68.8],
            //[-21.9, -70.8]
         //]
        setPoly(caminoNuevo);
        
        
    }, [infocamiones]);
    
    
    return (
        <div className="mapview">  
            <MapContainer center={[-21.985, -68.8]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-21.985, -68.8]}>
                    <Popup>
                    Apretar botón de Obtener Info <br /> Para desplegar los camiones y el mapa.
                    </Popup>
                </Marker>
                <Polyline positions={poly} />
            </MapContainer>
        </div>
    );
}
export default MapView;