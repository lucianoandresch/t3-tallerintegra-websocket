import React, { useState, useEffect, useRef } from 'react';
import socket from './SocketChat';
import '../styles/Chat.css';

const Chat = (argumento) => {
    let {nombre} = argumento;
    let {chates2} = argumento;
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        socket.emit('CHAT', { message: "Se ha conectado.", name: nombre });
     }, [nombre]);

    useEffect(() => {
            setMensajes([chates2])
            console.log(mensajes); 
    }, [mensajes, chates2]);

    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    });

    const submit = (e) => {
        e.preventDefault();
        socket.emit('CHAT', { message: mensaje, name: nombre });
        setMensaje("");
    }
    return (
        <div>
            <div className="chat">
            { mensajes.map((e, i) => <div key={i}>
                    <div> 
                        <h5>{'[Fecha: '}{e.date}{']-->'}{'[Nombre: '}{e.name}{']---->'}{e.message}</h5>
                    </div>    
                </div> )}
                <div ref={divRef}></div>
            </div>
            <div>
                <form onSubmit={submit}>
                    <p htmlFor="">Escribir mensaje:</p>
                    <textarea name="" id="text"  value={mensaje} onChange={e => setMensaje(e.target.value)}>
                    </textarea>
                    <button id="button1">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;