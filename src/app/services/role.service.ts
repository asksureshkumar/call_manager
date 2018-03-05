import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class RoleService {

  constructor(private db: AngularFireDatabase) { }

  create(role) {
    return this.db.list('/roles').push(role);
  }

  getAll() {
    return this.db.list('/roles');
  }

  get(roleId) {
    return this.db.object('/roles/' + roleId);
  }

  udpate(roleId, role) {
    return this.db.object('/roles/' + roleId).update(role);
  }

  delete(roleId) {
    return this.db.object('/roles/' + roleId).remove();
  }

}
