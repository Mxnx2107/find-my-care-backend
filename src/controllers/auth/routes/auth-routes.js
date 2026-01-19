import express from "express";
import hospitalRegistration from '../hospital-Registration-api.js';

const authRoutes = express.Router();

authRoutes.post('/hospital-registration', hospitalRegistration);

export default authRoutes;      