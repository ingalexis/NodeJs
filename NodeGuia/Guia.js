/*const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})*/

console.log(process.env.HOMEPATH); // Enviroments

// Salida linea de comandos

const x1 = 'x';
const y = 'y';
console.log(x1, y);

/**
 * %s formatear una variable como una cadena
 * %d formatear una variable como un número
 * %i formatear una variable como su parte entera solamente
 * %o formatear una variable como un objeto
 */

console.log('My %s has %d years', 'cat', 2);
console.log('%o', Number)

const x2 = 1;
const y2 = 2;
const z = 3;

/**
 * Lo que sucede es que console.count() contará la cantidad de veces que se imprime una cadena e imprimirá
 * la cuenta junto a ella
*/
console.count(
  'The value of x is ' + x2 + 
  ' and has been checked .. how many times?'
);
console.count(
  'The value of x is ' + x2 + 
  ' and has been checked .. how many times?'
);
console.count(
  'The value of y is ' + y2 + 
  ' and has been checked .. how many times?'
);

const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});


// Imprimir el seguimiento de la pila

const function2 = () => console.trace();
const function1 = () => function2();
function1();


// Calcule el tiempo invertido

const doSomething = () => console.log('test');
const measureDoingSomething = () => {
  console.time('doSomething()');
  //do something, and measure the time it takes
  doSomething();
  console.timeEnd('doSomething()');
}
measureDoingSomething();

// Colorear la salida

console.log('\x1b[33m%s\x1b[0m', 'hi!');

const chalk = require('chalk'); // Sin necesidad de recordar los códigos de escape
console.log(chalk.yellow('hi!'));


// Crear una barra de progreso

const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);


// entrada de linea por la consola

var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});*/


const inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
];

/*inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`);
});*/

/**
 * Instalar un paquete globalmente
 * node install -g paquete
 * 
 * Ver version de los paquetes instalados
 * node list
 * 
 * Instalar una versión especifica
 * npm install paquete@1.2.0
 * 
 * Ver que versiones tiene un paquete 
 * npm view paquete versions
 * 
 * reglas de actualización de paquetes
 * 
 * ^: Solo hará actualizaciones que no cambien el número distinto de cero del extremo izquierdo. Si se escribe ^0.13.0, cuando se ejecuta npm update, se puede actualizar a 0.13.1, 0.13.2y así sucesivamente, pero no a 0.14.0o por encima.
 * ~: si escribe ~0.13.0 cuando se ejecuta, npm updatese puede actualizar a las versiones de parche: 0.13.1está bien, pero 0.14.0no lo está.
 * >: acepta cualquier versión superior a la especificada
 * >=: acepta cualquier versión igual o superior a la que especifique
 * <=: acepta cualquier versión igual o inferior a la que especifique
 * <: acepta cualquier versión anterior a la que especifique
 * =: aceptas esa versión exacta
 * -: acepta una variedad de versiones. Ejemplo:2.1.0 - 2.6.2
 * ||: combinas conjuntos. Ejemplo:< 2.1 || > 2.6
 * Puede combinar algunas de esas notaciones, por ejemplo, utilizar 1.0.0 || >=1.1.0 <1.2.0para utilizar 1.0.0 o una versión de 1.1.0 en adelante, pero inferior a 1.2.0.
 *  
 * También hay otras reglas:
 * sin símbolo: acepta solo la versión específica que especifique ( 1.2.1)
 * latest: desea utilizar la última versión disponible
 * 
 * 
 * 
 * Desinstalar paquetes
 * 
 * npm uninstall <package-name>
 * npm uninstall -g <package-name>
 * 
 * 
 * 
 * NPX
 * 
 * npx le permite ejecutar ese comando npm sin tenerlo instalado localmente:
 * npx cowsay "Hello"
 */


/**
 * Descriptores de archivo
 * 
 * Otras banderas que usará comúnmente son
 * r+ abre el archivo para leer y escribir
 * w+ abra el archivo para leerlo y escribirlo, colocando la secuencia al principio del archivo. El archivo se crea si no existe
 * a  abra el archivo para escribir, colocando la secuencia al final del archivo. El archivo se crea si no existe
 * a+ abra el archivo para leer y escribir, colocando la secuencia al final del archivo. El archivo se crea si no existe
 */


 const fs = require('fs')

 fs.open('test.txt', 'r', (err, fd) => {
   //fd is our file descriptor
 });

try {
  const fd = fs.openSync('test.txt', 'r');
} catch (err) {
  console.error(err);
}



/**
 * Carpetas 
 * 
 * fs.access() Saber si la carpeta existe
 */ 

// Crear
//const fs = require('fs');

 const folderName = 'PruebaCrearCarpeta/';
 
 try {
   if (!fs.existsSync(folderName)) {
     fs.mkdirSync(folderName); // o fs.mkdir(folderName)
   }
 } catch (err) {
   console.error(err);
 }

 // Ver el contenido
 //const fs = require('fs')

 const folderPath = 'node_modules/';
 
 console.log(fs.readdirSync(folderPath));

 // Obtener ruta completa
 const path = require('path');
 let pathAdsolute = fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName);
});
console.log(pathAdsolute);

// Filtrado de archivos

const isFile = fileName => {
  return fs.lstatSync(fileName).isFile();
};

let filtrado = fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName);
})
.filter(isFile);

console.log(filtrado);

// cambiar nombre  a carpeta

fs.rename("PruebaCrearCarpeta", 'PruebaRenombrada', err => {
  if (err) {
    console.error(err);
    return;
  }
  //done
});


// Remover carpeta
const fsExtra = require('fs-extra');
const folder = 'PruebaCrearCarpeta';
fsExtra.remove(folder)
  .then(() => {
    //done
  })
  .catch(err => {
    console.error(err)
  })

  async function removeFolder(folder) {
    try {
      await fsExtra.remove(folder)
      //done
    } catch (err) {
      console.error(err)
    }
  }
  
  const folder2 = 'PruebaRenombrada';
  removeFolder(folder2);

  /**
   * Modulo fs
   * 
   * fs.access(): compruebe si el archivo existe y Node.js puede acceder a él con sus permisos
   * fs.appendFile(): agrega datos a un archivo. Si el archivo no existe, se crea
   * fs.chmod(): cambia los permisos de un archivo especificado por el nombre de archivo pasado. Relacionado: fs.lchmod(),fs.fchmod()
   * fs.chown(): cambia el propietario y el grupo de un archivo especificado por el nombre de archivo pasado. Relacionado: fs.fchown(),fs.lchown()
   * fs.close(): cierra un descriptor de archivo
   * fs.copyFile(): copia un archivo
   * fs.createReadStream(): crea una secuencia de archivos legible
   * fs.createWriteStream(): crea una secuencia de archivos grabables
   * fs.link(): crea un nuevo enlace duro a un archivo
   * fs.mkdir(): crear una nueva carpeta
   * s.mkdtemp(): crea un directorio temporal
   * fs.open(): establece el modo de archivo
   * fs.readdir(): lee el contenido de un directorio
   * fs.readFile(): lee el contenido de un archivo. Relacionado:fs.read()
   * fs.readlink(): lee el valor de un enlace simbólico
   * fs.realpath(): resuelve los punteros de ruta de archivo relativa ( ., ..) a la ruta completa
   * fs.rename(): cambiar el nombre de un archivo o carpeta
   * fs.rmdir(): eliminar una carpeta
   * fs.stat(): devuelve el estado del archivo identificado por el nombre de archivo pasado. Relacionado: fs.fstat(),fs.lstat()
   * fs.symlink(): crea un nuevo enlace simbólico a un archivo
   * fs.truncate(): truncar a la longitud especificada el archivo identificado por el nombre de archivo pasado. Relacionado:fs.ftruncate()
   * fs.unlink(): eliminar un archivo o un enlace simbólico
   * fs.unwatchFile(): dejar de observar los cambios en un archivo
   * fs.utimes(): cambia la marca de tiempo del archivo identificado por el nombre de archivo pasado. Relacionado:fs.futimes()
   * fs.watchFile(): comience a buscar cambios en un archivo. Relacionado:fs.watch()
   * fs.writeFile(): escribe datos en un archivo. Relacionado:fs.write()
   */

  /**
   * HTTP
   * 
   */

   console.log(require('http').METHODS);
   console.log(require('http').STATUS_CODES);



/**
 * NX
 * 
 * crear la aplicacion
 * npx create-nx-workspace@latest
 * 
 * instalar nx
 * npm install -g nx
 * 
 * iniciar servidor
 * nx serve todos
 * 
 * http://localhost:3333/api
 * 
 * crear el servicio
 * nx generate @nrwl/nest:service todo --project todos --directory app
 * 
 *  
 * apps/todos/src/app/todo/todo.service.ts
 * 
 * npm install --save hbs
 * 
 * main.ts
 * 
 * index.hbs
 * 
 * app.controller.ts
 * 
 * volvemos a correr servidor
 * 
 * nx g @nrwl/workspace:lib data
 * 
 * libs/data/src/lib/data.ts
 * 
 * apps/todos/src/app/todos/todos.service.ts
 * 
 * nx g @nrwl/nest:lib auth --controller
 * 
 * libs/auth/src/lib/auth.controller.ts
 * 
 * apps/todos/src/app/app.module.ts
 * 
 * http://localhost:3333/auth
 * 
 * nx dep-graph
 * 
 * cache
 * nx run todos:build
 * nx run todos:build
 * 
 */