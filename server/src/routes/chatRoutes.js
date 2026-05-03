import { Router } from 'express';
import { addMessage, createGroup, listChats } from '../controllers/chatController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.route('/').get(protect, listChats).post(protect, createGroup);
router.post('/:chatId/messages', protect, addMessage);

export default router;
