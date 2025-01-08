import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

    const [appointments, setAppointments] = useState([])
    const [techs, setTechs] = useState([])
    const [dashData, setDashData] = useState(false)

    const getAllTechs = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/admin/all-techs', { headers: { aToken } })
            if (data.success) {
                setTechs(data.techs)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }



export default AdminContextProvider