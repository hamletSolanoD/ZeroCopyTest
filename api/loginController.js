import express from 'express';
import db from '../db.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  await db.read();
  const user = db.data.users.find(user => user.email === email && user.password === password);

  if (user) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

export default router;
