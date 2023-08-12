import Express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt' //not sure I will download this
import { UserModel } from "../models/users";

const router = express.Router()

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });

    res.json(user)
}) //T.S. 35m ends 50m

router.post('/login');

export { router as userRouter }