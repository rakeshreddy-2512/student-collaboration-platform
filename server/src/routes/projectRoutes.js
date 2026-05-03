import { Router } from 'express';
import { createProject, listProjects } from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.route('/').get(protect, listProjects).post(protect, createProject);

export default router;
