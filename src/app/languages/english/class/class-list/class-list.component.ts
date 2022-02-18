import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  activeWindow = 'My Courses';
  constructor(private socketService: WebsocketService) {}

  ngOnInit(): void {
    this.socketService.listen('onConnect').subscribe((data) => {
      console.log(data);
    });
  }
  changeTitle(str: string) {
    this.activeWindow = str;
  }
}
