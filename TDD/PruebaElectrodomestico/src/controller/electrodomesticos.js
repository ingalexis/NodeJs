import axios from 'axios';

const getElectrodomesticos = async url => {
    const result = await axios.get(url);
    return result.data;
};

const getElectrodomesticosById = async (url, electrodomesticoId) => {
    const result = await axios.get(`${url}${electrodomesticoId}`);
    return result.data;
};

const addElectrodomesticosById = async (url, electrodomesticoId) => {
    const result = await axios.get(`${url}${electrodomesticoId}`);
    return result.data;
};

const verFactura = async url => {
    const result = await axios.get(url);
    return result.factura;
};

export {getElectrodomesticos, getElectrodomesticosById, addElectrodomesticosById, verFactura};