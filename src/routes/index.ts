import { Router } from "express";
import userRoutes from './api/users.routes'
const router = Router();

router.use('/users', userRoutes);

export default router;