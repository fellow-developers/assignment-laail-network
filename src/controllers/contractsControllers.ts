import { Request, Response } from 'express';
import { ContractModel, ContractStatus } from '../models/contracts';
import { UserModel } from '../models/users';
// import { ContractModel } from '../models/contracts';

export const getContracts = (req: Request, res: Response) => {
    console.log("Get Contracts");

    const n = req.params.n;

    // TODO: Add logic to retrieve contracts from db depending on n and send it back 
    // ContractModel.find();

    console.log(n);

    res.json(`Contracts: ${n}`);
}


export const createContracts = async (req: Request, res: Response) => {
    console.log("Creating Contracts");

    console.log("Request Body -> ", req.body);
    const { lenderId, borrowerId, principle, interest } = req.body;


    // TODO: Add logic to create contracts in db and send it back

    try {
        // Retrieve lender and borrower from db
        const lender = await UserModel.findById({ _id: lenderId });
        const borrower = await UserModel.findById({ _id: borrowerId });

        console.log('Lender -> ', lender);
        console.log('Borrower -> ', borrower);

        // Save contract in the db
        const doc = new ContractModel({
            lender: lender,
            borrower: borrower,
            principle: principle,
            interest: interest,
            status: ContractStatus.Active,
        });


        const result = await doc.save();
        console.log('Data Store in Db -> ', result);

        res.status(201).json(result);
    } catch (error) {
        console.log(error);

        // TODO: Pass only the validation errors and not the whole error object and also handle 500 error
        res.status(400).json(error);
    }
}
