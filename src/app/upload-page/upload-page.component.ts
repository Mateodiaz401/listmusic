import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  public previsualizacion: string;
  public files: any = []
  public loading: boolean

  constructor(private sanitizer: DomSanitizer, private rest: RestService) { }

  ngOnInit(): void {
  }

  capturarFile(event): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.files.push(archivoCapturado)
    //
    console.log(event.target.files);

  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  clearImage(): any {
    this.previsualizacion = '';
    this.files = [];
  }

  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.files.forEach(archivo => {
        formularioDeDatos.append('files', archivo)
      })
      this.rest.post(`http://localhost:3004/upload`, formularioDeDatos)
        .subscribe({
          next: (res) => {
            this.loading = false;
            console.log('Respuesta del servidor', res);
          },
          error: (err) => {
            console.error('Error al procesar la respuesta del servidor', err);
          },
          complete: () => {
            console.log('Procesamiento de respuesta del servidor completo');
          }
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);

    }
  }

}
