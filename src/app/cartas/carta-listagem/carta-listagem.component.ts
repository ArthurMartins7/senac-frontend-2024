import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../shared/service/cartas.service';
import { Carta } from '../../shared/model/carta';

//Entidade Carta
//Depois será substituido por arquivo com a entidade



@Component({
  selector: 'app-carta-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.css'
})
export class CartaListagemComponent implements OnInit{

  public cartas: Carta[] = [
    
  ];


  constructor(private cartaService: CartasService) {}

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  private consultarTodasCartas() {
    this.cartaService.listarTodas().subscribe(
      resultado => {
        //Retorno bem sucedido da chamada HTTP
        this.cartas = resultado
      },
      erro => {
        // Retorno com erros da chamada HTTP

        // TODO evoluir para mostrar a mensagem
        // de erro ao usuário na tela
        console.log('Erro ao consultar cartas', erro);
      }

    );
  }
}
