import express from "express";
import { getUser, createUser } from "../controllers/usersControllers";
import { createContracts } from "../controllers/contractsControllers";

const router = express.Router();

// @ts-ignore
router.get("/users", getUser);
// @ts-ignore
router.post("/users", createUser);
// @ts-ignore
router.post("/contracts", createContracts);

export default router;