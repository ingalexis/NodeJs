const data = [
    {
        id: 1,
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
        id: 2,
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

const factura = [
    {
        id: 1,
        nombre: 'Tv Pollito',
        precio: 800,
        iva: 80
    },
    {
        id: 2,
        nombre: 'Pc gamer',
        precio: 1000,
        iva: 170
    }
];

export default {
    get: jest.fn( url => {
        if(url === 'https://www.electroalexis.com/api/electrodomesticos/') {
            return Promise.resolve({
                data,
                status: 200
            });
        } else if(url === 'https://www.electroalexis.com/api/electrodomesticos/1') {
            return Promise.resolve({
                data:data[0],
                status: 200
            });
        } else if(url === 'https://www.electroalexis.com/api/electrodomesticos/2') {
            return Promise.resolve({
                data:data[1],
                status: 200
            });
        } else if(url === 'https://www.electroalexis.com/api/electrodomesticoAdd/2') {
            return Promise.resolve({
                data: true,
                status: 200
            });
        } else if(url === 'https://www.electroalexis.com/api/verFactura/') {
            return Promise.resolve({
                factura,
                status: 200
            });
        } else {
            throw new Error('Mock Electro error code 404');
        }
    })
};