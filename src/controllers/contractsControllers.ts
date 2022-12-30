export const getContracts = (req: Request, res: Response) => {
    console.log("Get Contracts");

    // @ts-ignore
    const n = req.params.n;

    // TODO: Add logic to retrieve contracts from db depending on n and send it back 
    console.log(n);

    // @ts-ignore
    res.json(`Contracts: ${n}`);
}


export const createContracts = (req: Request, res: Response) => {
    console.log("Creating Contracts");

    // @ts-ignore
    const data = req.body;
    console.log(data);

    // TODO: Add logic to create contracts in db and send it back

    // @ts-ignore
    res.json('Contracts Created');
}
