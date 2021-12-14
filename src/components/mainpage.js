import React, { useState, useEffect} from 'react';
import Chat from './Chat';
import MapView from './MapView';
import '../styles/Chat.css';
import socket from './SocketChat';
import InfoCamiones from './InfoCamiones';
function Mainpage() {
    //const [error, setError] = useState(false);
    const [chates, setChates] = useState([]);
    const [mensaje, setMensaje] = useState([]);
    const [mensajefail, setMensajefail] = useState({});
    const [error, setError] = useState(false);
    const [lista, setLista] = useState([]);
    useEffect(() => {
        socket.on('TRUCKS', mensaje1 => {
            let arreglo = [];
            mensaje1.forEach(element => {
                let code = element.code;
                let status = "ok";
                let source = "";
                let ob = {code, status, source};
                arreglo.push(ob);
            });
            setLista(arreglo);
            setMensaje(mensaje1);
            //console.log(mensaje);
            //console.log("LISTA:");
            //console.log(lista);
        });
        socket.on('CHAT', mensajechat => {
            
            setChates([...chates,mensajechat])
            console.log('MENSAJECHAT');
            console.log(mensajechat);
            
        });
        
        socket.on('FIX', mensajefix => {
            let nuevalista = [];
            lista.forEach(element => {
                if (element.code === mensajefix.code){
                    let code = element.code;
                    let status = "ok";
                    let source = "";
                    let ob = {code, status, source};
                    nuevalista.push(ob);
                }
                else{
                    nuevalista.push(element);
                }
            });
            setLista(nuevalista);
            //console.log("NUEVA LISTA:");
            //console.log(lista);
            //console.log(mensajefail);
        });
        socket.on('FAILURE', mensajefail1 => {
            let nuevalista = [];
            lista.forEach(element => {
                if (element.code === mensajefail1.code){
                    let code = element.code;
                    let status = "notok";
                    let source = mensajefail1.source;
                    let ob = {code, status, source};
                    nuevalista.push(ob);
                }
                else{
                    nuevalista.push(element);
                }
            });
            setLista(nuevalista);
            setMensajefail(mensajefail1);
            setError(true);
            //console.log("NUEVA LISTA:");
            //console.log(lista);
            //console.log(mensajefail);
        });
        return () => {socket.off()}
    }, [mensaje,mensajefail,lista,chates]);
    return (
        <div>
            <div className="mainpage container"> 
                <div>
                    <div>
                    <h1 className="titulo">Tarea 3 Websockets</h1>
                    </div> 
                    <MapView infocamiones={mensaje} />
                </div>
                <div>
                    <Chat chates2={chates} />
                </div> 
            </div>
            <div>
                <InfoCamiones mensajex={mensaje} mensajefailx={mensajefail} errorx={error} listamag={lista}/>   
            </div>
        </div>
        
    );
}
export default Mainpage;