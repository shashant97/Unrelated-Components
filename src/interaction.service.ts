import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _messageSourceParent = new Subject<string>();
  messageSourceParent$ = this._messageSourceParent.asObservable();

  constructor() { }

  sendMessage(message: string){
    this._messageSourceParent.next(message)
  }
}
