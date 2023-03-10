import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritoService } from '../servicio-de-favorito.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private servicioFavorito: ServicioDeFavoritoService) { }
  public listadeVideos: Array<any> = [];
  ngOnInit(): void {
    this.servicioFavorito.disparadorDeFavoritos.subscribe(
      data => {
        console.log('Recibiendo data....', data);
        this.listadeVideos.push(data);
      }
    )
  }

}
