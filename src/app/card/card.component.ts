import { Component, Input, OnInit } from '@angular/core';
import { ServicioDeFavoritoService } from '../servicio-de-favorito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEnTrante: any;
  public image!: string;
  constructor(private servicioFavorito: ServicioDeFavoritoService) { }

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354'
    // console.log("Entrada de data", this.dataEnTrante);

  }

  agregarFavorito() {
    // console.log(this.dataEnTrante);
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data: this.dataEnTrante
    })
  }
}
