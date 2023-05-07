import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  rooms: Room[] = [
    { id: 1, name: 'Büro 1', temperature: 22, humidity: 45, ventilation: false },
    { id: 2, name: 'Büro 2', temperature: 20, humidity: 50, ventilation: true },
    { id: 3, name: 'Konferenzraum', temperature: 23, humidity: 40, ventilation: true },
    { id: 4, name: 'Küche', temperature: 18, humidity: 60, ventilation: false }
  ];

  getRooms(): Room[] {
    return this.rooms;
  }

  updateRoom(room: Room) {
    const index = this.rooms.findIndex(r => r.id === room.id);
    if (index >= 0) {
      this.rooms[index] = room;
    }
  }
}