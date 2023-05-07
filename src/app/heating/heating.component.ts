import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-heating',
  templateUrl: './heating.component.html',
  styleUrls: ['./heating.component.css']
})
export class HeatingComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms(): void {
    this.rooms = this.roomService.getRooms();
  }

  updateRoom(room: Room): void {
    this.roomService.updateRoom(room);
  }
}