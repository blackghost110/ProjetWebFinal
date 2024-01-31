import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  List$: WritableSignal<string[]> = signal(['test user', 'test user2']);
  Details$: WritableSignal<string> = signal('');

}
