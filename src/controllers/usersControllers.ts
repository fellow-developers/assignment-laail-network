import { Request, Response } from 'express';
import { UserModel } from '../models/users';

export const getUser = (req: Request, res: Response) => {
    console.log("Get User");

    const type = req.query.type;

    // TODO: Add logic to get user from db depending on type and send it back
    UserModel.find();
    console.log(type);

    res.json(`User: ${type}`);
}

export const createUser = (req: Request, res: Response) => {
    console.log("Creating User");

    const data = req.body;
    console.log(data);

    // TODO: Add logic to create user in db and send it back

    res.json('User Created');
}
