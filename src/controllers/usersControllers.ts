export const getUser = (req: Request, res: Response) => {
    console.log("Get User");

    // @ts-ignore
    const type = req.query.type;

    // TODO: Add logic to get user from db depending on type and send it back
    console.log(type);

    // @ts-ignore
    res.json(`User: ${type}`);
}

export const createUser = (req: Request, res: Response) => {
    console.log("Creating User");

    // @ts-ignore
    const data = req.body;
    console.log(data);

    // TODO: Add logic to create user in db and send it back

    // @ts-ignore
    res.json('User Created');
}
