import { getElectrodomesticos, getElectrodomesticosById, addElectrodomesticosById, verFactura } from "../electrodomesticos.js";

describe('Vender electrodomestico', () => {
    it('Consultar electrodomestico por codigo.', async () => {
        const url = 'https://www.electroalexis.com/api/electrodomesticos/';
        getElectrodomesticosById(url, 1).then(result => {
            expect(result.id).toBe(1);
        });
    });

    it('Ingresar el codigo a la factura y verificar que haya sido ingresado', async () => {
        const url = 'https://www.electroalexis.com/api/electrodomesticoAdd/';
        addElectrodomesticosById(url, 2).then(result => {
            expect(result).toBe(true);
        });
    });

    it('Comprobar elementos en la factura al momento de registrar', async () => {
        const url = 'https://www.electroalexis.com/api/verFactura/';
        verFactura(url).then(result => {
            expect(result.length).toBeGreaterThan(0);
        });
    });

    it('Comprobar valores de la factura', async () => {
        const url = 'https://www.electroalexis.com/api/verFactura/';
        verFactura(url).then(result => {
            expect(result[0].precio).toBe(800);
            expect(result[0].iva).toBe(80);
        });
    });
});

describe('Mostrar stock', () => {  
    it('Mostrar electrodomesticos con descripciones y precios.', async () => {
        const url = 'https://www.electroalexis.com/api/electrodomesticos/';
        getElectrodomesticos(url).then(result => {
            expect(result.length).toBeGreaterThan(0);
        });
    });
});