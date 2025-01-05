import { toast } from 'react-toastify';

const initUser = {
    data: {
        accesstoken: '',
        username: ''
    },
    isSuccess: false,
    isLoading: false,
    isError: false
}

const UserReducer = (state = initUser, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            // toast.info("Đang đăng nhập...")
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            // toast.success("Đăng nhập thành công!")
            return {
                ...state,
                data: {
                    accesstoken: action.payload.accesstoken,
                    username: action.payload.username
                },
                isSuccess: true,
                isLoading: false
            }
        case 'LOGIN_ERROR':
            // toast.error("Đăng nhập thất bại!")
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        // case 'SIGNUP_REQUEST':
        //     // toast.error("Đăng nhập thất bại!")
        //     return {
        //         isError: true,
        //         isLoading: false
        //     }
        // case 'SIGNUP_SUCCESS':
        //     // toast.error("Đăng nhập thất bại!")
        //     return {
        //         ...state,
        //         isError: true,
        //         isLoading: false
        //     }
        // case 'SIGNUP_ERROR':
        //     // toast.error("Đăng nhập thất bại!")
        //     return {
        //         ...state,
        //         isError: true,
        //         isLoading: false
        //     }


        default:
            return state
    }
}

export default UserReducer