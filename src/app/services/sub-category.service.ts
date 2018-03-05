import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class SubCategoryService {

  constructor(private db: AngularFireDatabase) { }

  create(subCategory) {
    return this.db.list('/sub-categories').push(subCategory);
  }

  getAll() {
    return this.db.list('/sub-categories');
  }

  get(subCategoryId) {
    return this.db.object('/sub-categories/' + subCategoryId);
  }

  udpate(subCategoryId, subCategory) {
    return this.db.object('/sub-categories/' + subCategoryId).update(subCategory);
  }

  delete(subCategoryId) {
    return this.db.object('/sub-categories/' + subCategoryId).remove();
  }

}
