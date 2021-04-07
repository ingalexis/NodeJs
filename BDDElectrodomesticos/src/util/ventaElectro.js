const data = [
    {
        id: 0,
        nombre: 'Tv Pollito',
        tamanio: '55plg',
        marca: 'Pollito',
        caracteristicas: [
            'Smartv',
            'Wifi',
            'Bluetooth'
        ],
        precio: 800,
        iva: 5
    },
    {
        id: 1,
        nombre: 'Pc gamer',
        tamanio: '22plg',
        marca: 'Perrito',
        caracteristicas: [
            '500gb ssd',
            '8gb ram',
            'i3 10Th Gen',
            'Bluetooth',
            'Windows 10'
        ],
        precio: 1000,
        iva: 18
    }
];

var factura = [];
var registrada;

const getById = id => {
    return data[id];
};

const agregarProducto = id => {
    factura.push(data[id]);
    return factura[factura.length - 1];
};

const registrarFactura = () => {
    registrada = factura;
    factura = [];
    return registrada;
};

const getAll = () => {
    return data;
};

module.exports = {
    getById,
    agregarProducto,
    registrarFactura,
    getAll
};