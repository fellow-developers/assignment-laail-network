export const createContracts = (req: Request, res: Response) => {
    console.log("Creating Contracts");

    // @ts-ignore
    const data = req.body;
    console.log(data);

    // TODO: Add logic to create contracts in db and send it back

    // @ts-ignore
    res.json('Contracts Created');
}
