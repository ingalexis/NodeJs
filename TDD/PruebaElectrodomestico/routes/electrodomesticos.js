import express from 'express';
import { getElectrodomesticos, getElectrodomesticosById } from '../src/controller/electrodomesticos.js';

const urlBase = 'https://www.electroalexis.com';

const router = express.Router();
router.get('/', async (req, res) => {
    const userList = await getElectrodomesticos(urlBase+req.baseUrl);
    res.status(200).json(userList);
});

router.get('/:electrodomesticoId', async (req, res) => {
    const electrodomesticoIdToFind = req.params.electrodomesticoId;
    const electrodomesticoResult = await getElectrodomesticosById(urlBase+req.baseUrl ,electrodomesticoIdToFind);
    res.status(200).json(electrodomesticoResult);
});

export default router;