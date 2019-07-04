import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(public wsService:WebsocketService) { }

  sendMessage(mensaje:string){
    const payload = {
      de: 'Pedro manuel salas',
      cuerpo: mensaje
    };

    this.wsService.emit('mensaje',payload)
  }

  obtenerMensajes(){
   return this.wsService.listen('mensaje-nuevo');
  }
}
