import express from "express";
import { loginController, registerController, testController } from "../controllers/auth.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

// Router object
const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
