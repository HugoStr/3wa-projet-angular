import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private articles = [
    {
      id: 1,
      titre: 'article 1',
      contenu: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor a neque et pellentesque. In diam nibh, venenatis a hendrerit porta, elementum a elit. Ut tristique dignissim leo non venenatis. Sed vitae leo ac arcu efficitur sagittis. Nullam id sem sit amet tortor dignissim consequat ac non tellus. Nunc ultrices ante quis ipsum porta dictum. Vivamus sed lorem vel nunc feugiat hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet pellentesque risus, id vestibulum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tincidunt, nibh vitae malesuada consequat, nibh massa tempus mauris, a condimentum augue tellus vel mi. Proin tempor, lectus et tristique vehicula, erat ligula dapibus nunc, ut volutpat arcu nunc eget libero. Maecenas dignissim odio vitae diam blandit vestibulum. Aenean efficitur id odio ut vestibulum. Vivamus fringilla eu nunc in porttitor. Fusce in libero lacinia, lacinia velit molestie, bibendum ex.
    Sed porttitor felis faucibus lorem porta, at semper diam lacinia. Suspendisse malesuada dignissim porttitor. Nulla facilisi. Sed at ex lobortis, convallis ante in, tincidunt eros. Suspendisse odio libero, posuere a ultrices vitae, dignissim ac tortor. Fusce massa sapien, commodo at velit nec, semper fringilla lectus. Etiam et purus interdum, accumsan lorem quis, euismod enim. Fusce tortor ligula, tincidunt in ex nec, rutrum varius velit. Sed vitae justo viverra, iaculis ex id, maximus est. Vestibulum porttitor, purus congue consequat pellentesque, nisi ante ultricies orci, id ultricies augue justo a lorem.`,
      dt_publication: new Date(),
      prix: 10.2,
    },
    {
      id: 2,
      titre: 'article 2',
      contenu: 'lorem ipsum',
      dt_publication: new Date(),
      prix: 20.5,
    },
    {
      id: 3,
      titre: 'article 3',
      contenu: 'lorem ipsum',
      dt_publication: new Date(),
      prix: 100,
    },
  ];
  constructor(private http: HttpClient) {}
  public getArticles() {
    return this.articles;
  }
  public getArticleFactices() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public articleCompleteAvecAuteur() {
    const articles$ = this.getArticleFactices();
    const users$ = this.http.get('https://jsonplaceholder.typicode.com/users');

    return (combineLatest([articles$, users$]) as Observable<Array<any>>).pipe(
      map(([articles, users]) => {
        return users.map((user: any) =>
          Object.assign({}, user, {
            articles: articles.filter(
              (article: any) => article.userId == user.id
            ),
          })
        );
      })
    );
  }

  public articleComplete() {
    const articles$ = this.getArticleFactices();
    const commentaires$ = this.http.get(
      'https://jsonplaceholder.typicode.com/comments'
    );

    return (
      combineLatest([articles$, commentaires$]) as Observable<Array<any>>
    ).pipe(
      map(([articles, commentaires]) => {
        return articles.map((article: any) =>
          Object.assign({}, article, {
            commentaires: commentaires.filter(
              (commentaire: any) => commentaire.postId == article.id
            ),
          })
        );
      })
    );
    /* forkJoin ({
      articles : articles$,
      commentaires : commentaires$
    })
    .pipe(
      map (
        ({articles , commentaires}) => {
        return  articles.map( (article : any) => article.id === commentaires.postId )
      })
    )
    .subscribe(
      console.log
    ) */
  }
}
