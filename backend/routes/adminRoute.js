import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addTechnician, allTechnician, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/technicianController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-technician", authAdmin, upload.single('image'), addTechnician)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-technician", authAdmin, allTechnician)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;