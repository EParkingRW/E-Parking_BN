import express from 'express';
import UserControllers from '../controllers/userControllers';
import AuthValidator from '../validation/authValidation';

const router = express();

router.post('/signup',AuthValidator.register, UserControllers.createUser);
router.post('/login',AuthValidator.login, UserControllers.signIn);
router.post('/logout', UserControllers.logOut);
router.put('/resetingpassword', UserControllers.resetingPassword);
router.put('/forgot-password', UserControllers.forgettingPassword);
router.get('/profile', UserControllers.getProfile);

export default router;
