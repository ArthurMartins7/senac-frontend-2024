import { Component, OnInit } from '@angular/core';

//Entidade Carta
//Depois será substituido por arquivo com a entidade

export interface Carta {
  id: number;
  nome: String;
  forca: number;
  inteligencia: number;
  velocidade: number;
  dataCadastro: Date;
}

@Component({
  selector: 'app-carta-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.css'
})
export class CartaListagemComponent implements OnInit{

  //Lista de cartas
  public cartas: Carta[] = [
    {id: 1, nome: 'Pelé', forca: 5, inteligencia: 5, velocidade: 5, dataCadastro: new Date()},
    {id: 2, nome: 'Vilmar', forca: 5, inteligencia: 5, velocidade: 1, dataCadastro: new Date()},
    {id: 3, nome: 'CR7', forca: 5, inteligencia: 3, velocidade: 4, dataCadastro: new Date()},
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
