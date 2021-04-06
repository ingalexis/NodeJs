import express from 'express';
import { getUsers, getUsersById } from '../../src/controller/user.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const userList = await getUsers(req.baseUrl);
    res.status(200).json(userList);
});

router.get('/:userid', async (req, res) => {
    const userIdToFind = req.params.userid;
    const userResult = await getUsersById(userIdToFind);
    res.status(200).json(userResult);
});

export default router;