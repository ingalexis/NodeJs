// consumidor.js
import Reproductor from './reproductor';

export default class Consumidor {
  constructor() {
    this.reproductor = new Reproductor();
    console.log('Constructor consumidor');
  }

  reproduceAlgoCool() {
    const nombreDeArchivoCool = 'cancion.mp3';
    this.reproductor.reproducirArchivoDeSonido(nombreDeArchivoCool);
  }
}