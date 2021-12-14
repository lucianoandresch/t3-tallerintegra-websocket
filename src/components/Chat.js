import React, { useState, useEffect} from 'react';
import socket from './SocketChat';
import '../styles/Chat.css';
import ChatScroll from './chatscroll';

const Chat = (argumento) => {
    let nombre = "Usuario";
    let {chates2} = argumento;
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);
    const [name, setName] = useState("");
    
    useEffect(()=>{
        setMensajes(chates2);
    },[chates2]);
    

    useEffect(() => {
        socket.emit('CHAT', { message: "Se ha conectado.", name: nombre });
     }, [nombre]);

    
    const submit = (e) => {
        e.preventDefault();
        socket.emit('CHAT', { message: mensaje, name: name });
        setMensaje("");
    }
    const [registrado, setRegistrado] = useState(false);
    
    const registrar = (e) => {
        e.preventDefault();
        if (name !== "") {
            setRegistrado(true);
        }
    }
    return (
        <div className="chat-background background">  
            <div className="SockFront">
                <h1>Chat</h1>
                <ChatScroll mensajes={mensajes} />
                <div>
                    <div>
                        {   
                            (!registrado) &&
                            <div className="ingresar">
                                <form onSubmit={registrar}>
                                    <label htmlFor="">Introduzca su NickName:</label>
                                    <input value={name} onChange={e => setName(e.target.value)}></input>
                                    <button>Ir al Chat</button>
                                </form>
                            </div>
                        }  
                        {
                            (registrado) &&
                            <div>
                                <form onSubmit={submit}>
                                <h4 htmlFor="">Hola:{name}{'.   '}Escribe tu mensaje:</h4>
                                <textarea name="" id="text"  value={mensaje} onChange={e => setMensaje(e.target.value)}>
                                </textarea>
                                <button id="button1">Enviar Mensaje</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Chat;