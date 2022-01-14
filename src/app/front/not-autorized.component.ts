import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-autorized',
  template: `
    <h1>Erreur 401</h1>
    <p>
      Veuillez vous connecter pour accéder à cette page via le lien suivant :
    </p>
    <p><a routerLink="/connexion">page de connexion</a></p>
  `,
  styles: [],
})
export class NotAutorizedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
