import Reproductor from '../../reproductor';
import Consumidor from '../../consumidor';
jest.mock('../../reproductor'); // Reproductor es ahora un constructor mock

beforeEach(() => {
  // Borra todas las instancias y llamadas al constructor y a todos los métodos: Reproductor.mockClear();
});

it('Podemos verificar que el consumidor llamó al constructor de la clase', () => {
  const consumidor = new Consumidor();
  expect(Reproductor).toHaveBeenCalledTimes(1);
});

it('Podemos verificar que el consumidor llamó a algún método de la instancia', () => {
  // Muestra que mockClear() está funcionando:
  expect(Reproductor).not.toHaveBeenCalled();

  const consumidor = new Consumidor();
  // Constructor debió haber sido llamado nuevamente:
  expect(Reproductor).toHaveBeenCalledTimes(1);

  const nombreDeArchivoCool = 'cancion.mp3';
  consumidor.reproduceAlgoCool();

  // mock.instances esta disponible con mocks automáticos:
  const instanciaMockDeReproductor= Reproductor.mock.instances[0];
  const mockDeReproducirArchivoDeSonido = instanciaMockDeReproductor.reproducirArchivoDeSonido;
  expect(mockDeReproducirArchivoDeSonido.mock.calls[0][0]).toEqual(nombreDeArchivoCool);
  // Equivalente a la verificación anterior:
  expect(mockDeReproducirArchivoDeSonido).toHaveBeenCalledWith(nombreDeArchivoCool);
  expect(mockDeReproducirArchivoDeSonido).toHaveBeenCalledTimes(1);
});