import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('userMessage') userMessage!: ElementRef<HTMLTextAreaElement>;
  messageHistory: string[] = [];

  constructor(private io: WebsocketService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    let chatID = this.router.snapshot.paramMap.get('id');
    this.io.listen('welcome').subscribe((data) => {
      console.log(data);
      this.io.emit('joinRoom', { roomID: chatID });
    });
  }

  sendMessage(e: Event) {
    e.preventDefault();
    console.log(this.userMessage.nativeElement.value);
    this.userMessage.nativeElement.value = '';
  }
}
