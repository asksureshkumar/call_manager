import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class CallService {

  constructor(private db: AngularFireDatabase) { }

  create(call) {
    return this.db.list('/calls').push(call);
  }

  getAll() {
    return this.db.list('/calls');
  }

  get(callId) {
    return this.db.object('/calls/' + callId);
  }

  udpate(callId, call) {
    return this.db.object('/calls/' + callId).update(call);
  }

  delete(callId) {
    return this.db.object('/calls/' + callId).remove();
  }

}
