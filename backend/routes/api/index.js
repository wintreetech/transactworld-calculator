import { Router } from "express";

// all routes
import authRoutes from "./auth.route.js";
import customerRoutes from "./customer.route.js";
import invoicRoutes from "./invoice.route.js";
import quoteRoutes from "./quote.route.js";

const router = Router();

// auth routes
router.use("/auth", authRoutes);

// customer routes
router.use("/customer", customerRoutes);

//invoice routes
router.use("/invoice", invoicRoutes);

//quotes routes
router.use("/quote", quoteRoutes);

export default router;
