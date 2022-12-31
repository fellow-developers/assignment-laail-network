import { Request, Response } from 'express';
// import { ContractModel } from '../models/contracts';

export const getContracts = (req: Request, res: Response) => {
    console.log("Get Contracts");

    const n = req.params.n;

    // TODO: Add logic to retrieve contracts from db depending on n and send it back 
    // ContractModel.find();

    console.log(n);

    res.json(`Contracts: ${n}`);
}


export const createContracts = (req: Request, res: Response) => {
    console.log("Creating Contracts");

    const data = req.body;
    console.log(data);

    // TODO: Add logic to create contracts in db and send it back

    res.json('Contracts Created');
}
