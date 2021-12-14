import '../styles/Chat.css';
import socket from './SocketChat';
//import Status from './status';

import React, { useEffect , useState} from 'react';
const InfoCamiones = (mensajex1) => {
    let {mensajex} = mensajex1;
    let {mensajefailx} = mensajex1;
    let {errorx} = mensajex1;
    let {listamag} = mensajex1;
    const [mensaje, setMensaje] = useState([]);
    const [mensajefail, setMensajefail] = useState({});
    const [lista, setLista] = useState([]);
    useEffect(() => {
        setLista(listamag);
        setMensaje(mensajex);
        setMensajefail(mensajefailx);
        //console.log("LISTAMAG");
        //console.log(listamag);
        //console.log(mensaje);
        //console.log("MENSAJEFAIL:" + mensajefail.code);
        //console.log("ERROR:" + error);
        
    }, [mensajex,mensajefailx,errorx,mensaje,mensajex1,mensajefail,listamag]);
    const handleClick = () => {
        socket.emit('TRUCKS');
        console.log(1);
    }
    const handleClick1 = (a) => {
        socket.emit('FIX', { code:a });
        console.log('FIX');
    }
    return (
        <div className="info-camiones">  
            <div>
                <div className="margin-left">
                    <h1>Info Camiones</h1>
                    <button onClick={() => handleClick()}>
                        Obtener Info
                    </button>
                </div>
            </div>
            { mensaje.map((camion) => <div key={camion.code}>
                    <div className="nothing">
                    <h3>Status of:{' '}{camion.code}</h3>
                        {lista.map(element => <div key={element.code}>
                            {(element.code === camion.code) && 
                            <div>
                                {   
                                    (element.status === "ok") &&
                                    <div className="ok">
                                        <h1>Todo Ok</h1>
                                    </div>
                                    
                                }  
                                {
                                    (element.status === "notok") &&
                                    <div className="notok">
                                        <button onClick={() => handleClick1(camion.code)}>
                                            Arreglar
                                        </button>
                                        <p>{'Code: '}{element.code}</p>
                                        <p>{'Source: '}{element.source}</p>
                                    </div>
                                }
                            </div>}
                        </div>)}
                    </div>

                    <p>{'capacity:'}{camion.capacity}</p>
                    <p>{'code:'}{camion.code}</p>
                    <p>{'engine:'}{camion.engine}</p>
                    <p>{'truck:'}{camion.truck}</p>
                    <p>{'destination:['}{camion.destination[0]}{','}{camion.destination[1]}{']'}</p>
                    <p>{'origin:['}{camion.origin[0]}{','}{camion.origin[1]}{']'}</p>
                    <h3>Staff:</h3>
                    { camion.staff.map((staff) => <div key={staff.name}>
                    <p>{'Name:'}{staff.name}{" <> Age:"}{staff.age}</p>
                    
    
                    </div> )}
                    </div> )}
        </div>
    );
}
export default InfoCamiones;