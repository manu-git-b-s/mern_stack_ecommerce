import express from "express";
import { loginController, registerController } from "../controllers/auth.js";

// Router object
const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

export default router;
