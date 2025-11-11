import { Component } from '@angular/core';
import { Formulaire } from '../../formulaire/formulaire/formulaire';



@Component({
  standalone: true,
  selector: 'app-a-propos',
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.css',
  imports: [Formulaire]
})
export class APropos {
  personnes: Array<{nom: string, prenom: string, ville: string}> = [];

  enregistrerPersonne(personne: {nom: string, prenom: string, ville: string}) {
    this.personnes.push(personne);
  }
}
