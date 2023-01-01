import { Router } from "express";
import { getUser, createUser } from "../controllers/usersControllers";
import { getNLenders, createContracts } from "../controllers/contractsControllers";

const router = Router();

router.get("/users", getUser);
router.post("/users", createUser);
router.get("/lenders/:n", getNLenders)
router.post("/contracts", createContracts);

export default router;