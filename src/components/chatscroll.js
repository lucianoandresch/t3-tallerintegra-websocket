import React from "react";
//import socket from './SocketChat';
const ChatScroll = ({mensajes}) => {

    //socket.emit('TRUCKS');
    //socket.on('TRUCKS', mensaje1 => {
        //console.log(mensaje1);
    //});
    
    return (
        <div className="chat">
        { mensajes.map((e, i) => <div key={i}>
                <div> 
                    <h5>{'[Fecha: '}{e.date}{']-->'}{'[Nombre: '}{e.name}{']---->'}{e.message}</h5>
                </div>    
            </div> )}
        </div>
    );
}
export default ChatScroll;


