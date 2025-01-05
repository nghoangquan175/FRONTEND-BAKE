import axios from "axios"
import { toast } from 'react-toastify';

export const LoginUser = (email, phoneNumber, password) => {
    return async dispatch => {
        dispatch({
            type: 'LOGIN_REQUEST'
        })
        try {
            const res = await axios.post('http://localhost:8000/v1/auth/login', {
                email, phoneNumber, password
            }, { withCredentials: true })

            if (res.data.code !== "1") {
                throw new Error(res.data.message)
            }
            toast.success("Đăng nhập thành công!")
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res.data.data
            })
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error(error.message)
            }
            dispatch({
                type: 'LOGIN_ERROR'
            })
        }
    }
}

export const SignupUser = async (username, email, phoneNumber, password) => {
    try {
        const res = await axios.post('http://localhost:8000/v1/auth/register', {
            username, email, phoneNumber, password
        })

        if (res.data.code !== "1") {
            throw new Error(res.data.message)
        }

        toast.success(res.data.message)
        return "1"
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message)
        } else {
            toast.error(error.message)
        }
    }
}

