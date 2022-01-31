import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor(private socket: Socket) {}
  // emit event
  emit(eventName: string, data: {}) {
    this.socket.emit(eventName, data);
  }

  // listen event
  listen(eventName: string) {
    return this.socket.fromEvent(eventName);
  }
}
