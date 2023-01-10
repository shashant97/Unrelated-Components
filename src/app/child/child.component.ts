import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private interactionService : InteractionService) { }

  ngOnInit(): void {
    this.interactionService.messageSourceParent$
    .subscribe(
      message => {
        if(message == 'hi'){
          alert('hello');
        }
      }
    )
  }

}
