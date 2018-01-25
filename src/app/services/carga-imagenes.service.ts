import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';


@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {

   }

  cargarImagenesFirebese( imagenes: FileItem[] ) {
    console.log(imagenes);
    
  }

   private guardarImagen( imagen: {nombre: string, url: string}) {
     this.db.collection(`/${this.CARPETA_IMAGENES}`)
              .add(imagen);
   }



}
