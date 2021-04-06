// reproductor.js
export default class Reproductor{
    constructor() {
      this.variableEjemplo = 'valorEjemplo';
      console.log('Constructor reproductor');
    }
  
    reproducirArchivoDeSonido(nombreDeArchivo) {
      console.log('Reproduciendo archivo de sonido ' + nombreDeArchivo);
    }
  }