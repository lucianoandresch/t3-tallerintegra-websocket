import React, { useState, useEffect } from 'react';
import Chat from './Chat-Socket-Front1';
//import socket from './SocketChat';
function SocketFront(argumento) {
    let {chates1} = argumento;
    const [nombre, setNombre] = useState("");
    const [registrado, setRegistrado] = useState(false);
    
    const registrar = (e) => {
        e.preventDefault();
        if (nombre !== "") {
            setRegistrado(true);
        }
    }
    //socket.on('CHAT', mensaje => {
        //console.log(mensaje);
    //});
    //socket.on("CHAT", data => {
        //console.log(data);
    //});
    // Socket.emit('conectado', "hola desde cliente");
    return (
        <div>
            <div className="SockFront">  
                {//<h1>Socket-Front</h1>
                }
                    {
                        !registrado &&
                        <form>
                            <label htmlFor="">Introduzca su NickName:</label>
                            <input value={nombre} onChange={e => setNombre(e.target.value)}></input>
                            <button>Ir al Chat</button>
                        </form>
                    }  
                    {
                        registrado && 
                        <Chat nombre={nombre} chates2={chates1} />
                    }  
            </div>
        </div>  
    );
}
export default SocketFront;