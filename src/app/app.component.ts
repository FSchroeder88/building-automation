import { Component } from '@angular/core';
import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms: Room[] = [];
  selectedRoom: Room = new Room;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }

  increaseTemperature() {
    this.selectedRoom.temperature++;
    this.roomService.updateRoom(this.selectedRoom);
  }

  decreaseTemperature() {
    this.selectedRoom.temperature--;
    this.roomService.updateRoom(this.selectedRoom);
  }

  toggleVentilation() {
    this.selectedRoom.ventilation = !this.selectedRoom.ventilation;
    this.roomService.updateRoom(this.selectedRoom);
  }
}
