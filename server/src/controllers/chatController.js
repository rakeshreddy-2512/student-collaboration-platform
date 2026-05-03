import Chat from '../models/Chat.js';

export const createGroup = async (req, res) => {
  const chat = await Chat.create({ ...req.body, members: [...(req.body.members || []), req.user._id] });
  res.status(201).json(chat);
};

export const addMessage = async (req, res) => {
  const chat = await Chat.findById(req.params.chatId);
  if (!chat) return res.status(404).json({ message: 'Chat not found' });

  chat.messages.push({ sender: req.user._id, content: req.body.content });
  await chat.save();

  return res.json(chat);
};

export const listChats = async (_req, res) => {
  const chats = await Chat.find().populate('members', 'name').populate('messages.sender', 'name');
  res.json(chats);
};
