import { Router } from "express";
import { getUser, createUser } from "../controllers/usersControllers";
import { getContracts, createContracts } from "../controllers/contractsControllers";

const router = Router();

router.get("/users", getUser);
router.post("/users", createUser);
router.get("/contracts/:n", getContracts)
router.post("/contracts", createContracts);

export default router;