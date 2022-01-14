import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private table: string = '/clients';
  constructor(private db: AngularFireDatabase) {}
  public getAll() {
    return this.db
      .list(this.table)
      .snapshotChanges()
      .pipe(
        map((clients) =>
          clients.map((data) =>
            Object.assign({}, data.payload.val(), { key: data.key })
          )
        )
      );
  }
  public delete(key: string) {
    /// ....
    this.db.list(this.table).remove(key);
  }

  public add(objet: any) {
    return this.db.list(this.table).push(objet);
  }

  public getOne(key: string) {
    return this.db.list(`${this.table}/${key}`).valueChanges();
  }

  public update(key: string, obj: any) {
    return this.db.list(this.table).update(key, obj);
  }
}
