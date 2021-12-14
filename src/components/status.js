import React, { useState, useEffect} from 'react';
//import socket from './SocketChat';
//import socket from './SocketChat';
const Status = (camioncode) => {
    let {camionerror} = camioncode;
    let {camionmensajefailsource} = camioncode;
    let {camionmensajefailcode} = camioncode;
    //socket.emit('TRUCKS');
    //socket.on('TRUCKS', mensaje1 => {
        //console.log(mensaje1);
    //});
    /*

    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    onSubmit={submit}

const submit = (e) => {
        e.preventDefault();
        socket.emit('CHAT', { message: mensaje, name: nombre });
        setMensaje("");
    }

    useEffect(() => {
        socket.emit('CHAT', { message: "Se ha conectado.", name: nombre });
     }, [nombre]);




    {   
                                    (element.status === "ok") &&
                                    <div className="ok">
                                        <h1>Todo Ok</h1>
                                    </div>
                                    
                                }  
                                {
                                    (element.status === "notok") &&
                                    <div className="notok">
                                        <p>{'Code: '}{element.code}</p>
                                        <p>{'Source: '}{element.source}</p>
                                    </div>
                                }
    */
    const [mensajecode, setMensajecode] = useState("");
    const [mensajesource, setMensajesource] = useState("");
    const [error, setError] = useState(false);
    useEffect(() => {
        setMensajecode(camionmensajefailcode);
        setMensajesource(camionmensajefailsource);
        setError(camionerror);
            
        
        //return () => {socket.off()}
    }, [camionerror,camionmensajefailcode,camionmensajefailsource]);
    return (
        <div className="nothing">  
            <h3>Status of:{' '}{camioncode}</h3>
            {
                !error &&
                <h1>Todo Ok</h1>
            }  
            {
                error &&
                <div>
                    <p>{'Code: '}{mensajecode}</p>
                    <p>{'Source: '}{mensajesource}</p>
                </div>
            }
        </div>
    );
    
}
export default Status;