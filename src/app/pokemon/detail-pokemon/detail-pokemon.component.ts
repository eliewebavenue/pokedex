import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.models';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent {
  pokemon: Pokemon|undefined;

  constructor(private route:ActivatedRoute, private router: Router, public pokemonService: PokemonService) {}

  ngOnInit(){
    //ActivatedRoute est une classe de Angular qui permet de recuperer toutes les informations a propos de la route actif. Ici, la route est : pokemon/:id, donc avec paramMap.get('id') je recupere l'id passé sur l'url
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }
  }

  goBack(): void {
    this.router.navigate(['pokemons'])
  }

}
