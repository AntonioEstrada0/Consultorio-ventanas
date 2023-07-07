import { Component } from '@angular/core';

interface Message {
  text: string;
  time: string;
  incoming: boolean;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  messages: Message[] = [
    {
      text: 'Me cae mal lalo',
      time: '10:00 AM',
      incoming: true
    },
    {
      text: 'nose!',
      time: '10:01 AM',
      incoming: false
    }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.messages.push({
        text: this.newMessage,
        time: currentTime,
        incoming: false
      });
      this.newMessage = '';
    }
  }

}
