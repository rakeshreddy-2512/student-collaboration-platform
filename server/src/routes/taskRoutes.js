import { Router } from 'express';
import { createTask, listTasks } from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.route('/').get(protect, listTasks).post(protect, createTask);

export default router;
