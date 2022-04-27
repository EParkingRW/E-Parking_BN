import express from 'express';
import UserControllers from '../controllers/userControllers';

const router = express();

router.post('/signup', UserControllers.createUser);
router.post('/login', UserControllers.signIn);
router.post('/logout', UserControllers.logOut);
router.put('/resetingpassword', UserControllers.resetingPassword);
router.put('/forgot-password', UserControllers.forgettingPassword);
router.get('/profile', UserControllers.getProfile);

export default router;
