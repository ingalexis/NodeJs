import express from "express";
import electrodomesticos from './electrodomesticos.js';

const router = express.Router();
router.use('/electrodomesticos', electrodomesticos);

export default router;
