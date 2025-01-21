import express from 'express';
import { loginTechnician, appointmentsTechnician, appointmentCancel, technicianList, changeAvailablity, appointmentComplete, technicianDashboard, technicianProfile, updateTechnicianProfile } from '../controllers/technicianController.js';
import authTechnician from '../middleware/authTechnician.js';
const technicianRouter = express.Router();

technicianRouter.post("/login", loginTechnician)
technicianRouter.post("/cancel-appointment", authTechnician, appointmentCancel)
technicianRouter.get("/appointments", authTechnician, appointmentsTechnician)
technicianRouter.get("/list", technicianList)
technicianRouter.post("/change-availability", authTechnician, changeAvailablity)
technicianRouter.post("/complete-appointment", authTechnician, appointmentComplete)
technicianRouter.get("/dashboard", authTechnician, technicianDashboard)
technicianRouter.get("/profile", authTechnician, technicianProfile)
technicianRouter.post("/update-profile", authTechnician, updateTechnicianProfile)

export default technicianRouter;