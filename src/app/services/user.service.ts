import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  create(user) {
    return this.db.list('/users').push(user);
  }

  getAll() {
    return this.db.list('/users');
  }

  get(userId) {
    return this.db.object('/users/' + userId);
  }

  udpate(userId, user) {
    return this.db.object('/users/' + userId).update(user);
  }

  delete(userId) {
    return this.db.object('/users/' + userId).remove();
  }

}
