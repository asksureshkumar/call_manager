import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  create(category) {
    return this.db.list('/categories').push(category);
  }

  getAll() {
    return this.db.list('/categories');
  }

  get(categoryId) {
    return this.db.object('/categories/' + categoryId);
  }

  udpate(categoryId, category) {
    return this.db.object('/categories/' + categoryId).update(category);
  }

  delete(categoryId) {
    return this.db.object('/categories/' + categoryId).remove();
  }

}
