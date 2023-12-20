import express from "express";
import { registerController } from "../controllers/auth.js";

//? Router object
const router = express.Router();

//? Routing
//! REGISTER || METHOD POST
router.post("/register", registerController);

export default router;
