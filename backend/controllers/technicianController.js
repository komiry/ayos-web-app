import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import technicianModel from "../models/technicianModel.js";
import appointmentModel from "../models/appointmentModel.js";


const loginTechnician = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await technicianModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const appointmentsTechnician = async (req, res) => {
    try {

        const { tcId } = req.body
        const appointments = await appointmentModel.find({ tcId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const appointmentCancel = async (req, res) => {
    try {

        const { tcId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.tcId === tcId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


const appointmentComplete = async (req, res) => {
    try {

        const { tcId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.tcId === tcId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


const technicianList = async (req, res) => {
    try {

        const technician = await technicianModel.find({}).select(['-password', '-email'])
        res.json({ success: true, technician })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


const changeAvailablity = async (req, res) => {
    try {

        const { tcId } = req.body

        const docData = await technicianModel.findById(tcId)
        await technicianModel.findByIdAndUpdate(tcId, { available: !docData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const technicianProfile = async (req, res) => {
    try {

        const { tcId } = req.body
        const profileData = await technicianModel.findById(tcId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const updateTechnicianProfile = async (req, res) => {
    try {

        const { tcId, fees, address, available } = req.body

        await technicianModel.findByIdAndUpdate(tcId, { fees, address, available })

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const technicianDashboard = async (req, res) => {
    try {

        const { tcId } = req.body

        const appointments = await appointmentModel.find({ tcId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })



        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    loginTechnician,
    appointmentsTechnician,
    appointmentCancel,
    technicianList,
    changeAvailablity,
    appointmentComplete,
    technicianDashboard,
    technicianProfile,
    updateTechnicianProfile
}