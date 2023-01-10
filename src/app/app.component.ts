import { Component } from '@angular/core';
import { InteractionService } from 'src/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Independent-Components';

  constructor(private interactionService : InteractionService){}

  greetChild(){
    this.interactionService.sendMessage('hi');

  }
}
